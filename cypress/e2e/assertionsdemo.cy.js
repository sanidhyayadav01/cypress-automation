  it('Assertions Demo', () => {

    cy.visit('https://example.cypress.io')

    cy.contains("get").click()

    cy.get('#query-btn')
    .should('contain','Button')
    .and('have.class','query-btn')
    .and('be.enabled')


    expect(true).to.be.true
    let name='cypress'
    expect(name).to.be.equal('cypress')
    //here the explicit assertions are executed before/faster than the implicit ones
    assert.strictEqual(4,'4','Not Equal')

  })