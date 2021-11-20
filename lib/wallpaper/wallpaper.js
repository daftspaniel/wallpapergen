import c from 'canvas'

import { Gfx } from '../general/gfx.js'
import { savePNG } from '../general/io.js'
import { logObject } from '../general/util.js'

import { drawText } from './text.js'
import { drawStripes } from './stripes.js'
import { generatePalette } from './palette.js'
import { generateBackground } from './background.js'

export const generateWallpaper = (log, config, date) => {
  const canvas = c.createCanvas(config.width, config.height)
  const context = canvas.getContext('2d')
  const g = new Gfx(context, config.width, config.height)
  const palette = generatePalette(date)

  log('Palette', true)
  logObject(log, palette, (c) => c.getColor())

  generateBackground(g, palette, date)
  drawStripes(g, palette, date, config)
  if (config.text) {
    drawText(g, palette, date)
  }
  savePNG(canvas, config.filename)
}
