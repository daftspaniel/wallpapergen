import c from 'canvas'
import os from 'os'

import { savePNG } from './lib/io.js'
import { Gfx } from './lib/gfx.js'
import { Colour, Stock } from './lib/colour.js'
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
  background: new Colour(0, 0, shade),
  grid: new Colour(0, shade, 0),
}
console.log(date)
console.log('OS:\t' + os.platform())

g.cls(palette.background)

if (day % 2 === 0) {
  for (let h = day; h < height - day; h += day * 2) {
    g.drawHStripe(palette.grid, h, width - day * 2, 4, day)
  }
}

if (day % 4 === 0) {
  for (let h = day; h < width - day; h += day * 2) {
    g.drawVStripe(palette.grid, h, height - day * 2, 4, day)
  }
}

const word = getWord()
context.font = getFont(111)

const textWidth = context.measureText(word).width

g.drawText(Stock.white, (width - textWidth) / 2, 555, word)

savePNG(canvas, 'out\\test.png')
