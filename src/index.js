import React from "react"
import ReactDOM from "react-dom"
import { Board } from "./components"

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Board />
      </div>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
