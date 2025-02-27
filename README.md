# Cypress-Cucumber-project
This is a Cypress Cucumber Test Project for a simple E-commerce web application where 3 features(user login, product search and adding products to cart) are being tested.

Execute below 3 steps to run the project after you clone it from Github
===========================================================================
      cd Cypress-Cucumber-project

      npm install cypress cypress-cucumber-preprocessor

      npx cypress run

Application: A sample e-commerce website (https://automationexercise.com)
========================================================================
Features tested:
1.	User Login
2.	Search for a Product
3.	Add Product to Cart

Step 1: Set Up Cypress with Cucumber

1.	Initialize Node.js Project
   
        mkdir Cypress-Cucumber-project

        cd Cypress-Cucumber-project

        npm init -y

2.	Install Cypress & Cucumber Preprocessor
   
        npm install cypress cypress-cucumber-preprocessor

3.	Configure Cypress to Use Cucumber by modifying cypress.config.js

Step 2: Write Test Scenarios in .feature Files

Create a features folder inside cypress/e2e/, and add the following .feature files:

1. login.feature
2. search.feature
3. add_to_cart.feature

Step 3: Implement Step Definitions in JavaScript

Create a step_definitions folder inside cypress/e2e/features/, and add the following .js files.

1. login.js
2. search.js
3. add_to_cart.js

Step 4: Run Cypress Tests

To open Cypress UI:
         
          npx cypress open

To run all tests in headless mode:
         
          npx cypress run
