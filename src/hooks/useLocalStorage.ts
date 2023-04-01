import { useEffect, useState } from "react"

// export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
//   const [value, setValue] = useState<T>(() => {
//     const jsonValue = localStorage.getItem(key)
//     if (jsonValue != null) return JSON.parse(jsonValue)

//     if (typeof initialValue === "function") {
//       return (initialValue as () => T)()
//     } else {
//       return initialValue
//     }
//   })

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value))
//   }, [key, value])

//   return [value, setValue] as [typeof value, typeof setValue]
// }

export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as [
    typeof storedValue,
    typeof setStoredValue
  ]
}
