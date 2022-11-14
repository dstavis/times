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
    cy.get('nav > a').should("have.length", 26)
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