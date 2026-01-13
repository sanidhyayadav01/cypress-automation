/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import practicecucumber from "./cucumberPOM";

let cucumberPOM = new practicecucumber();
Given("I successfully navigate to the demo application", function () {
  cucumberPOM.Navigate()
  // cy.visit("https://example.cypress.io/");
  // cy.url().should("include", "cypress.io");
});

When("I click on the {string} link", (linkText) => {
  cucumberPOM.ClickonCommands()
  // cy.get(
  //   ":nth-child(8) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a"
  // ).click({ force: true });
});

Then("I should see the title of the page is {string}", (title) => {
  cucumberPOM.Checktitle(title)
  // cy.get("h1")
  //   .invoke("text")
  //   .then((restext) => {
  //     expect(restext).to.equal(title);
  //   });
});

// Note: to run just a single scenario from a feature file, we have to use "@focus" right above that particular scenario
