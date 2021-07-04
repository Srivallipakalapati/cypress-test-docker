//Identify the applicant using given name and column
export function filterApplicantByNameAndColumn(applicantName, column) {
    cy.findByText(column).siblings('div').filter(`:contains(${applicantName})`).then((applicant) => {
        cy.wrap(applicant).as('applicant');
    })
}