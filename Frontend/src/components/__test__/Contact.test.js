import { render, screen } from "@testing-library/react"
import Contact from "../Contact"


//Unit Testing
describe("Contact page test Case", () => {
    it("Should Check render contact component", () => {
        render(<Contact />)

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();

    });

    it("Should load input inside contact component", () => {
        render(<Contact />)
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length)

        expect(inputBoxes.length).toBe(2);

    })
    it("Should load button inside contact component", () => {
        render(<Contact />)
        const buttons = screen.getByRole("button");
        expect(buttons).toBeInTheDocument();

    })

})


