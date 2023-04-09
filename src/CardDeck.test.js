import CardDeck from "./CardDeck"
import { render } from "@testing-library/react"

// Smoke test

it("renders w/o crashing", () => {
    render(<CardDeck />)
})

// Snapshot test

it("matches snapshot", () => {
    const {asFragment} = render(<App />)
    expect(asFragment).toMatchSnapshot()
})