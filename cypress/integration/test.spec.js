/// <reference types = "cypress"/>
describe("Testing smth on Google", function(){
    before(function(){
        cy.visit('https://google.com');
        cy.title().should('contain', 'Google');
        
        
    });

    it("Search smth", function(){    
        cy.get('.gLFyf')
          .type('smth', {delay:200})
          .should('have.value', 'smth')
          .type('{selectall}{del}')
          .type('anyth').clear().should('have.value', '')
    });
    
    it("Toggle buttons", function(){
        cy.get('input.gLFyf').type('cypress {enter}')
        cy.get('.ExCKkf').click()
          .get('.ly0Ckb').click()
          .get('.zgAlFc').click()
          .get('.MUFPAc').contains('Картинки').click()
    });
});