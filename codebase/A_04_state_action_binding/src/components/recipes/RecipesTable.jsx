import React from "react"
import PropTypes from "prop-types"

import RecipesTableEntry from "./RecipesTableEntry"

export default class RecipesTable extends React.Component {
  render() {
    const { recipesList } = this.props

    return (
      <fieldset className="row z-depth-1 yellow lighten-4">
        <h4>Recipes list</h4>
        <table className="striped">
          <thead>
            <tr>
              <th>Meal name</th>
              <th>Preparation time</th>
              <th>Difficulty level</th>
            </tr>
          </thead>

          <tbody>
            <RecipesTableEntry mealName={recipesList[0].name}
              preparationTime={recipesList[0].preparationTime}
              difficulty={recipesList[0].difficulty}
            />
            <RecipesTableEntry mealName={recipesList[1].name}
              preparationTime={recipesList[1].preparationTime}
              difficulty={recipesList[1].difficulty}
            />
            <RecipesTableEntry mealName={recipesList[2].name}
              preparationTime={recipesList[2].preparationTime}
              difficulty={recipesList[2].difficulty}
            />
            <RecipesTableEntry mealName={recipesList[3].name}
              preparationTime={recipesList[3].preparationTime}
              difficulty={recipesList[3].difficulty}
            />
            <RecipesTableEntry mealName={recipesList[4].name}
              preparationTime={recipesList[4].preparationTime}
              difficulty={recipesList[4].difficulty}
            />
            <RecipesTableEntry mealName={recipesList[5].name}
              preparationTime={recipesList[5].preparationTime}
              difficulty={recipesList[5].difficulty}
            />
          </tbody>
        </table>
      </fieldset>
    )
  }
}

RecipesTable.propTypes = {
  recipesList: PropTypes.array.isRequired,
}