import testMovies from '../fixtures/allMovies.js'

describe("All Movies View", () => {

  beforeEach(() => {
    cy.intercept({
      method: "GET",
      url: "https://rancid-tomatillos.herokuapp.com/api/v2/movies" 
    }, testMovies)
  })

  it("should go to main page", () => {
    cy.visit('http://localhost:3000')
  })

})