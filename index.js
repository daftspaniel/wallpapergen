import c from 'canvas'
import os from 'os'
import friendlyWords from 'friendly-words'

import { savePNG } from './lib/io.js'
import { Gfx } from './lib/gfx.js'
import { Colour } from './lib/colour.js'

const width = 1920
const height = 1200

const canvas = c.createCanvas(width, height)
const context = canvas.getContext('2d')
const g = new Gfx(context, width, height)

const date = new Date()
const day = date.getDate()
const background = new Colour(0, 0, 100 + day)
const foreground = new Colour(0, 100 + day, 0)

const shade = date.getDay() + 100
console.log(os.platform() + ' ' + date)
g.cls(background)

for (let h = day; h < height - day; h += day * 2) {
  g.drawHStripe(foreground, h, width - day, 4, day)
}

console.log(friendlyWords.objects[day])
const word = friendlyWords.objects[day]
context.fillStyle = '#ffffff'
context.font = 'bold 72pt Arial'
const textWidth = context.measureText(word).width
context.fillText(word, (width - textWidth) / 2, 555)

savePNG(canvas, 'out\\test.png')
