import { getWord, getFont } from './words.js'

export const drawText = (g, palette, date) => {
  const word = getWord()
  g.context.font = getFont(140 + date.getDate())

  const textWidth = g.context.measureText(word).width

  g.drawText(palette.text, (g.width - textWidth) / 2, 555, word)
}
