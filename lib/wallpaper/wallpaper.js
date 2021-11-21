import c from 'canvas'
import fs from 'fs'

import { Gfx } from '../general/gfx.js'
import { savePNG } from '../general/io.js'
import { logObject } from '../general/util.js'

import { drawText } from './text.js'
import { drawStripes } from './stripes.js'
import { generatePalette } from './palette.js'
import { generateBackground } from './background.js'

export const generateWallpaper = (log, config, date, count) => {
  const canvas = c.createCanvas(config.width, config.height)
  const context = canvas.getContext('2d')
  const g = new Gfx(context, config.width, config.height)
  const palette = generatePalette(date)

  if (config.logging.palette) {
    log('Palette', true)
    logObject(log, palette, (c) => c.getColor())
  }

  generateBackground(g, palette, date)
  drawStripes(g, palette, date, config)
  if (config.text) {
    drawText(g, palette, date)
  }
  const filename = `${config.filename}${count}.png`
  savePNG(canvas, filename)
  if (config.logging.save) {
    log(`Saved to : ${config.filename} ${fs.statSync(filename).size} bytes`)
  }
}
