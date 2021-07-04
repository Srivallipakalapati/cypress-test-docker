import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to crew applications website', () => {
    cy.visit('');
});

When('I move applicant {string} from {string} to next stage', (applicantName, fromColumn) => {
    cy.filterApplicantByNameAndColumn(applicantName, fromColumn);
    cy.get('@applicant').within(() => {
        cy.findByText('>').click();
    });
    cy.wrap(applicantName).as('applicantName');
});

Then('I should see applicant in {string} column', (column) => {
    cy.get('@applicantName').then((applicantName) => {
        cy.filterApplicantByNameAndColumn(applicantName, column);
    })
    cy.get('@applicant').should('be.visible').and('have.length', 1);
});

Then('I should see left and right navigation buttons on applicant card', () => {
    cy.get('@applicantName').then((applicantName) => {
        cy.filterApplicantByNameAndColumn(applicantName, 'Interviewing');
    });
    cy.get('@applicant').within(() => {
        cy.get('.CrewMember-toolbar').children().should('have.length', 2);
    })
});

When('I move all cards from {string} to next stage', (columnName) => {
    cy.findByText(columnName).siblings('div').each($card => {
        cy.wrap($card).within(() => {
            cy.get('.CrewMember-up').click();
        })
    });
});

Then('I verify {string} applicants present in {string} column', (number, column) => {
    cy.findByText(column).siblings('div').should('have.length', number);
});

Then('I should see only left navigation button in hired column', () => {
    cy.get('@applicantName').then((applicantName) => {
        cy.filterApplicantByNameAndColumn(applicantName, 'Hired');
    });
    cy.get('@applicant').within(() => {
        cy.get('.CrewMember-toolbar').children('button').should('have.length', 1).
            and('not.have.attr', 'class');
        cy.findByText('<').should('be.visible');
    });
});

Then('I should see only right navigation button in applied column', () => {
    cy.get('@applicantName').then((applicantName) => {
        cy.filterApplicantByNameAndColumn(applicantName, 'Applied');
    });
    cy.get('@applicant').within(() => {
        cy.get('.CrewMember-toolbar').children('button').should('have.length', 1).
            and('have.class', 'CrewMember-up');
        cy.findByText('>').should('be.visible');
    })
});

When('I move applicant {string} from {string} to previous stage', (applicantName, fromColumn) => {
    cy.filterApplicantByNameAndColumn(applicantName, fromColumn);
    cy.get('@applicant').within(() => {
        cy.findByText('<').click();
    })
    cy.wrap(applicantName).as('applicantName');
});