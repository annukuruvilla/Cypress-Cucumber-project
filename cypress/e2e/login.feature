Feature: User Login

  Scenario: Successful login with valid credentials
    Given I visit the login page
    When I enter username "johndoe@automation.com"
    And I enter password "johndoe131089!"
    And I click the login button
    Then I should see my account dashboard
