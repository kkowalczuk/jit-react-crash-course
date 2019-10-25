import React from "react"

import NavbarEntry from "./NavbarEntry"
import { AppContext } from "../../../providers/AppContextProvider"

const Navbar = () => {
  const { activeTabId } = React.useContext(AppContext)

  return (
    <nav>
      <div className="nav-wrapper orange darken-1 z-depth-4">
        <div className="container col s12">
          <a href="#" className="brand-logo"><i className="material-icons">restaurant</i>JIT Cookbook</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <NavbarEntry
              name="Recipes"
              active={activeTabId === "Recipes"} />
            <NavbarEntry
              name="Shopping list"
              active={activeTabId === "Shopping list"} />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar