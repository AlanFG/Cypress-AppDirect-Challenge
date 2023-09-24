Feature: US 1 User Can open orders page and search for their order
    Background: 
        Given A user is currently logged into the system

    Scenario Outline: TC 1 Checking if a user can search by id string
    Given A user goes to orders Page 
    When The user enters the "<id>" in the search bar
    Then The order as "<id>" filtered has to appear
        Examples:
            | id        |
            | 130436323 |
            | 130436322 |
            | 130436321 |
            | 130436320 |
            | 130436319 |

    Scenario Outline: TC 2 Checking if a user can search by Product string
    Given User goes to orders Page
    When The user enters the as "<Product>" in the search bar
    Then The order "<Product>" filtered has to appear
        Examples:
            | Product               |
            | Analytics             |
            | AppDirect Support     |
            | AppDirect Academy     |
            | Documentation Center  |
            | Analytics             |
            | Notifications         |

    Scenario: TC 3 Checking if a user can clear the search bar
    Given The user is in the orders page and the search bar has something writing in
    Then The user has to clear the search bar and the orders has to appear            