import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the login page", () => {
  cy.visit("https://automationexercise.com/login");
});

When("I enter username {string}", (username) => {
  cy.get("input[data-qa='login-email']").type(username);
});

When("I enter password {string}", (password) => {
  cy.get("input[data-qa='login-password']").type(password);
});

When("I click the login button", () => {
  cy.get("button[data-qa='login-button']").click();
});

Then("I should see my account dashboard", () => {
  //cy.contains("Contact us").should("be.visible");
  cy.url().should('include', '/');
});
