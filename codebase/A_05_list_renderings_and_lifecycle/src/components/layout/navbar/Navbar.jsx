import React from "react"
import PropTypes from "prop-types"

import NavbarEntry from "./NavbarEntry"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.setActiveTab = this.setActiveTab.bind(this)
  }

  setActiveTab(newActiveTab) {
    this.props.handleTabChange(newActiveTab)
  }

  render() {
    const { activeTabId } = this.props

    return (
      <nav>
        <div className="nav-wrapper orange darken-1 z-depth-4">
          <div className="container col s12">
            <a href="#" className="brand-logo"><i className="material-icons">restaurant</i>JIT Cookbook</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <NavbarEntry onTabChange={this.setActiveTab}
                name="Recipes"
                active={activeTabId === "Recipes"} />
              <NavbarEntry onTabChange={this.setActiveTab}
                name="Shopping list"
                active={activeTabId === "Shopping list"} />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  activeTabId: PropTypes.string.isRequired,
}