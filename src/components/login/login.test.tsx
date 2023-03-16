import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { Login } from '.'


const mockLogin = jest.fn((email, pass) => {
    return Promise.resolve({ email, pass })
})

describe('Login', () => {
    it("should display required error when value is invalid", async () => {
        render(<Login login={mockLogin} />);

        fireEvent.submit(screen.getByRole("button"));


        expect(mockLogin).not.toBeCalled();
    });
})