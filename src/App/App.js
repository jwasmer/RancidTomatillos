import React, { Component } from "react"
import "./App.css"

import AllMoviesView from "../AllMoviesView/AllMoviesView"

class App extends Component {
  constructor() {
    super()
    this.state = {
      detailViewId: null,
      movies: []
    }
  }

  render() {
    return (
      <main>
        <AllMoviesView />
      </main>
    )
  }

  
}

export default App;