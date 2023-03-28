import { useContext } from "react"
import ThemeContext from '@/contexts/ThemeContext'

export const useModeThemeColor = () => {
    return useContext(ThemeContext)

}