Feature: US 1 User Can open orders page and search for their order
    Background: 
        Given A user is logged in

    Scenario: TC 1 A user can view is orders
    Given The user goes to orders Page
    Then the orders has to appear