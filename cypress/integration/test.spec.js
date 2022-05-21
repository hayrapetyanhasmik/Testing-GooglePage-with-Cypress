/// <reference types = "cypress"/>
describe("Testing smth on Google", function(){
    before(function(){
        cy.visit("/");
        cy.pause();
        cy.url().should('include', 'google');
        cy.title().should('contain', 'Google');
        cy.location('protocol').should('eq', 'https:');
        cy.location('pathname').should('eq', '/')
    });

    it("Search smth", function(){    
        cy.get('.gLFyf')
          .type('smth', {delay:200})
          .should('have.value', 'smth')
          .type('{selectall}{del}')
          .type('anyth').clear().should('have.value', '');
    });
    
    it("Toggle buttons", function(){
        cy.get('input.gLFyf').type('cypress logo {enter}');
        cy.get('.ExCKkf').click()
          .get('.ly0Ckb').click().should('be.visible')
        //cy.wait(3000);
          .get('.zgAlFc').click()
          .get('.MUFPAc').contains('Картинки').click();
        cy.url().should('include', 'cypress');
    });
});