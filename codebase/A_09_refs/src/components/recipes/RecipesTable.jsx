import React from "react"
import PropTypes from "prop-types"

import RecipesTableEntry from "./RecipesTableEntry"
import Modal from "../layout/modal/Modal"
import SingleRecipe from "./SingleRecipe"

export default class RecipesTable extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      selectedRecipe: undefined,
      inputValue: "",
      filteredRecipes: props.recipesList,
    }

    this.handleRecipeSelect = this.handleRecipeSelect.bind(this)
    this.handleRecipeClear = this.handleRecipeClear.bind(this)
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)

    this.searchInputRef = React.createRef()
    this.handleSearchIconClick = this.handleSearchIconClick.bind(this)
  }

  handleRecipeSelect(recipe) {
    this.setState({ selectedRecipe: recipe })
  }

  handleRecipeClear() {
    this.setState({ selectedRecipe: undefined })
  }

  handleSearchInputChange(query) {
    this.setState({
      inputValue: query,
      filteredRecipes: this.props.recipesList.filter(r => r.name.toLowerCase().includes(query.toLowerCase())),
    })
  }

  handleSearchIconClick() {
    this.searchInputRef.current.focus()
  }

  render() {
    const { filteredRecipes, inputValue } = this.state

    return (
      <fieldset className="row z-depth-1 yellow lighten-4">
        <div className="row" style={{ marginBottom: 0 }}>
          <div className="col s8">
            <h4>Recipes list</h4>
          </div>
          <div className="input-field col s4">
            <i
              className="material-icons prefix"
              onClick={this.handleSearchIconClick}
              style={{ cursor: "pointer" }}
            >
              search
            </i>
            <input
              value={inputValue}
              onChange={(e) => this.handleSearchInputChange(e.target.value)}
              ref={this.searchInputRef}
            />
          </div>
        </div>
        {filteredRecipes.length === 0
          ? <p><strong>No items found.</strong></p>
          : (
            <table className="striped" style={{ marginBottom: "10px" }}>
              <thead>
                <tr>
                  <th>Meal name</th>
                  <th>Preparation time</th>
                  <th>Difficulty level</th>
                </tr>
              </thead>

              <tbody>
                {
                  filteredRecipes.map((recipe) => {
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
          )
        }
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