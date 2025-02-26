Feature: Search for a product

  Scenario: User searches for an existing product
    Given I visit the products page
    When I enter "T-Shirt" in the search bar
    And I click the search button
    Then I should see search results for "T-Shirt"
