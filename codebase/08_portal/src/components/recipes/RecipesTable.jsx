import React from "react"
import PropTypes from "prop-types"

import RecipesTableEntry from "./RecipesTableEntry"
import Modal from "../layout/modal/Modal"
import SingleRecipe from "./SingleRecipe"

export default class RecipesTable extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = { selectedRecipe: undefined }

    this.handleRecipeSelect = this.handleRecipeSelect.bind(this)
    this.handleRecipeClear = this.handleRecipeClear.bind(this)
  }

  handleRecipeSelect(recipe) {
    this.setState({ selectedRecipe: recipe })
  }

  handleRecipeClear() {
    this.setState({ selectedRecipe: undefined })
  }

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
                return <RecipesTableEntry
                  mealName={recipe.name}
                  preparationTime={recipe.preparationTime}
                  difficulty={recipe.difficulty}
                  key={recipe.id}
                  onRecipeNameClick={() => this.handleRecipeSelect(recipe)}
                />
              })
            }
          </tbody>
        </table>
        <Modal
          isOpen={this.state.selectedRecipe !== undefined}
          onClose={this.handleRecipeClear}
        >
          <SingleRecipe recipe={this.state.selectedRecipe} />
        </Modal>
      </fieldset>
    )
  }
}

RecipesTable.propTypes = {
  recipesList: PropTypes.array.isRequired,
}