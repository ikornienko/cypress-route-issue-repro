/// <reference types="cypress" />

describe('Cypress route', () => {
  it('should match even with %2F in a query param value', () => {
    cy.server();
    cy.route('/api/issue*').as('api-issue');
    cy.visit('issue');

    cy.get('#button-plain').click(); // makes GET request to /api/issue?param=plain
    cy.wait('@api-issue'); // successfully waits

    // logs true
    console.log(Cypress.minimatch('/api/issue?param=%2Fpath%2Fto%2Fsomething', `/api/issue*`, {
      matchBase: true
    }));

    cy.get('#button-path').click(); // makes GET request to /api/issue?param=%2Fpath%2Fto%2Fsomething
    cy.wait('@api-issue'); // fails waiting here
  });
});
