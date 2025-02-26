import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the login page", () => {
  cy.visit("cypress/fixtures/login.html");  // Point to a static html page
});
