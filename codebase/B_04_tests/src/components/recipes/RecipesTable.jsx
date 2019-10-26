import React from "react"

import RecipesTableEntry from "./RecipesTableEntry"
import Modal from "../layout/modal/Modal"
import SingleRecipe from "./SingleRecipe"
import { RecipesContext } from "../../providers/RecipesContextProvider"
import useTextFilter from "../../hooks/useTextFilter"

const RecipesTable = () => {
  const { recipesList, selectedRecipe, setSelectedRecipe } = React.useContext(RecipesContext)
  const { inputValue, setInputValue, filteredItems } = useTextFilter(recipesList, "name")

  const searchInputRef = React.useRef()

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
      {filteredItems.length === 0
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
                filteredItems.map((recipe) => {
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

export default RecipesTable