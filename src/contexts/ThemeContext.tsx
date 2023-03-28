'use client'
import { settigsPlataform } from "@/config"
import { createContext, useState } from "react"

type ThemeContextType = {
    isDarkTheme: Boolean,
    getTheme: () => "lightMode" | 'darkMode',
    handleToggleTheme: () => void,
    setModeTheme: (typeModeTheme: "lightMode" | 'darkMode') => void,
    setDarkModeTheme: () => void,
    setLightModeTheme: () => void,
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<Boolean>(settigsPlataform.initialThemeDark)

    const getTheme = () => {
        if (isDarkTheme) {
            return 'darkMode'
        } else {
            return 'lightMode'
        }
    }

    const setDarkModeTheme = () => {
        setIsDarkTheme(true)
    }

    const setLightModeTheme = () => {
        setIsDarkTheme(false)
    }

    const setModeTheme = (typeModeTheme: "lightMode" | 'darkMode'): void => {
        if (typeModeTheme == 'lightMode') {
            setIsDarkTheme(false)
        }
        if (typeModeTheme == 'darkMode') {
            setIsDarkTheme(true)
        }
    }

    const handleToggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <ThemeContext.Provider value={{
            isDarkTheme,
            getTheme,
            handleToggleTheme,
            setModeTheme,
            setLightModeTheme,
            setDarkModeTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContext