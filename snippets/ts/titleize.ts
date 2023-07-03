/**
 * Returns a titleized version of the input string.
 */
export const titleize = (string: string, mode?: 'lower'): string => {
  try {
    const title = string.split(' ').map(w => `${w[0].toUpperCase()}${w.slice(1)}`).join(' ')
    return mode === 'lower' ? `${title[0]}${title.slice(1).toLowerCase()}` : title
  } catch (e) {
    return string
  }
}
