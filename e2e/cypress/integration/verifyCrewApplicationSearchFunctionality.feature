Feature: Verify crew application search functionality
    As a user
    I want to search applicant using different search criteria
    and verify results displayed as per search criteria
    and also verify clear search functionality working as expected

    @CrewSearch
    Scenario Outline: search for applicant using name and city
        Given I navigate to crew applications website
        When I enter applicant name '<name>'
        And I enter applicant city '<city>'
        And I submit search criteria
        Then I verify '<number>' of applicants displayed as expected

        Examples:
            | name    | city      | number |
            | linda   | liverpool | 1      |
            | stewart | worcester | 1      |

    @CrewSearch
    Scenario Outline: search for applicant using city
        Given I navigate to crew applications website
        When I enter applicant city '<city>'
        And I submit search criteria
        Then I verify '<number>' of applicants displayed as expected

        Examples:
            | city    | number |
            | cardiff | 1      |
            | er      | 3      |

    @CrewSearch
    Scenario Outline: search for applicant using name
        Given I navigate to crew applications website
        When I enter applicant name '<name>'
        And I submit search criteria
        Then I verify '<number>' of applicants displayed as expected

        Examples:
            | name  | number |
            | julia | 1      |
            | li    | 2      |

    @CrewSearch
    Scenario Outline: serach for applicant using full name and clear search
        Given I navigate to crew applications website
        When I enter applicant name '<fullname>'
        And I submit search criteria
        Then I verify no results displayed
        When I clear search criteria
        Then I verify '<number>' of applicants displayed as expected

        Examples:
            | fullname   | number |
            | linda ruiz | 5      |