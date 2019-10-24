import React from "react"
import PropTypes from "prop-types"

export default class NavbarEntry extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleOnTabClick = this.handleOnTabClick.bind(this)
  }

  handleOnTabClick() {
    this.props.onTabChange(this.props.name)
  }

  render() {
    const { name, active } = this.props

    return (
      <li className={active ? "active" : undefined}
        onClick={this.handleOnTabClick}>
        <a href="#">{name}</a>
      </li>
    )
  }
}

NavbarEntry.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onTabChange: PropTypes.func.isRequired,
}