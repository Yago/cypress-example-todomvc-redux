/// <reference types="cypress" />

it('adds todos', () => {
  cy.visit('/')
  cy.get('.new-todo')
    .type('write code{enter}')
    .type('write tests{enter}')
    .type('deploy{enter}')
    
  // Take a snapshot for visual diffing
  cy.percySnapshot();

  cy.get('.todo').should('have.length', 3)
})
