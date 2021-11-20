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
import { drawStripes } from './lib/wallpaper/stripes.js'

const log = Logger(config).log

const startTime = performance.now()
const canvas = c.createCanvas(config.width, config.height)
const context = canvas.getContext('2d')
const g = new Gfx(context, config.width, config.height)

const date = new Date()

// App and Platform details
log('Wallpaper Generator: ' + date)
log('OS:\t' + os.platform())

// Wallpaper generation
const palette = generatePalette(date)
log()
log('Palette')
log()
logObject(log, palette, (c) => c.getColor())

generateBackground(g, palette, date)

drawStripes(g, palette, date)

drawText(g, palette, date)

savePNG(canvas, config.filename)

// ----------------------------------
const endTime = performance.now()
log()
log(`Saved to : ${config.filename} ${fs.statSync(config.filename).size} bytes`)
log('Time taken: ' + (endTime - startTime))
