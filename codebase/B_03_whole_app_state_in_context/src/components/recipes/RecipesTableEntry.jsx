import React from "react"
import PropTypes from "prop-types"

const RecipesTableEntry = (props) => {
  const { mealName, preparationTime, difficulty, onRecipeNameClick } = props

  return (
    <tr>
      <td>
        <a href="#" onClick={onRecipeNameClick}>
          {mealName}
        </a>
      </td>
      <td>
        {preparationTime}min
      </td>
      <td>
        {difficulty}
      </td>
    </tr>
  )
}

RecipesTableEntry.propTypes = {
  mealName: PropTypes.string.isRequired,
  preparationTime: PropTypes.number.isRequired,
  difficulty: PropTypes.oneOf(["Easy", "Intermediate", "Difficult"]).isRequired,
  onRecipeNameClick: PropTypes.func.isRequired,
}

export default RecipesTableEntry