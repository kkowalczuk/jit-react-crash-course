import React from "react"

const RecipeCard = (props) => {
  return (
    <div className="col m12 l4">
      <div className="card medium yellow lighten-5">
        <div className="card-image">
          <img src="http://www.seriouseats.com/recipes/images/2017/06/20170617-bulgogi-burger-matt-clifton-1.jpg" />
          <span className="card-title">King Burger</span>
        </div>
        <div className="card-content">
          <p>Here are the instructions to make the perfect burger! Although it may not be the healthiest, use medium ground beef for moistness & flavour.</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
