import React from "react"

import RandomRecipesList from "./RandomRecipesList"
import RecipesTable from "./RecipesTable"

const RecipesContainer = (props) => {
  return (
    <div className="wrapper">
      <RandomRecipesList />
      <RecipesTable />
    </div>
  )
}

export default RecipesContainer