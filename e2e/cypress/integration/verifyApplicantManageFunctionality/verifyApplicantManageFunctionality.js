import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to crew applications website', () => {
    cy.visit('');
});

When('I move applicant {string} from {string} to next stage', (applicantName, fromColumn) => {
    cy.filterApplicantByNameAndColumn(applicantName, fromColumn).within(() => {
        cy.findByText('>').click();
    })
    cy.state('applicantName', applicantName);
});

Then('I should see applicant in {string} column', (column) => {
    cy.filterApplicantByNameAndColumn(cy.state('applicantName'), column).
        should('be.visible').
        and('have.length', 1);
});

Then('I should see left and right navigation buttons on applicant card', () => {
    cy.filterApplicantByNameAndColumn(cy.state('applicantName'), 'Interviewing').within(() => {
        cy.get('.CrewMember-toolbar').children().should('have.length', 2);
    });
});

When('I move all cards from {string} to next stage', (columnName) => {
    cy.get('.App-title').should('contain.text', 'OpenOceanStudio: Crew Applications');
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
    cy.filterApplicantByNameAndColumn(cy.state('applicantName'), 'Hired').within(() => {
        cy.get('.CrewMember-toolbar').children('button').should('have.length', 1).
            and('not.have.attr', 'class');
        cy.findByText('<').should('be.visible');
    });
});

Then('I should see only right navigation button in applied column', () => {
    cy.filterApplicantByNameAndColumn(cy.state('applicantName'), 'Applied').within(() => {
        cy.get('.CrewMember-toolbar').children('button').should('have.length', 1).
            and('have.class', 'CrewMember-up');
        cy.findByText('>').should('be.visible');
    });
});

When('I move applicant {string} from {string} to previous stage', (applicantName, fromColumn) => {
    cy.filterApplicantByNameAndColumn(applicantName, fromColumn).within(() => {
        cy.findByText('<').click();
    })
    cy.state('applicantName', applicantName);
});