import React from "react"
import PropTypes from "prop-types"

export default class RecipeCard extends React.Component {
  render() {
    const { mealName, imageUrl, description } = this.props

    return (
      <div className="col m12 l4">
        <div className="card medium yellow lighten-5">
          <div className="card-image">
            <img src={imageUrl} />
            <span className="card-title">{mealName}</span>
          </div>
          <div className="card-content">
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

RecipeCard.propTypes = {
  mealName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}