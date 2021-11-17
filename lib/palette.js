import { mix } from './colour.js'

export const generatePalette = (date) => {
  const shade = date.getDate() + 200
  const day = date.getDay()

  const palette = {
    background: mix(0, 0, shade),
    grid: mix(0, shade, 0),
    text: mix(255, 255, 255),
  }

  for (let j = 0; j < (day * day+1); j++) {
    palette.background.shift()
  }

  palette.text = palette.background
    .clone()
    .invert()
    .lighten(3 * day)

  palette.grid = palette.background.clone().lighten(12 * day)

  return palette
}
