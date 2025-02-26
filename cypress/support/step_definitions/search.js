import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the products page", () => {
  cy.visit("https://automationexercise.com/products");
});

When("I enter {string} in the search bar", (productName) => {
  cy.get("input#search_product").type(productName);
});

When("I click the search button", () => {
  cy.get("button#submit_search").click();
});

Then("I should see search results for {string}", (productName) => {
  cy.contains(productName).should("be.visible");
});
