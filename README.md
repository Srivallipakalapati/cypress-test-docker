# cypress-test-docker

Sample project to run Cypress tests against application in docker (both app and tests)

First container has [app](sampleapp/Dockerfile) and second container has [Cypress tests](e2e/Dockerfile).

### Documentation

Please see [Cypress test document](e2e/README.md) on how to run tests locally


### Use

1) Build the containers with `npm run build`
2) Start the web application and run Cypress tests with `npm run up`

### More info

- [Cypress Docker docs](https://on.cypress.io/docker)
- [Cypress continuous integration docs](https://on.cypress.io/ci)
