// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('selectAllExpansions', () => {
  cy.get('[data-test*=Expansions]').click({ force: true })
  cy.get('span').contains('Select All').click()
  cy.get('[data-test*=Expansions]').click({ force: true })
})

Cypress.Commands.add('selectSubsetOfExpansions', () => {
  cy.get('[data-test*=Expansions]').click({ force: true })
  cy.get('label').contains('Aeons End').click()
  cy.get('label').contains('The New Age').click()
  cy.get('label').contains('War Eternal').click()
  cy.get('label').contains('Buried Secrets').click()
  cy.get('label').contains('The Depths').click()
  cy.get('label').contains('Into The Wild').click()
  cy.get('label').contains('The Nameless').click()
  cy.get('label').contains('Outer Dark').click()
  cy.get('label').contains('Shattered Dreams').click()
  cy.get('label').contains('The Ancients').click()
  cy.get('label').contains('The Void').click()
  cy.get('[data-test*=Expansions]').click({ force: true })
})

Cypress.Commands.add('deselectAllExpansions', () => {
  cy.get('[data-test*=Expansions]').click({ force: true })
  cy.get('span').contains('Deselect All').click()
  cy.get('[data-test*=Expansions]').click({ force: true })
})

Cypress.Commands.add('cleanupIndexedDB', () => {
  indexedDB.deleteDatabase('keyval-store')
})

Cypress.Commands.add('selectAllSupplySetups', () => {
  cy.get('[data-test=SupplySetups]').click({ force: true })
  cy.get('[data-test=supply-select-all]')
    .get('span')
    .contains('Select All')
    .click()
  cy.get('[data-test=SupplySetups]').click({ force: true })
})

Cypress.Commands.add('deselectAllSupplySetups', () => {
  cy.get('[data-test=SupplySetups]').click({ force: true })
  cy.get('[data-test=supply-select-all]')
    .get('span')
    .contains('Deselect All')
    .click()
  cy.get('[data-test=SupplySetups]').click({ force: true })
})
