export function localStorageGetItem(key: string) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }
  
  export function localStorageRemoveItem(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {}
  }
  
  export function localStorageSetItem(key: string, value: any) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {}
  }