import fs from 'fs'

export const savePNG = (canvas, filepath) => {
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(filepath, buffer)
}
