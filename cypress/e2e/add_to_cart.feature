Feature: Add product to cart

  Scenario: User adds a product to the shopping cart
    Given I visit the products page
    When I search for "Dress"
    And I add the first product to the cart
    Then I should see the product in the shopping cart
