export class Colour {
  constructor(r, g, b, a = 255) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a

    this.upperLimit = 255
    this.lowerLimit = 0

    this.rLock = false
    this.gLock = false
    this.bLock = false
    this.aLock = false

    this.updateColor()
  }

  updateColor() {
    this.rgba = `rgba(${Math.floor(this.r)}, ${Math.floor(this.g)}, ${Math.floor(
      this.b
    )}, ${Math.floor(this.a)})`
  }

  lighten(delta = 1) {
    if (!this.rLock) this.r = Math.min(this.r + delta, this.upperLimit)
    if (!this.gLock) this.g = Math.min(this.g + delta, this.upperLimit)
    if (!this.bLock) this.b = Math.min(this.b + delta, this.upperLimit)
    this.updateColor()
    return this
  }

  darken(delta = 1) {
    if (!this.rLock) this.r = Math.max(this.r - delta, this.lowerLimit)
    if (!this.gLock) this.g = Math.max(this.g - delta, this.lowerLimit)
    if (!this.bLock) this.b = Math.max(this.b - delta, this.lowerLimit)
    this.updateColor()
    return this
  }

  invert(includeAlpha = false) {
    this.r = this.upperLimit - this.r
    this.g = this.upperLimit - this.g
    this.b = this.upperLimit - this.b
    if (includeAlpha) this.a = 1 - this.a
    this.updateColor()
    return this
  }

  shift() {
    const temp = this.r
    this.r = this.g
    this.g = this.b
    this.b = temp
    this.updateColor()
    return this
  }

  getColor = () => this.rgba

  clone = () => new Colour(this.r, this.g, this.b)
}

export const mix = (r, g, b, a = 255) => new Colour(r, g, b, a)

export const Stock = {
  white: new Colour(255, 255, 255),
  black: new Colour(0, 0, 0),
  red: new Colour(255, 0, 0),
  green: new Colour(0, 255, 0),
  blue: new Colour(0, 0, 255),
  yellow: new Colour(255, 200, 0),
  mustard: new Colour(196, 160, 0),
  lightblue: new Colour(154, 199, 245),
  lightgreen: new Colour(111, 212, 121),
  grey: new Colour(89, 87, 100),
  peach: new Colour(252, 164, 82),
  lightbrown: new Colour(193, 125, 17),
  purple: new Colour(173, 127, 168),
  orange: new Colour(206, 92, 0),
}
