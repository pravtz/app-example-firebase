import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { ButtonIcon } from "."
import { BsLink } from "react-icons/bs"

describe('ButtonIcon', () => {

    it('should render button default', () => {
        render(<ButtonIcon />)
        const iconSVG = document.querySelector('#iconSVG')
        expect(iconSVG?.innerHTML).toBe('<path d=\"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z\"></path>')
        expect(iconSVG?.outerHTML.toString()).toContain('color="#000')
        expect(iconSVG?.outerHTML.toString()).toContain('width="1.25em')
        expect(screen.getByRole('button').classList).toContain("bg-[#ddd]")

    })
    it('should render the icon received by props', () => {
        render(<ButtonIcon icon={BsLink} />)
        const iconSVG = document.querySelector('#iconSVG')
        expect(iconSVG?.innerHTML).toBe('<path d=\"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z\"></path><path d=\"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z\"></path>')
    })

    it('should render the color received by props', () => {
        render(<ButtonIcon colorIcon="#777" />)
        const iconSVG = document.querySelector('#iconSVG')
        expect(iconSVG?.outerHTML.toString()).toContain('color="#777')
    })

    it('should render the background color received by props', () => {
        render(<ButtonIcon bgButton="#666" />)
        expect(screen.getByRole('button').classList).toContain("bg-[#666]")
    })

    it('should render the size received by props', () => {
        render(<ButtonIcon sizeIcon="1em" />)
        const iconSVG = document.querySelector('#iconSVG')
        expect(iconSVG?.outerHTML.toString()).toContain('width="1em')
    })

    it('should calls onClick prop when clicked', () => {
        const handleClick = jest.fn()
        render(<ButtonIcon onClickButton={handleClick} />)

        fireEvent.click(screen.getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)

    })
})