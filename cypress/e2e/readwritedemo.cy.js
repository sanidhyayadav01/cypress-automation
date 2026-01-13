/// <reference types = "cypress"/>

before(function(){
    cy.fixture('example.json').as('test_data')
})
//here we cannot use this 'test_data' with and readFile command and also not in arrow function as it requires use of 'this' keyword
//for referring to the current context

it('Read using Fixture', function(){

    cy.fixture('example.json').then((data)=>{
        cy.log(data.name)
        cy.fixture("example.json").its('name').should('eq', 'Sanidhya')
        //If the file is in fixture folder it can be referenced directly by name without extension
        //For a JSON file its function can be used to access the values using keys
    })
    cy.log(this.test_data.name)
})

it('Read using readFile()', ()=>{
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.email)
    })
})


it('Write using writeFile',()=>{
    cy.writeFile('sample.txt','Hello, this came from writeFile function\n')
    cy.writeFile('sample.txt','I am learning cypress with Automation Step By Step', {flag:'a+'})
    //this flag basically helps us to append more data in the "sample.txt" file. 
    //If we do not use this then all the data written will get overrided/overwritten. Therefore we use "flag" here
})