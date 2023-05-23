export const chunks = <T>(arr: T[], size: number): T[][] => arr.reduce((chunks, el, i) => {
  const chunk = Math.floor(i / size)
  chunks[chunk] = [].concat((chunks[chunk] || []), el)
  return chunks
}, [])
