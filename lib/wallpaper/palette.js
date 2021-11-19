import { mix } from '../general/colour.js'

export const generatePalette = (date) => {
  const shade = date.getDate() + 128
  const day = date.getDay()

  const palette = {
    background: mix(0, 0, shade),
    grid: mix(0, shade, 0),
    text: mix(0, 0, shade).invert().lighten(-day),
  }

  for (let j = 0; j < day * day + 1; j++) {
    palette.background.shift()
  }

  for (let j = 0; j < day; j++) {
    palette.text.darken(2)
  }

  palette.grid = palette.background.clone().lighten(12 * day)

  return palette
}
