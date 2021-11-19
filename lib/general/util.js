export const logObject = (log, o, render) => {
  const keys = Object.keys(o)
  for (let key of keys) {
    log(key + ' : ' + render(o[key]))
  }
}
