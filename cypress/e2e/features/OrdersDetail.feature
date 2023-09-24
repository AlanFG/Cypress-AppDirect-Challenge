Feature: US 1 User Can open orders page and search for their order
    Background: 
        Given A user alredy logged in

    Scenario Outline: TC 1 Checking the orders details
    Given The user clicks the orders Page
    When The user clicks the first order that is shown
    When The user clicks the first Order History
    Then The order details has to show and the price breakdown
