/// <reference types = "cypress"/>

it('Google Search', ()=>{

    cy.visit('https://www.google.com')

    cy.get('[name="q"]',{timeout:5000}).type('Automation Step By Step{Enter}')
    //or we can also write 
    //cy.contains('Google Search').click()

    //cy.contains('Videos').click()
})