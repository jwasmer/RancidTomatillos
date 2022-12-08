describe("Detail View", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", { fixture: "allMovies.json"})

    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", { fixture: 'moneyPlane.json'})

    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401", { fixture: 'mulan.json' })

    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos", { fixture: 'video.json' })
  })

  it("Should load AllMoviesView", () => {
    cy.visit("http://localhost:3000/")
  })

  it("Should navigate to the URL that matches the id of the movie clicked", () => {
    cy.get('[data-cy="694919"]').click()
    cy.url().should("equal", "http://localhost:3000/694919")
  })

  it("Should display a poster image for the movie", () => {
    cy.get('[data-cy="poster"]').should("exist")
    cy.get('[data-cy="poster"]').should("have.attr", "src", "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
  })

  it("Should have a background image", () => {
    cy.get('[data-cy="backdrop"]').should("have.attr", "style", `background-image: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 50%, rgb(0, 0, 0) 100%), url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg");`)
  })

  it("Should link to an embedded trailer video", () => {
    cy.get('[data-cy="video-embed"]').should("have.attr", "src", "https://www.youtube.com/embed/https://www.youtube.com/embed/aETz_dRDEys")
  })

  it("Should have a title showing the movie name and release year", () => {
    cy.get('[data-cy="title"]').contains("Money Plane (2020)")
  })
  it("Should show genre categories for the movie", () => {
    cy.get('[data-cy="genres"]').contains("Action")
  })

  it("Should display overview text for the movie", () => {
    cy.get('[data-cy="overview"]').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
  })

  it("Should not display budget or revenue figures if data is unreliable", () => {
    cy.get('[data-cy="budget"]').should("not.exist")
    cy.get('[data-cy="revenue"]').should("not.exist")
  })

  it("Should display a runtime", () => {
    cy.get('[data-cy="runtime"]').contains("82 minutes")
  })

  it("Should display a release date", () => {
    cy.get('[data-cy="release-date"]').contains("September 28, 2020")
  })

  it("Should show the movie's average rating followed by a star emoji", () => {
    cy.get('[data-cy="rating"]').contains("average rating: 7 ⭐️")
  })

  it("Should have a back button", () => {
    cy.get('[data-cy="back-btn"]').should("exist")
  })

  it("Should return you to AllMoviesView when the back button is clicked", () => {
    cy.get('[data-cy="back-btn"]').click()
    cy.url().should("equal", "http://localhost:3000")
  })

  it("Should be able to open another DetailView if another movie is selected", () => {
    cy.get('[data-cy="337401"]').click()
    cy.url().should("equal", "http://localhost:3000/337401")
  })

  it("Should correctly format genre text when movie has multiple genres", () => {
    cy.get('[data-cy="genres"]').contains("Action | Adventure | Drama | Fantasy")
  })

  it("Should display budget and revenue data if reliable data is available", () => {
    cy.get('[data-cy="budget"]').contains("$200,000,000")
    cy.get('[data-cy="revenue"]').contains("$57,000,000")
  })
})