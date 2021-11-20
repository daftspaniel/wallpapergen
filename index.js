import fs from 'fs'
import os from 'os'
import { Logger } from './lib/general/logger.js'

import { config } from './config.js'
import { generateWallpaper } from './lib/wallpaper/wallpaper.js'

export const log = Logger(config).log

const startTime = performance.now()
const date = new Date()

// App and Platform details
log('Wallpaper Generator: ' + date)

log('OS:\t' + os.platform())

generateWallpaper(log, config, date)

const endTime = performance.now()

log()
log(`Saved to : ${config.filename} ${fs.statSync(config.filename).size} bytes`)
log('Time taken: ' + (endTime - startTime))
