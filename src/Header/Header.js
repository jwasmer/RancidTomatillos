import React, { Component } from "react"

import "./Header.css"
import logo from "../assets/rt_logo.png"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      searchHidden: true
    }
  }

  handleChange(e) {
    const { value } = e.target
    this.setState({ search: value })
    this.props.updateQuery(value)
  }

  render() {
    const searchBar = <div className="input-container">
    <i 
      className={this.state.searchHidden ? `material-symbols-outlined` :
        `material-symbols-outlined icon-transition`}
      onClick={() => this.setState({ searchHidden: false })}
    >search</i>
    <input 
      className={this.state.searchHidden ? `search-input` :
      `search-input input-transition`}
      type="search" 
      name="search"
      placeholder="search by title" 
      value={this.state.search}
      onChange={(e) => this.handleChange(e)}
    />
    </div>

    return (
      <header>
        <div className="header-left">
          <img className="logo" src={logo}/>
          <h1>RANCID <br />TOMATILLOS</h1>
        </div>
        <div className="header-right">
          {!this.props.movieId && searchBar}
        </div>
      </header>
    )
  }
}

export default Header