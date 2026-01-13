import { LoginPage } from "./pages/LoginPage"
const loginpage = new LoginPage()
//here we have created an object of the LoginPage class so as to use the methods present there


beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.log('This came from BeforeEach')
})

describe('All Login Tests', function () {


    it('POM Demo',()=>{
    

    loginpage.enterUsername('Admin')
    loginpage.enterPassword('admin123')
    loginpage.clickLogin()

    // cy.get('[name="username"]').type('Admin')
    // cy.get('[name="password"]').type('admin123')
    // cy.get('.oxd-button').click()
})

it('POM Demo',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginpage.enterUsername('Sanidhya')
    loginpage.enterPassword('admin1234')
    loginpage.clickLogin()
})
})
