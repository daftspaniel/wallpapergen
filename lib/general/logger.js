export const Logger = (config) => {
  return {
    log: (text) => {
      if (config.log) {
        if (!text) {
          text = '-'.repeat(40)
        }
        console.log(text)
      }
    },
  }
}
