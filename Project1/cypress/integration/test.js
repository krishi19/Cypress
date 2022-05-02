/// <reference types="cypress"/>



it('google test', function() {
    cy.visit('https://google.com')
    cy.get('.gLFyf'). type('Automation step by step{enter}')
    // cy.get('.MUFPAc > :nth-child(2) > a')
    cy.wait(4000)
    cy.contains('Videos').click()

    // cy.get('[href="https://automationstepbystep.com/"] > .LC20lb').click()
})