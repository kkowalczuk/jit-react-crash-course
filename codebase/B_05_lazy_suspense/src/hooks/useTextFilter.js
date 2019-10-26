import * as React from "react"

const useTextFilter = (itemsList, propName) => {
  const [inputValue, setInputValue] = React.useState("")

  const filteredItems = React.useMemo(() => {
    return itemsList.filter(r => r[propName].toLowerCase().includes(inputValue.toLowerCase()))
  }, [inputValue, itemsList, propName])

  return {
    inputValue,
    setInputValue,
    filteredItems,
  }
}

export default useTextFilter