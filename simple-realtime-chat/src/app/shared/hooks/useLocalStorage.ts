type TLocalStorageValue = number | string | boolean | object;

export default function useLocalStorage<T>() {
  function setItem(key: string, value: TLocalStorageValue) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  function getItem(key: string, initialValue: TLocalStorageValue):TLocalStorageValue | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return {
    setItem,
    getItem,
  }
}
