import { useContext } from "react"
import ThemeContext from '@/contexts/ThemeContext'

export const useModeThemeColor = (darkMode: string, lightMode: string) => {

    const theme = useContext(ThemeContext)
    if (theme?.isDarkTheme) {
        return darkMode
    } else {
        return lightMode
    }
}