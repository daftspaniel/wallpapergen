export class Gfx {
  constructor(context, width, height) {
    this.context = context
    this.width = width
    this.height = height
  }
  cls(color) {
    const c = this.context
    c.fillStyle = color.getColor()
    c.fillRect(0, 0, this.width, this.height)
  }
  drawHStripe(color, y, width, thickness = 1, start = 0) {
    const c = this.context
    c.fillStyle = color.getColor()
    c.fillRect(start, y, width, thickness)
  }
}
