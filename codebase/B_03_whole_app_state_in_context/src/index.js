import React from "react"
import { render } from "react-dom"

import App from "./components/App"
import style from "./styles.css"
import AppContextProvider from "./providers/AppContextProvider"

render(
  (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  ),
  document.getElementById("app")
)