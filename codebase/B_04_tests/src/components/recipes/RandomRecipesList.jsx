import React from "react"

import RecipeCard from "./RecipeCard"
import { RecipesContext } from "../../providers/RecipesContextProvider"

const RandomRecipesList = () => {
  const { randomRecipes } = React.useContext(RecipesContext)

  return (
    <fieldset className="row z-depth-1 yellow lighten-4">
      <h4>Random recipes</h4>
      <div className="row">
        {
          randomRecipes.map((recipe) => {
            return <RecipeCard mealName={recipe.name}
              imageUrl={recipe.imageUrl}
              description={recipe.description}
              key={recipe.id}
            />
          })
        }
      </div>
    </fieldset>
  )
}

export default RandomRecipesList