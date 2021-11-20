import c from 'canvas'
import os from 'os'
import fs from 'fs'

import { config } from './config.js'
import { Logger } from './lib/general/logger.js'
import { savePNG } from './lib/general/io.js'
import { logObject } from './lib/general/util.js'

import { Gfx } from './lib/general/gfx.js'
import { generatePalette } from './lib/wallpaper/palette.js'
import { generateBackground } from './lib/wallpaper/background.js'
import { drawText } from './lib/wallpaper/text.js'

const startTime = performance.now()

// ----------------------------------
const log = Logger(config).log
const canvas = c.createCanvas(config.width, config.height)
const context = canvas.getContext('2d')
const g = new Gfx(context, config.width, config.height)

const date = new Date()
let day = date.getDate()

// App and Platform details
log('Wallpaper Generator: ' + date)
log('OS:\t' + os.platform())

// Wallpaper generation
const palette = generatePalette(date)
log()
log('Palette')
log()
logObject(log, palette, (c) => c.getColor())
log()
generateBackground(g, palette, date)

if (day % 2 === 0) {
  for (let h = day; h < config.height - day; h += day * 2) {
    g.drawHStripe(palette.grid, h, config.width - day * 2, 4, day)
    palette.grid.lighten(-2)
  }
}

if (day % 4 === 0) {
  for (let h = day; h < config.width - day; h += day * 2) {
    g.drawVStripe(palette.grid, h, config.height - day * 2, 4, day)
    palette.grid.lighten(-4)
  }
}
drawText(g, palette, date)

savePNG(canvas, config.filename)

// ----------------------------------
const endTime = performance.now()

log(`Saved to : ${config.filename} ${fs.statSync(config.filename).size} bytes`)
log('Time taken: ' + (endTime - startTime))
