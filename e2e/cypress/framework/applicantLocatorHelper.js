//Identify the applicant using given name and column
export function filterApplicantByNameAndColumn(applicantName, column) {
    return cy.findByText(column).siblings('div').filter(`:contains(${applicantName})`);
}