/**
 * Logger object with methods for logging infos, warnings, and errors.
 */
export const logger = {
  /**
   * Logs a generic message to the console.
   */
  // eslint-disable-next-line no-console
  log: (...data: any[]): void => console.log(...data),
  /**
   * Logs an informative message to the console.
   */
  info: (...data: any[]): void => console.info('[INFO]', ...data),
  /**
   * Logs a warning message to the console.
   */
  warn: (...data: any[]): void => console.warn('[WARN]', ...data),
  /**
   * Logs an error message to the console.
   */
  error: (...data: any[]): void => console.error('[ERROR]', ...data),
  /**
   * Clears the current line in the console.
   */
  clearLine: (): void => {
    process.stdout.moveCursor(0, -1)
    process.stdout.clearLine(1)
  },
}
