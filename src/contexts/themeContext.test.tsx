import {fireEvent, render} from '@testing-library/react'
import { ThemeProvider, ThemeContext, type ThemeContextType } from "./ThemeContext"



describe('Context Theme', () => {
    it.skip("should show which theme is being used when using getTheme()", async () => {
        const {getByTestId, getByText} = render(
            <ThemeProvider>
                <ThemeContext.Consumer>
                    {(props)=>(
                        <div >
                            <button data-testid="test-button" onClick={() => console.log(props?.getTheme())}>Button</button>
                        </div>
                    )}
                </ThemeContext.Consumer>
            </ThemeProvider>
        )
        //fireEvent.click(getByTestId("test-button"));
        //expect(getByText("nova tarefa")).toBeInTheDocument()
    })
    it.todo("should change theme to dark mode when using setLightModeTheme()")
    it.todo("should change theme to light mode when using setDarktModeTheme()")
    it.todo("should change theme to light when pass with props lightMode setModetheme('lightMode')")
    it.todo("should change theme to dark when pass with props darkMode setModetheme('darkMode')")
    it.todo("should change theme to light when dark when using handleToggleTheme()")
    it.todo("should change theme to dark when light when using handleToggleTheme()")

})


