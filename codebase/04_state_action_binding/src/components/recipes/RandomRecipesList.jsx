import React from "react"
import PropTypes from "prop-types"

import RecipeCard from "./RecipeCard"

export default class RandomRecipesList extends React.Component {
  render() {
    const recipes = this.props.randomRecipes

    return (
      <fieldset className="row z-depth-1 yellow lighten-4">
        <h4>Random recipes</h4>
        <div className="row">
          <RecipeCard mealName={recipes[0].name} imageUrl={recipes[0].imageUrl} description={recipes[0].description} />
          <RecipeCard mealName={recipes[1].name} imageUrl={recipes[1].imageUrl} description={recipes[1].description} />
          <RecipeCard mealName={recipes[2].name} imageUrl={recipes[2].imageUrl} description={recipes[2].description} />
        </div>
      </fieldset>
    )
  }
}

RandomRecipesList.propTypes = {
  randomRecipes: PropTypes.array.isRequired,
}