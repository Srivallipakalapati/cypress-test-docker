# cypress-test-docker
Contains a suite of cypress tests that run against oos-ca application
Tests are written using a BDD syntax Given, When, Then 

### prerquisites
Require yarn or node installed
Using `cypress-cucumber-preprocessor` for BDD

### Running locally
`yarn install` to install project dependencies

Everytime Cypress is installed, need to link cypress-cucumber-preprocessor with cypress using:
`npm link cypress-cucumber-preprocessor`

Make sure application is up and running and update the base url in `cypress.json` based on where the application is running.

Runing tests via Cypress runner: 
`yarn cypress open`

Running a single test headlessly:
`yarn cypress run --spec 'cypress/integration/**/verifyCrewApplicationSearchFunctionality.feature'`

### Features

1) [Crew Search](/cypress/integration/verifyCrewApplicationSearchFunctionality.feature)
2) [Crew Manage](/cypress/integration/verifyApplicantManageFunctionality.feature)



