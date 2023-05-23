import { writeFileSync } from 'fs'

export const logger = {
  info: (...data: any[]): void => console.info('[INFO]', ...data),
  warn: (...data: any[]): void => console.warn('[WARN]', ...data),
  error: (...data: any[]): void => {
    console.error('[ERROR]', ...data)
    const errorLog = `[ERROR] ${new Date().toISOString()}\n${data}\n\n`
    writeFileSync('errors.log', errorLog, { flag: 'a' })
  }
}
