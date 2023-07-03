/**
 * Returns a new object with keys sorted alphabetically.
 */
export const sortByKey = <T extends Record<string, any>>(obj: T): T => Object.keys(obj).sort().reduce((o, k) =>  ({ ...o, [k]: obj[k] }), {} as T)
