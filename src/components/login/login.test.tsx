import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { Login } from '.'


const mockLogin = jest.fn((email, pass) => {
    return Promise.resolve({ email, pass })
})

describe('Login', () => {
    it("should display required error when value is invalid", async () => {
        render(<Login login={mockLogin} />);

        fireEvent.submit(screen.getByRole("button"));

        expect(await screen.findAllByRole("alert")).toHaveLength(2);
        expect(mockLogin).not.toBeCalled();
    });

    it("should display matching error when email is invalid ", async () => {
        render(<Login login={mockLogin} />);
        

        const inputEmail = screen.getByRole('textbox', {name: /email/i})
        const inputPassword = screen.getByLabelText("Password")

        fireEvent.change(inputEmail, {
            target: {
              value: "test"
            }
        });
        
        fireEvent.change(inputPassword, {
            target: {
                value: "password"
            }
        });

        fireEvent.submit(screen.getByRole("button"));
        
        expect(await screen.findAllByRole("alert")).toHaveLength(1);
        expect(mockLogin).not.toBeCalled();

    })

    it("should display min length error when password is invalid ", async () => {
        render(<Login login={mockLogin} />);
        

        const inputEmail = screen.getByRole('textbox', {name: /email/i})
        const inputPassword = screen.getByLabelText("Password")

        fireEvent.change(inputEmail, {
            target: {
                value: "test@mail.com"
            }
        });
        
        fireEvent.change(inputPassword, {
            target: {
                value: "12"
            }
        });

        fireEvent.submit(screen.getByRole("button"));
        
        expect(await screen.findAllByRole("alert")).toHaveLength(1);
        expect(mockLogin).not.toBeCalled();

    })

    it("should not display error when value is valid", async () => {
        render(<Login login={mockLogin} />);

        const inputEmail = screen.getByRole('textbox', {name: /email/i})
        const inputPassword = screen.getByLabelText("Password")
      
        fireEvent.input(inputEmail, {
          target: {
            value: "test@mail.com"
          }
        });
      
        fireEvent.input(inputPassword, {
          target: {
            value: "password"
          }
        });
      
        fireEvent.submit(screen.getByRole("button"));
      
        await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
        expect(mockLogin).toBeCalledWith("test@mail.com", "password");

      });
})