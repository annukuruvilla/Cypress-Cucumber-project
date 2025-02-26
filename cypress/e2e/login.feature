Feature: User Login

  Scenario: Successful login with valid credentials
    Given I visit the login page
    When I enter username "testuser@example.com"
    And I enter password "password123"
    And I click the login button
    Then I should see my account dashboard
