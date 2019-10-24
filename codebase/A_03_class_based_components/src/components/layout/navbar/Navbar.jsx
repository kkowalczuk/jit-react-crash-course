import React from "react"

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper orange darken-1 z-depth-4">
        <div className="container col s12">
          <a href="#" className="brand-logo"><i className="material-icons">restaurant</i>JIT Cookbook</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="active"><a href="#">Recipes</a></li>
            <li><a href="#">Shopping list</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar