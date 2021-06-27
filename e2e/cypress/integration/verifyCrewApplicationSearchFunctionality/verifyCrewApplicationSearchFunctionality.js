import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to crew applications website', () => {
    cy.visit('');
});

When('I enter applicant name {string}', (applicantName) => {
    cy.get('#name').type(applicantName);
    cy.state('applicantName', applicantName);
});

When('I enter applicant city {string}', (city) => {
    cy.get('#city').type(city);
    cy.state('city', city);
});

When('I submit search criteria', (city) => {
    cy.findByText('Submit').click();
});

Then('I verify {string} of applicants displayed as expected', (numberOfApplicants) => {
    cy.get('.CrewMemeber-name').should('have.length', numberOfApplicants).then(($element) => {
        if (cy.state('applicantName')) {
            cy.wrap($element).should('contain.text', cy.state('applicantName'))
        }
        if (cy.state('city')) {
            cy.wrap($element).should('contain.text', cy.state('city'))
        }
    })
});

When('I clear search criteria', () => {
    cy.findByText('Clear').click();
});

Then('I verify no results displayed', () => {
    cy.get('.CrewMember-container').should('not.exist');
});