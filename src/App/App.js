import React, { Component } from "react"
import "./App.css"
import testData from "../testData"

import AllMoviesView from "../AllMoviesView/AllMoviesView"
import Header from "../Header/Header"

class App extends Component {
  constructor() {
    super()
    this.state = {
      detailViewId: null,
      movies: [...testData]
    }
  }

  displayMovie = id => {
    console.log(id)
  }

  filterMovies = input => {
    console.log(input)
  }

  render() {
    return (
      <main>
        <Header 
          filterMovies={this.filterMovies} 
          detailViewId={this.state.detailViewId}
        />
        <AllMoviesView 
          movies={this.state.movies} 
          displayMovie={this.displayMovie}
        />
      </main>
    )
  }
}

export default App