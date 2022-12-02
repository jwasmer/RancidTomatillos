import React, { Component } from "react"
import "./App.css"
import testData from "../testData"
import AllMoviesView from "../AllMoviesView/AllMoviesView"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieId: null,
      movies: [...testData]
    }
  }

  displayMovie = (id) => {
    this.setState({ movieId: id })
  }

  closeMovie = () => {
    this.setState({ movieId: null })
  }

  render() {
    return (
      <>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <main>
          {!this.state.movieId && <AllMoviesView 
            movies={this.state.movies} 
            openDetailView={this.openMovieView}
          />}
          {this.state.movieId && <DetailView 
            movie={this.state.movieId} 
            closeDetailView={this.closeMovieView}/>}
        </main>
      </>
    )
  }
}

export default App