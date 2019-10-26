import React from "react"

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError")
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch")

    // e.g. external logging
    console.log("Error:", error)
    console.log("Info:", info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <fieldset className="row z-depth-1 yellow lighten-4 center">
          <div>Something went wrong :(</div>
        </fieldset>
      )
    }

    return this.props.children
  }
}