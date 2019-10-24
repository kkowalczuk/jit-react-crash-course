import React from "react"

import Content from "./layout/Content"
import Footer from "./layout/Footer"
import Navbar from "./layout/navbar/Navbar"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTabId: "Recipes",
    }

    this.setActiveTabId = this.setActiveTabId.bind(this)
  }

  setActiveTabId(newTabId) {
    console.log("APP: Set activeTabId to:", newTabId)
    this.setState({
      activeTabId: newTabId,
    })
  }

  render() {
    const { activeTabId } = this.state

    return (
      <div className="main-layout wrapper">
        <Navbar handleTabChange={this.setActiveTabId} activeTabId={activeTabId} />
        <Content activeTabId={activeTabId} />
        <Footer />
      </div>
    )
  }
}