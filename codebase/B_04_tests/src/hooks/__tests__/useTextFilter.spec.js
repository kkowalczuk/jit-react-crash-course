import { renderHook, act } from "@testing-library/react-hooks"

import useTextFilter from "../useTextFilter"

describe("useTextFilter hook tests", () => {
  it("returns the filtered items list after search query change", () => {
    const mockedList = [
      { id: 1, name: "James Bond" },
      { id: 2, name: "James Cameron" },
      { id: 3, name: "Emma Stone" },
    ]

    const { result } = renderHook(() => useTextFilter(mockedList, "name"))
    act(() => result.current.setInputValue("james"))

    expect(result.current.filteredItems).toHaveLength(2)
    expect(result.current.filteredItems.filter(i => i.name === "Emma Stone")).toHaveLength(0)
  })

  it("returns the items list filtered by correct prop name", () => {
    const mockedList = [
      { id: 1, firstName: "James", lastName: "Bond" },
      { id: 2, firstName: "James", lastName: "Cameron" },
      { id: 3, firstName: "Emma", lastName: "Stone" },
    ]

    const { result } = renderHook(() => useTextFilter(mockedList, "lastName"))
    act(() => result.current.setInputValue("am"))

    expect(result.current.filteredItems).toHaveLength(1)
    expect(result.current.filteredItems[0].firstName).toEqual("James")
    expect(result.current.filteredItems[0].lastName).toEqual("Cameron")
  })
})