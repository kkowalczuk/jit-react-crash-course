import React from "react"

import Content from "./layout/Content"
import Footer from "./layout/Footer"
import Navbar from "./layout/navbar/Navbar"

const App = () => {
  const [activeTabId, setActiveTabId] = React.useState("Recipes")

  return (
    <React.Fragment>
      <Navbar handleTabChange={setActiveTabId} activeTabId={activeTabId} />
      <Content activeTabId={activeTabId} />
      <Footer />
    </React.Fragment>
  )
}

export default App