export function setLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function getLocalStorage(key: string): any {
  const localStorageValue = localStorage.getItem(key);
  if (typeof localStorageValue === "string") {
    const returnedValue = JSON.parse(localStorageValue);
    return returnedValue;
  } else {
    setLocalStorage(key, "true");
  }
}
