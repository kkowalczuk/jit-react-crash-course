import * as React from "react"
import PropTypes from "prop-types"

import * as DataSource from "../services/recipes/mock"

const RANDOM_RECIPES_COUNT = 3

const defaultRecipesContext = {
  recipesList: [],
  selectedRecipe: undefined,
  setSelectedRecipe: () => { },
  selectedRecipeIngredients: [],
  randomRecipes: []
}

export const RecipesContext = React.createContext(defaultRecipesContext)

const RecipesContextProvider = (props) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(defaultRecipesContext.selectedRecipe)

  const recipesList = React.useMemo(() => {
    return DataSource.recipesList
  }, [])

  const selectedRecipeIngredients = React.useMemo(() => {
    return selectedRecipe
      ? DataSource.ingredientsList[selectedRecipe.id]
      : []
  }, [selectedRecipe])

  const randomRecipes = React.useMemo(() => {
    return recipesList.slice().sort(() => 0.5 - Math.random()).slice(0, RANDOM_RECIPES_COUNT)
  }, [recipesList])

  return (
    <RecipesContext.Provider
      value={{
        selectedRecipe,
        setSelectedRecipe,
        selectedRecipeIngredients,
        recipesList,
        randomRecipes,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  )
}

RecipesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RecipesContextProvider