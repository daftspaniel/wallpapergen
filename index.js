import c from 'canvas'
import os from 'os'

import { savePNG } from './lib/io.js'
import { Gfx } from './lib/gfx.js'
import { mix, Colour, Stock } from './lib/colour.js'
import { getWord, getFont } from './lib/words.js'

const width = 1920
const height = 1200

const canvas = c.createCanvas(width, height)
const context = canvas.getContext('2d')
const g = new Gfx(context, width, height)

const date = new Date()
let day = date.getDate()
const shade = date.getDate() + 100

const palette = {
  background: mix(0, 0, shade),
  grid: mix(0, shade, 0),
  text: mix(255, 255, 255),
}
console.log(date)
console.log('OS:\t' + os.platform())

palette.text = palette.background
  .clone()
  .invert()
  .lighten(3 * day)

palette.grid = palette.background
  .clone()
  .lighten(12 * day)

g.cls(palette.background)

if (day % 2 === 0) {
  for (let h = day; h < height - day; h += day * 2) {
    g.drawHStripe(palette.grid, h, width - day * 2, 4, day)
    palette.grid.lighten(-2)
  }
}

if (day % 4 === 0) {
  for (let h = day; h < width - day; h += day * 2) {
    g.drawVStripe(palette.grid, h, height - day * 2, 4, day)
    palette.grid.lighten(-4)
  }
}

const word = getWord()
context.font = getFont(151)

const textWidth = context.measureText(word).width

g.drawText(palette.text, (width - textWidth) / 2, 555, word)

savePNG(canvas, 'out\\test.png')
