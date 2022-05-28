export const PREFIX = 'FFXIV__'

const storage = window.localStorage

/**
 * 添加前缀
 */
export function createKey(key: string) {
  return `${PREFIX}${key}`
}

/**
 * 移除前缀
 */
export function uncreateKey(key: string) {
  return key.replace(PREFIX, '')
}

export function getStorage(key: string) {
  const value = storage.getItem(createKey(key))

  try {
    return typeof value !== 'undefined' ? JSON.parse(value!) : undefined
  } catch (err) {}

  return undefined
}
export function setStorage(key: string, state: object) {
  storage.setItem(createKey(key), JSON.stringify(state))
}
export function removeStorage(key: string) {
  storage.removeItem(createKey(key))
}
