import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the products pag", () => {
  cy.visit("https://automationexercise.com/products");
});

When("I search for {string}", (productName) => {
  cy.get("input#search_product").type(productName);
  cy.get("button#submit_search").click();
});

When("I add the first product to the cart", () => {
  cy.get(".productinfo .btn").first().click();
  cy.get("#cartModal").should("be.visible");
  //cy.get("a[href='/view_cart']").click();
  cy.get("#cartModal").find("a[href='/view_cart']").click();
});

Then("I should see the product in the shopping cart", () => {
  //cy.visit("https://automationexercise.com/view_cart");
  cy.url().should("include", "/view_cart");
  //cy.get("#cart_items").should("be.visible");
});
