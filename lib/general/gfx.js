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

  drawVStripe(color, x, height, thickness = 1, start = 0) {
    const c = this.context
    c.fillStyle = color.getColor()
    c.fillRect(x, start, thickness, height)
  }

  drawText(color, x, y, text, shadow = true, x_s = 8, y_s = 5) {
    const c = this.context
    if (shadow) {
      c.fillStyle = 'rgba(0,0,0,0.5)'
      c.fillText(text, x - x_s, y - y_s)
    }
    c.fillStyle = color.getColor()
    c.fillText(text, x, y)
  }

  drawRect(color, x, y, width, height, shadow = true, x_s = 8, y_s = 5) {
    const c = this.context
    c.fillStyle = color.getColor()
    if (shadow) {
      c.fillStyle = 'rgba(0,0,0,0.5)'
      c.fillRect(x - x_s, y - y_s, width, height)
    }
    c.fillStyle = color.getColor()
    c.fillRect(x, y, width, height)
  }
}
