Feature: Verify Applicant manage functionality
    As a user
    I want to move applicant from one column to another
    and verify applicant is in appropriate column
    and verify navigation buttons are displaying as expected

    @CrewManage
    Scenario: Move applicant from applied to interviewing
        Given I navigate to crew applications website
        When I move applicant 'linda' from 'Applied' to next stage
        Then I should see applicant in 'Interviewing' column
        And I should see left and right navigation buttons on applicant card

    @CrewManage
    Scenario: Move applicant from interviewing to hired
        Given I navigate to crew applications website
        And I move applicant 'stewart' from 'Applied' to next stage
        When I move applicant 'stewart' from 'Interviewing' to next stage
        Then I should see applicant in 'Hired' column
        And I should see only left navigation button in hired column

    @CrewManage
    Scenario: Move applicant from hired to interviewing
        Given I navigate to crew applications website
        When I move applicant 'julia' from 'Hired' to previous stage
        Then I should see applicant in 'Interviewing' column
        And I verify '0' applicants present in 'Hired' column
        And I should see left and right navigation buttons on applicant card

    @CrewManage
    Scenario: Move applicant from interviewing to applied
        Given I navigate to crew applications website
        And I move applicant 'julia' from 'Hired' to previous stage
        When I move applicant 'julia' from 'Interviewing' to previous stage
        Then I should see applicant in 'Applied' column
        And I verify '0' applicants present in 'Interviewing' column
        And I should see only right navigation button in applied column

    @CrewManage
    Scenario: Move all applicant from applied to interviewing
        Given I navigate to crew applications website
        When I move all cards from 'Applied' to next stage
        Then I verify '0' applicants present in 'Applied' column
        And I verify '4' applicants present in 'Interviewing' column