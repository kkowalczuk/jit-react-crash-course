import React from "react"
import PropTypes from "prop-types"

export default class RecipesTableEntry extends React.PureComponent {
  render() {
    const { mealName, preparationTime, difficulty } = this.props

    return (
      <tr>
        <td>
          <a href="#">
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
}

RecipesTableEntry.propTypes = {
  mealName: PropTypes.string.isRequired,
  preparationTime: PropTypes.number.isRequired,
  difficulty: PropTypes.oneOf(["Easy", "Intermediate", "Difficult"]).isRequired,
}
