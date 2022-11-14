const sectionNames = ["arts",
  "automobiles",
  "books",
  "business",
  "fashion",
  "food",
  "health",
  "home",
  "insider",
  "magazine",
  "movies",
  "nyregion",
  "obituaries",
  "opinion",
  "politics",
  "realestate",
  "science",
  "sports",
  "sundayreview",
  "technology",
  "theater",
  "t-magazine",
  "travel",
  "upshot",
  "us",
  "world"]

describe('top stories viewer', () => {
  beforeEach( () => {
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/topstories/v2/*"
    },
    {
      statusCode: 200,
      fixture: "articles"
    })
  })
  
  it('displays articles', () => {
    cy.visit('http://localhost:3000')
    cy.get('.abstract > img').should("have.length", 3)
  })

  it('shows links to all sections', () => {
    cy.get('nav > a').should("have.length", sectionNames.length)
  })

  it("takes the user to a section page when they click the link for it", () => {
    cy.get("nav").contains("arts").click()
    cy.url().should("include", "/section/arts")
    cy.get("h1").contains("Arts")
  })

  it("takes the user to an article detail page when they click on an article", () => {
    cy.get(".abstract").first().click()
    cy.url().should("include", "/article/")
  })
})