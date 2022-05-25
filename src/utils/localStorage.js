export function storeItem(key, value) {
  return window.localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {}
}
