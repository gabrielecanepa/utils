export const chunks = (arr, n) => arr.reduce((result, el, i) =>
  ({ ...result, [Math.floor(i / n)]: [].concat((result[Math.floor(i / n)] || []), el) }), [])
