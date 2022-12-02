import React, { Component } from "react"
import "./App.css"
import testData from "../testData"

import AllMoviesView from "../AllMoviesView/AllMoviesView"

class App extends Component {
  constructor() {
    super()
    this.state = {
      detailViewId: null,
      allMovies: [...testData]
    }
  }

  displayMovie = id => {
    console.log(id)
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <AllMoviesView 
          allMovies={this.state.allMovies} 
          displayMovie={this.displayMovie}
        />
      </main>
    )
  }
}

export default App