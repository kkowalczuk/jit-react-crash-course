import React from "react"

import ErrorBoundary from "./ErrorBoundary"
import RandomRecipesList from "./RandomRecipesList"
import RecipesTable from "./RecipesTable"

const RecipesContainer = () => {
  return (
    <div className="wrapper">
      <ErrorBoundary>
        <RandomRecipesList />
      </ErrorBoundary>
      <RecipesTable />
    </div>
  )
}

export default RecipesContainer