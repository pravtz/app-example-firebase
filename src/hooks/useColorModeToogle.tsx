import { useContext } from "react"
import ThemeContext from "@/contexts/ThemeContext"


export const useColorModeToogle = () => {
    const theme =  useContext(ThemeContext)

    const colorMode = theme?.getTheme
    const colorModeToogle = theme?.handleToggleTheme

    return {colorMode, colorModeToogle}
}

