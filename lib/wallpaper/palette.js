import { mix } from '../general/colour.js'

export const generatePalette = (date) => {
  const shade = date.getDate() + 128
  const day = date.getDay()

  const palette = {
    background: mix(0, 0, shade),
    grid: mix(0, shade, 0),
    text: mix(0, 0, shade).invert().lighten(-day),
    label: mix(shade * 0.5, shade * 0.2, shade * 0.3, 32),
  }

  for (let j = 0; j < day * day + 1; j++) {
    palette.background.shift()
    palette.label.shift()
  }

  for (let j = 0; j < day; j++) {
    palette.text.darken(2)
    palette.label.darken(1)
  }

  const gridColour = palette.background.clone().lighten(12 * day)
  gridColour.lowerLimit = 99
  gridColour.upperLimit = 213
  gridColour.updateColor()
  palette.grid = gridColour

  return palette
}
