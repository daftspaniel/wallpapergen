export const drawStripes = (g, palette, date) => {
  let day = date.getDate()

  if (day % 2 === 0) {
    for (let h = day; h < g.height - day; h += day * 2) {
      g.drawHStripe(palette.grid, h, g.width - day * 2, 4, day)
      palette.grid.lighten(-2)
    }
  }

  if (day % 4 === 0) {
    for (let h = day; h < g.width - day; h += day * 2) {
      g.drawVStripe(palette.grid, h, g.height - day * 2, 4, day)
      palette.grid.lighten(-4)
    }
  }
}
