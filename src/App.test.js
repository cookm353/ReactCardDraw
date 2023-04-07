import App from "./App";
import { render } from "@testing-library/react"

// Smoke test

it("renders w/o crashing", () => {
    render(<App />)
})

// Snapshot test

it("matches snapshot", () => {
    const {asFragment} = render(<App />)
    expect(asFragment).toMatchSnapshot()
})