Feature: US 1 TC 1 Login User

    Scenario Outline: TC 1 A user alredy registered is loggin
    Given A user alredy registered is at the Home page
    When The user goes to the login page and write her email as "<email>" and press the next button
    When The user write is password as "<password>"
    Then The user is redirected to the Admin page
        Examples:
            | email                     | password          |
            | agasparoli@prismamp.com   | !EFqabyEF79BhA    |