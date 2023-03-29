import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { ButtonDarkMode } from "."

const mockButton = jest.fn()
describe('ButtonDarkMode', ()=>{
    it("should call the function after when clicked", () => {
        render(<ButtonDarkMode />)

        fireEvent.submit(screen.getByRole("button"));
        expect(mockButton).toBeCalled();
        
    })
})