Feature: US 1 Status Filter
    Background: 
        Given A user has successfully authenticated

    Scenario Outline: TC 1 A user is gonna filter the existing orders by status
    Given A user goes to the orders Page
    When The user click show filters
    When The user clicks the status filter "<status>" in the search bar
    Then The order filtered status as "<status>" has to appear
        Examples:
            | status |
            | Active |
            | Failed |


    Scenario Outline: TC 2 A user will filter orders that do not exist by status
    Given The user goes to the orders Page
    When The user click the button show filters
    When The user clicks the status filter as "<status>" in the search bar
    Then A message sayig "Your search produced no results. Please modify filters or search terms to expand your search." 
        Examples:
            | status                |
            | Initialized           |
            | Free Trial            |
            | Free Trial Expired    |
            | Suspended             |
            | Canceled              |
    
    Scenario Outline: TC 3 A user is gonna filter the orders active and by all the ids
    Given A simple user goes to orders Page
    When The user click show filters and select the status active
    When The user enters the id as "<id>" in the search bar
    Then The order filtered id as "<id>" has to appear
        Examples:
            | id        |
            | 130437257 |
            | 130436323 |
            | 130436322 |
            | 130436320 |
            | 130436319 |