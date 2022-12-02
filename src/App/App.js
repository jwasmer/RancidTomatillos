import React, { Component } from "react"
import "./App.css"
import testData from "../testData"
import AllMoviesView from "../AllMoviesView/AllMoviesView"
import Header from "../Header/Header"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieId: null,
      movies: [...testData]
    }
  }

  displayMovie = id => {
    console.log(id)
  }

  render() {
    return (
      <>
        <Header 
          filterMovies={this.filterMovies} 
          detailViewId={this.state.detailViewId}
        />
        <main>
          {!this.state.movieId && <AllMoviesView 
            movies={this.state.movies} 
            displayMovie={this.displayMovie}
          />}
          {this.state.movieId && <DetailView 
            movie={this.state.movieId} 
            closeMovie={this.closeMovie}/>}
        </main>
      </>
    )
  }
}

export default App