import { savePNG } from './lib/io.js'
import c from 'canvas'

const width = 640
const height = 480
const date = new Date()
const shade = date.getDay() + 100
const canvas = c.createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#00FF00'
context.fillStyle = `rgb(0,${shade},0)`
context.fillRect(0, 0, width, height)

savePNG(canvas, 'out\\test.png')