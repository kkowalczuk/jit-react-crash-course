import * as React from "react"
import PropTypes from "prop-types"

const defaultAppContext = {
  activeTabId: "Recipes",
  setActiveTabId: () => { },
}

export const AppContext = React.createContext(defaultAppContext)

const AppContextProvider = (props) => {
  const [activeTabId, setActiveTabId] = React.useState(defaultAppContext.activeTabId)

  return (
    <AppContext.Provider
      value={{
        activeTabId,
        setActiveTabId,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppContextProvider