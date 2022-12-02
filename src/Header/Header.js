import React, { Component } from "react"

import "./Header.css"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  handleChange(e) {
    const { value } = e.target
    this.setState({ search: value })
    this.props.updateQuery(value)
  }

  render() {
    const searchBar = <input 
      type="search" 
      name="search"
      placeholder="search by title" 
      value={this.state.search}
      onChange={(e) => this.handleChange(e)}
    />

    return (
      <header>
        <div className="header-left">
          <img src="logo url here"/>
          <h1>Rancid Tomatillos</h1>
        </div>
        <div className="header-right">
          {!this.props.movieId && searchBar}
        </div>
      </header>
    )
  }

}

export default Header