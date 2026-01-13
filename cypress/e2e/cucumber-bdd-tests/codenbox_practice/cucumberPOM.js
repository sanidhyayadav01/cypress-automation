class practicecucumber {
  Navigate() {
    cy.visit("https://example.cypress.io/");
    cy.url().should("include", "cypress.io");
  }

  ClickonCommands() {
    cy.get(
      ":nth-child(8) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a"
    ).click({ force: true });
  }

  Checktitle(title) {
    cy.get("h1")
      .invoke("text")
      .then((restext) => {
        expect(restext).to.equal(title);
      });
  }
}
export default practicecucumber;
