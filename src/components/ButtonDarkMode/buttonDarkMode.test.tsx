import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { ButtonDarkMode } from "."



describe('ButtonDarkMode', () => {
    it("should call the function after when clicked", () => {

        const eventClick = jest.fn()

        render(<ButtonDarkMode />)
        fireEvent.click(screen.getByRole('button'), eventClick());

        expect(eventClick).toBeCalled();

    })
})