import { config } from '../../config.js'
import { getWord, getFont } from './words.js'

export const drawText = (g, palette, date) => {
  const word = getWord()
  g.context.font = getFont(140 + date.getDate())

  let textMeasurements = g.context.measureText(word)

  if (textMeasurements.width > g.width * 0.9) {
    g.context.font = getFont(110 + date.getDate())
    textMeasurements = g.context.measureText(word)
  }

  const textX = (g.width - textMeasurements.width) / 2
  const textY = g.height / 2 - textMeasurements.actualBoundingBoxAscent / 2
  
  if (config.labelBehindText) {
    const pad = 8 + date.getDate()
    g.context.fillStyle = palette.label.getColor()
    g.context.fillRect(
      textX - pad,
      textY - pad - textMeasurements.actualBoundingBoxAscent,
      textMeasurements.width + pad * 3,
      textMeasurements.actualBoundingBoxAscent + pad * 3
    )
  }

  g.drawText(palette.text, textX, textY, word)
}
