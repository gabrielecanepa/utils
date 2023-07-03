/**
 * Returns true if the current enviroment is TypeScript.
 */
export const isTS = (): boolean => {
  if (path.extname(__filename) === '.ts') return true

  const lastArg = process.execArgv[process.execArgv.length - 1]
  if (lastArg && path.parse(lastArg).name.indexOf('ts-node') > 0) return true

  try {
    const sym = Symbol.for('ts-node.register.instance').toString() as keyof NodeJS.Process
    return !!process[sym] || ['development', 'test'].includes(process.env.NODE_ENV)
  } catch (error) {
    logger.error(error)
    return false
  }
}
