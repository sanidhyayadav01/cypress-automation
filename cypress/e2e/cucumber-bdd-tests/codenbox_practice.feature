@epic:Navigation
Feature: Navigate and check page title

  @story:CheckPageTitle @severity:critical
  Scenario: Open the Cypress example page and check the title
    Given I successfully navigate to the demo application
    When I click on the "Commands" link
    Then I should see the title of the page is "Cypress API"
