import React, { Component } from "react"
import "./App.css"
// import testData from "../testData"
import AllMoviesView from "../AllMoviesView/AllMoviesView"
import DetailView from "../DetailView/DetailView"
import Header from "../Header/Header"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieId: null,
      movies: [],
      query: "",
      err: ""
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(({ movies }) => this.setState({ movies: movies}))
      .catch(err => this.setState({ err: err }))
  }

  displayMovie = (id) => {
    this.setState({ movieId: id })
  }

  closeMovie = () => {
    this.setState({ movieId: null })
  }

  updateQuery = input => {
    this.setState({ query: input })
  }

  render() {
    const errorMessage = <h3 className="error">Sorry, something went wrong. Please try again later.</h3>

    return (
      <>
        <Header 
          updateQuery={this.updateQuery} 
          movieId={this.state.movieId}
          err={this.state.err}
        />
        <main>
          {!this.state.movieId && <AllMoviesView 
            movies={this.state.movies} 
            displayMovie={this.displayMovie}
            query={this.state.query}
          />}
          {this.state.movieId && <DetailView 
            movieId={this.state.movieId}
            closeMovie={this.closeMovie}
          />}
          {this.state.err && errorMessage}
        </main>
      </>
    )
  }
}

export default App