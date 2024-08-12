import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should be Login button loaded", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>


    );

    const loginButton = screen.getByRole("button",{name:"Login"});
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})

it("Should be cart items loaded", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>


    );

    const Cartitems = screen.getByText("Cart-(0)");
    // const Cartitems = screen.getByText(/Cart/);

    expect(Cartitems).toBeInTheDocument();
})

it("Should be Logout button loaded", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>


    );

    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole("button",{name:"Logout"});

    // const loginButton = screen.getByText("Login");

    expect(logoutButton).toBeInTheDocument();
})