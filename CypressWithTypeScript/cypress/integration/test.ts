 it('google test', function(){
     cy.visit('https://google.com')
     cy.get('[name="q"]').type('Automation step by step')
     .type('{enter}')
 })