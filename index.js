import os from 'os'
import { Logger } from './lib/general/logger.js'
import { Command } from 'commander/esm.mjs'

import { config } from './config.js'
import { generateWallpaper } from './lib/wallpaper/wallpaper.js'

const log = Logger(config).log
const program = new Command()

program.option(
  '-c, --count <number>',
  'number of wallpaper images to produce',
  1
)

program.parse(process.argv)

const { count } = program.opts()
const startTime = performance.now()
let date = new Date()

// App and Platform details
log('Wallpaper Generator: ' + date)

log('OS:\t' + os.platform())
log('Please wait...')

for (let k = 0; k < count; k++) {
  generateWallpaper(log, config, date, k)
  date.setDate(date.getDate() + 1)
}

const endTime = performance.now()

log()
log('Time taken: ' + (endTime - startTime))
