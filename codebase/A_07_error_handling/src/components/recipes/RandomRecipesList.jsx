import React from "react"
import PropTypes from "prop-types"

import RecipeCard from "./RecipeCard"

export default class RandomRecipesList extends React.PureComponent {
  render() {
    const recipes = this.props.randomRecipes

    return (
      <fieldset className="row z-depth-1 yellow lighten-4">
        <h4>Random recipes</h4>
        <div className="row">
          {
            recipes.map((recipe) => {
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
}

RandomRecipesList.propTypes = {
  randomRecipes: PropTypes.array.isRequired,
}