import * as React from "react"
import PropTypes from "prop-types"
import { ingredientsList } from "../../services/recipes/mock"

export default class SingleRecipe extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { ingredients: [] }
  }

  static getDerivedStateFromProps(props) {
    return props.recipe
      ? { ingredients: ingredientsList[props.recipe.id] }
      : { ingredients: [] }
  }

  render() {
    const { recipe } = this.props

    return (
      <fieldset className="row z-depth-1 yellow lighten-4">
        <h4>{recipe.name}</h4>
        <div className="row">
          <div className="col m5 s12">
            <img src={recipe.imageUrl} alt={recipe.name} className="responsive-img" />
            <p><strong>Preparation time:</strong> {recipe.preparationTime}</p>
            <p><strong>Difficulty level:</strong> {recipe.difficulty}</p>
          </div>
          <div className="col m7 s12">
            <p>{recipe.description}</p>
            <p><strong>Ingredients list:</strong></p>
            <fieldset className="z-depth-1 yellow lighten-5">
              <ul>
                {this.state.ingredients.map((ing) =>
                  <li key={ing.name}><p>{ing.amount} <strong>{ing.name}</strong></p></li>
                )}
              </ul>
            </fieldset>
          </div>
        </div>
      </fieldset>
    )
  }
}

SingleRecipe.propTypes = {
  recipe: PropTypes.object,
}