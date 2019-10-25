import React from "react"
import PropTypes from "prop-types"

import { AppContext } from "../../../providers/AppContextProvider"

const NavbarEntry = (props) => {
  const { name, active } = props
  const { setActiveTabId } = React.useContext(AppContext)

  const handleOnTabClick = React.useCallback(() => {
    setActiveTabId(name)
  }, [name])

  return (
    <li className={active ? "active" : undefined}
      onClick={handleOnTabClick}>
      <a href="#">{name}</a>
    </li>
  )
}

NavbarEntry.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

export default NavbarEntry