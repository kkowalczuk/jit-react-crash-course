import React from "react"
import PropTypes from "prop-types"

import RecipesContainer from "../recipes/RecipesContainer"

const Content = (props) => {
  const { activeTabId } = props

  const getContentForTab = React.useCallback((activeTabId) => {
    switch (activeTabId) {
      default:
      case "Recipes": {
        return <RecipesContainer />
      }
      case "Shopping list": {
        return <h5>Shopping list will be here soon...</h5>
      }
    }
  }, [])

  return (
    <div className="container content">
      {getContentForTab(activeTabId)}
    </div>
  )
}

Content.propTypes = {
  activeTabId: PropTypes.string.isRequired,
}

export default Content