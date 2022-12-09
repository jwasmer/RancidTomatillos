import React, { Component, createRef } from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import logo from "../assets/rt_logo.png"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      searchHidden: true,
      searchInput: createRef()
    }
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({ search: value })
    this.props.updateQuery(value)
  }

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.handleIconClick()
    }
  }

  handleIconClick = () => {
    this.setState({ searchHidden: false })
    this.state.searchInput.current.focus()
  }

  render() {
    const inputClassList = this.state.searchHidden ? 
      `search-input` :
      `search-input input-transition` 

    const iconClassList = this.state.searchHidden ? 
      `material-symbols-outlined` :
      `material-symbols-outlined icon-transition`

    const searchBar = 
    <div className="input-container">
      <i 
        className={iconClassList}
        onClick={this.handleIconClick}
        onKeyDown={(e) => this.handleKeyDown(e)}
        tabIndex={1}
        role="button"
        ariaLabel="search movies by title"
      >search</i>
      <input 
        className={inputClassList}
        type="search" 
        name="search"
        placeholder="search by title" 
        value={this.state.search}
        tabIndex={1}
        onChange={(e) => this.handleChange(e)}
        ref={this.state.searchInput}
      />
    </div>

    const displaySearchOK = !this.props.movieId && !this.props.err

    return (
      <header>
        <div className="header-left">
          <Link to="/" className="title-container">
            <img 
              className="logo" 
              src={logo}
              alt="Rancid Tomatillos logo"
            />
            <h1>RANCID <br />TOMATILLOS</h1>
          </Link>
        </div>
        <div className="header-right">
          {displaySearchOK && searchBar}
        </div>
      </header>
    )
  }
}

export default Header