import '@testing-library/cypress/add-commands';
import {
    filterApplicantByNameAndColumn
} from "./../framework/applicantLocatorHelper";

Cypress.Commands.add('filterApplicantByNameAndColumn', filterApplicantByNameAndColumn);
