const dashedLine = '-'.repeat(40)
export const Logger = (config) => {
  return {
    log: (text, linesBeforeAfter) => {
      if (config.log) {
        if (!text) {
          text = dashedLine
        }
        if (linesBeforeAfter) {
          console.log(dashedLine)
        }
        console.log(text)
        if (linesBeforeAfter) {
          console.log(dashedLine)
        }
      }
    },
  }
}
