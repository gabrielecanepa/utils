export const titleize = (string: string, mode: 'preserve' | 'lower' | 'upper' = 'preserve'): string => {
  try {
    const title = string.split(' ').map(w => `${w[ 0 ].toUpperCase()}${w.slice(1)}`).join(' ')

    switch (mode) {
      case 'preserve':
        return title
      case 'lower':
        return `${title[ 0 ]}${title.slice(1).toLowerCase()}`
      case 'upper':
        return title.toUpperCase()
      default:
        return title
    }
  } catch (e) {
    return string
  }
}
