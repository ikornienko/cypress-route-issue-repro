/// <reference types="cypress" />

describe('Cypress route', () => {
  it('should match even with %2F in a query param value', () => {
    cy.server();
    cy.route('/api/issue*').as('api-issue');
    cy.visit('issue');

    cy.get('#button-plain').click();
    cy.wait('@api-issue');

    cy.get('#button-path').click();
    cy.wait('@api-issue');
  });
});
