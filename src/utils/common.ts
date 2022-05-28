export function pick<T, K extends keyof T>(obj: T, keys: K[]) {
  const res = {} as Pick<T, K>
  keys.forEach((key) => {
    res[key] = obj[key]
  })
  return res
}

export function stringToRegexp(value: string) {
  return new Function(`return /${value}/`)()
}
