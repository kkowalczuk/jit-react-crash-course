import React from "react"

import { AppContext } from "../../providers/AppContextProvider"
import RecipesContextProvider from "../../providers/RecipesContextProvider"

const Content = () => {
  const { activeTabId } = React.useContext(AppContext)

  const getContentForTab = React.useCallback((activeTabId) => {
    switch (activeTabId) {
      default:
      case "Recipes": {
        const RecipesContainer = React.lazy(() => import("../recipes/RecipesContainer"))
        return (
          <RecipesContextProvider>
            <RecipesContainer />
          </RecipesContextProvider>
        )
      }
      case "Shopping list": {
        const ShoppingListContainer = React.lazy(() => import("../shoppingList/ShoppingListContainer"))
        return <ShoppingListContainer />
      }
    }
  }, [])

  return (
    <div className="container content">
      <React.Suspense
        fallback={<h5>Loading data...</h5>}
      >
        {getContentForTab(activeTabId)}
      </React.Suspense>
    </div>
  )
}

export default Content