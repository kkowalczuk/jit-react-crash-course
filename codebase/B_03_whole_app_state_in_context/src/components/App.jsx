import React from "react"

import Content from "./layout/Content"
import Footer from "./layout/Footer"
import Navbar from "./layout/navbar/Navbar"

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Content />
      <Footer />
    </React.Fragment>
  )
}

export default App