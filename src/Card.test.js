import Card from "./Card"
import { render } from "@testing-library/react"

// Smoke test

it("renders w/o crashing", () => {
    render(<Card />)
})

// Snapshot test

it("matches snapshot", () => {
    const {asFragment} = render(<Card />)
    expect(asFragment).toMatchSnapshot()
})