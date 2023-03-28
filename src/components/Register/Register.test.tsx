import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { Register } from '.'


const mockRegister = jest.fn((full_name, email, pass) => {
  return Promise.resolve({ full_name, email, pass })
})

describe('Register', () => {


  it("should display required error when value is invalid", async () => {
    render(<Register DataRegister={mockRegister} />);

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(3);
    expect(mockRegister).not.toBeCalled();
  });

  it("should display matching error when name required ", async () => {
    render(<Register DataRegister={mockRegister} />);

    const inputFullName = screen.getByRole('textbox', { name: /nome completo/i })
    const inputEmail = screen.getByRole('textbox', { name: /email/i })
    const inputPassword = screen.getByLabelText("Password")

    fireEvent.change(inputFullName, {
      target: {
        value: ""
      }
    });

    fireEvent.change(inputEmail, {
      target: {
        value: "test@test.com"
      }
    });

    fireEvent.change(inputPassword, {
      target: {
        value: "password"
      }
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockRegister).not.toBeCalled();

  })

  it("should display matching error when email is invalid ", async () => {
    render(<Register DataRegister={mockRegister} />);

    const inputFullName = screen.getByRole('textbox', { name: /nome completo/i })
    const inputEmail = screen.getByRole('textbox', { name: /email/i })
    const inputPassword = screen.getByLabelText("Password")

    fireEvent.change(inputFullName, {
      target: {
        value: "Doe Joe"
      }
    });

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
    expect(mockRegister).not.toBeCalled();

  })

  it("should display min length error when password is invalid ", async () => {
    render(<Register DataRegister={mockRegister} />);


    const inputFullName = screen.getByRole('textbox', { name: /nome completo/i })
    const inputEmail = screen.getByRole('textbox', { name: /email/i })
    const inputPassword = screen.getByLabelText("Password")


    fireEvent.change(inputFullName, {
      target: {
        value: "Doe Joe"
      }
    });

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
    expect(mockRegister).not.toBeCalled();

  })

  it("should not display error when value is valid", async () => {
    render(<Register DataRegister={mockRegister} />);

    const inputFullName = screen.getByRole('textbox', { name: /nome completo/i })
    const inputEmail = screen.getByRole('textbox', { name: /email/i })
    const inputPassword = screen.getByLabelText("Password")

    fireEvent.input(inputFullName, {
      target: {
        value: "Doe Joe"
      }
    });

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
    expect(mockRegister).toBeCalledWith("Doe Joe", "test@mail.com", "password");

  });
})