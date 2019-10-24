import React from "react"
import PropTypes from "prop-types"

import RecipesTableEntry from "./RecipesTableEntry"

export default class RecipesTable extends React.PureComponent {
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
            {
              recipesList.map((recipe) => {
                return <RecipesTableEntry mealName={recipe.name}
                  preparationTime={recipe.preparationTime}
                  difficulty={recipe.difficulty}
                  key={recipe.id}
                />
              })
            }
          </tbody>
        </table>
      </fieldset>
    )
  }
}

RecipesTable.propTypes = {
  recipesList: PropTypes.array.isRequired,
}