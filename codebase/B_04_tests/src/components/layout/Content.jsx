import React from "react"

import RecipesContainer from "../recipes/RecipesContainer"
import { AppContext } from "../../providers/AppContextProvider"
import RecipesContextProvider from "../../providers/RecipesContextProvider"

const Content = () => {
  const { activeTabId } = React.useContext(AppContext)

  const getContentForTab = React.useCallback((activeTabId) => {
    switch (activeTabId) {
      default:
      case "Recipes": {
        return (
          <RecipesContextProvider>
            <RecipesContainer />
          </RecipesContextProvider>
        )
      }
      case "Shopping list": {
        return <h5>Shopping list will be here soon...</h5>
      }
    }
  }, [])

  return (
    <div className="container content">
      {getContentForTab(activeTabId)}
    </div>
  )
}

export default Content