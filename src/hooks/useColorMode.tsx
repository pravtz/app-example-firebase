import { useContext } from "react"
import ThemeContext from "@/contexts/ThemeContext"


export const useColorMode = () => {
    const theme =  useContext(ThemeContext)

    const setColorMode = theme?.setModeTheme
    const colorMode = theme?.getTheme

    return [colorMode, setColorMode]
}