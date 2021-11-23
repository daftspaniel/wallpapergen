export const drawStripes = (g, palette, date, config) => {
  const day = date.getDate() + 2

  if (config.horizontalStripes) {
    if (day % 2 === 0) {
      for (let h = day; h < g.height - day; h += day * 2) {
        g.drawHStripe(palette.grid, h, g.width - day * 2, 4, day)
        palette.grid.darken(1)
      }
    }
  }

  if (config.verticalStripes) {
    if (day % 4 === 0) {
      for (let h = day; h < g.width - day; h += day * 2) {
        g.drawVStripe(palette.grid, h, g.height - day * 2, 4, day)
        palette.grid.darken(2)
      }
    }
  }
}
