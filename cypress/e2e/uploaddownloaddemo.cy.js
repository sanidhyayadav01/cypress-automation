/// <reference types = "cypress"/>
/// <reference types = "cypress-downloadfile"/>

it('File Upload Test', function(){

    cy.visit('https://trytestingthis.netlify.app/')

    cy.get('[name="myfile"]').attachFile('example.json')
    //here since example.json was available in the fixture folder itself so we can just add it by name
    //but if the file to be uploaded is in different folder in the same project then we have to mention the relative path too
})

it('File Download Test', function(){

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'example.jpg')
})