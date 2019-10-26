import * as React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"

import AppContextProvider from "../../../../providers/AppContextProvider"
import Navbar from "../Navbar"

describe("Recipes table entry tests", () => {
  afterEach(cleanup)

  it("renders correctly with default state", () => {
    const { container } = render((
      <AppContextProvider>
        <Navbar />
      </AppContextProvider>
    ))

    expect(container.firstChild).toMatchSnapshot()
  })

  it("Recipes dashboard is active by default", () => {
    const { getByText } = render((
      <AppContextProvider>
        <Navbar />
      </AppContextProvider>
    ))

    const recipesLinkItem = getByText("Recipes").parentElement
    const shoppingListLinkItem = getByText("Shopping list").parentElement

    expect(recipesLinkItem.classList.contains("active")).toBe(true)
    expect(shoppingListLinkItem.classList.contains("active")).toBe(false)
  })

  it("highlights correct link after clicking on it", () => {
    const { getByText } = render((
      <AppContextProvider>
        <Navbar />
      </AppContextProvider>
    ))

    const recipesLinkItem = getByText("Recipes").parentElement
    const shoppingListLinkItem = getByText("Shopping list").parentElement

    fireEvent.click(shoppingListLinkItem)
    expect(recipesLinkItem.classList.contains("active")).toBe(false)
    expect(shoppingListLinkItem.classList.contains("active")).toBe(true)
  })
})