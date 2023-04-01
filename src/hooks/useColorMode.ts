import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

export default function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light")

  useEffect(() => {
    const className = "dark"
    const bodyClasses = window.document.body.classList

    colorMode === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className)
  }, [colorMode])

  return [colorMode, setColorMode] as [typeof colorMode, typeof setColorMode]
}
