import c from 'canvas'
import os from 'os'

import { savePNG } from './lib/general/io.js'
import { Gfx } from './lib/general/gfx.js'
import { generatePalette } from './lib/wallpaper/palette.js'
import { getWord, getFont } from './lib/wallpaper/words.js'

const width = 1920
const height = 1200

const canvas = c.createCanvas(width, height)
const context = canvas.getContext('2d')
const g = new Gfx(context, width, height)

const date = new Date()
let day = date.getDate()

// Verbose details
console.log('Wallpaper Generator: ',date)
console.log('OS:\t' + os.platform())

// Palette generation
const palette = generatePalette(date)

// Clear to background
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
