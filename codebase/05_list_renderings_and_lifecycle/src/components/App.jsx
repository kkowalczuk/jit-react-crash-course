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

    console.info("App RENDER PHASE: constructor(), props:", props)
  }

  static getDerivedStateFromProps(props, state) {
    console.info("App RENDER PHASE: static getDerivedStateFromProps(), props:", props, "state:", state)
    return { activeTabId: state.activeTabId }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.info("App RENDER PHASE: shouldComponentUpdate(), nextProps:", nextProps,
      "nextState:", nextState)
    return true
  }

  setActiveTabId(newTabId) {
    this.setState({
      activeTabId: newTabId,
    })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.info("App PRE-COMMIT PHASE: getSnapshotBeforeUpdate(), prevProps:", prevProps,
      "prevState:", prevState)
    return { foo: "bar" }
  }

  componentDidMount() {
    console.info("App COMMIT PHASE: componentDidMount()")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.info("App COMMIT PHASE: componentDidUpdate(), prevProps:", prevProps,
      "prevState:", prevState, "snapshot:", snapshot)
  }

  render() {
    console.info("App RENDER PHASE: render()")
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