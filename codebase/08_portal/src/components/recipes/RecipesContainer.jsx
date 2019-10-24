import React from "react"

import ErrorBoundary from "./ErrorBoundary"
import RandomRecipesList from "./RandomRecipesList"
import RecipesTable from "./RecipesTable"
import * as DataSource from "services/recipes/mock"

export default class RecipesContainer extends React.PureComponent {
  render() {
    return (
      <div className="wrapper">
        <ErrorBoundary>
          <RandomRecipesList randomRecipes={DataSource.getNRandom(3)} />
        </ErrorBoundary>
        <RecipesTable recipesList={DataSource.recipesList} />
      </div>
    )
  }
}