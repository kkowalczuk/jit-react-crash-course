import React from "react"

import Content from "./layout/Content"
import Footer from "./layout/Footer"
import Navbar from "./layout/navbar/Navbar"
export default class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activeTabId: "Recipes",
    }

    this.setActiveTabId = this.setActiveTabId.bind(this)
  }

  setActiveTabId(newTabId) {
    this.setState({
      activeTabId: newTabId,
    })
  }

  render() {
    const { activeTabId } = this.state

    return (
      <React.Fragment>
        <Navbar handleTabChange={this.setActiveTabId} activeTabId={activeTabId} />
        <Content activeTabId={activeTabId} />
        <Footer />
      </React.Fragment>
    )
  }
}