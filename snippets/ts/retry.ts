import sleep from './sleep'

export const retry = async <T>(fn: Promise<T>, timeout = 1000, retries = 10): Promise<T> => {
  try {
    await sleep(timeout)
    return await fn
  } catch (e) {
    if (retries === 0) throw e
    return await retry(fn, timeout * 2, retries - 1)
  }
}
