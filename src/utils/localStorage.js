export function saveToLocal(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value))
}

export function getFromLocal(name) {
  let localStorageName = window.localStorage.getItem(name)
  try {
    if (localStorageName) {
      return JSON.parse(localStorageName)
    } else {
      return null
    }
  } catch (e) {
    return null
  }
}

export function removeFromLocal(name) {
  window.localStorage.removeItem(name)
}