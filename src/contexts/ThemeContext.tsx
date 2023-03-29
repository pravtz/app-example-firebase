'use client'
import { settigsPlataform } from "@/config"
import { createContext, useEffect, useState } from "react"

export type ThemeContextType = {
    isDarkTheme: Boolean,
    getTheme: () => "light" | 'dark',
    handleToggleTheme: () => void,
    setModeTheme: (typeModeTheme: "light" | 'dark') => void,
    setDarkModeTheme: () => void,
    setLightModeTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<Boolean>(settigsPlataform.initialThemeDark)

    useEffect(()=>{
        const className = "dark";
        const bodyClass = window.document.body.classList;
        console.log("bodyClass", bodyClass)
        if(isDarkTheme){
            bodyClass.add(className)
        }else{
            bodyClass.remove(className)
        }
    },[isDarkTheme])

    const getTheme = () => {
        if (isDarkTheme) {
            return 'dark'
        } else {
            return 'light'
        }
    }

    const setDarkModeTheme = () => {
        setIsDarkTheme(true)
    }

    const setLightModeTheme = () => {
        setIsDarkTheme(false)
    }

    const setModeTheme = (typeModeTheme: "light" | 'dark'): void => {
        if (typeModeTheme == 'light') {
            setIsDarkTheme(false)
        }
        if (typeModeTheme == 'dark') {
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