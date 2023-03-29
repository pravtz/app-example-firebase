import { useContext } from "react"
import ThemeContext from '@/contexts/ThemeContext'

export const useModeTheme = () => {
    const theme = useContext(ThemeContext)

    const colorModeTheme = theme?.getTheme
    const colorModeThemeDark = theme?.setDarkModeTheme
    const colorModeThemeLight = theme?.setLightModeTheme

    return {colorModeTheme,colorModeThemeDark,colorModeThemeLight }

}