/// <reference types="Cypress" />
/// test-02


describe('My first test', function() {
    it('Finds the content "type"', function() {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()
        
        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and veryify the value has been updated
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    })
})