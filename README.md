# cypress-test-docker

> Example running Cypress tests against application

First [container runs app (oos-ca)](oos-ca/Dockerfile), second container has [Cypress tests](e2e/Dockerfile).

## Documentation

Please see [Cypress test document](e2e/README.md) on how to run tests locally


## Use

1. build the containers with `npm run build`
2. start the web application and run Cypress tests with `npm run up`

## More info

- [Cypress Docker docs](https://on.cypress.io/docker)
- [Cypress continuous integration docs](https://on.cypress.io/ci)
