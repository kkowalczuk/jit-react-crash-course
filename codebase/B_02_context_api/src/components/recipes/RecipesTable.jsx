import React from "react"
import PropTypes from "prop-types"

import RecipesTableEntry from "./RecipesTableEntry"
import Modal from "../layout/modal/Modal"
import SingleRecipe from "./SingleRecipe"

const RecipesTable = (props) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(undefined)
  const [inputValue, setInputValue] = React.useState("")

  const searchInputRef = React.useRef()
  
  const filteredRecipes = React.useMemo(() => {
    return props.recipesList.filter(r => r.name.toLowerCase().includes(inputValue.toLowerCase()))
  }, [inputValue, props.recipesList])

  const onSearchIconClick = React.useCallback(() => {
    searchInputRef.current.focus()
  }, [])

  const onModalClose = React.useCallback(() => {
    setSelectedRecipe(undefined)
  }, [])

  return (
    <fieldset className="row z-depth-1 yellow lighten-4">
      <div className="row" style={{ marginBottom: 0 }}>
        <div className="col s8">
          <h4>Recipes list</h4>
        </div>
        <div className="input-field col s4">
          <i
            className="material-icons prefix"
            onClick={onSearchIconClick}
            style={{ cursor: "pointer" }}
          >
            search
          </i>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={searchInputRef}
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
                    onRecipeNameClick={() => setSelectedRecipe(recipe)}
                  />
                })
              }
            </tbody>
          </table>
        )
      }
      <Modal
        isOpen={selectedRecipe !== undefined}
        onClose={onModalClose}
      >
        <SingleRecipe recipe={selectedRecipe} />
      </Modal>
    </fieldset>
  )
}

RecipesTable.propTypes = {
  recipesList: PropTypes.array.isRequired,
}

export default RecipesTable