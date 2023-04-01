import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

export default function useColorMode() {
  const [theme, setTheme] = useLocalStorage("theme", "light")

  useEffect(() => {
    const className = "dark"
    const bodyClasses = document.body.classList

    theme === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className)
  }, [theme])

  return [theme, setTheme] as [typeof theme, typeof setTheme]
}
