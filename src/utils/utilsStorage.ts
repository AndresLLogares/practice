export enum LocalStorageKeys {
  REFRESH_TOKEN = "refreshToken",
  TOKEN = "token",
}

export const utilStorage = () => {
  const checkLocalStorage = (key: LocalStorageKeys) => {
    const result = localStorage.getItem(key);
    return !!result && JSON.parse(result);
  };

  const saveInLocalStorage = (key: LocalStorageKeys, value: string) => {
    localStorage.setItem(key, value);
  };
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return {
    checkLocalStorage: checkLocalStorage,
    saveInLocalStorage: saveInLocalStorage,
    clearLocalStorage: clearLocalStorage,
  };
};
