/// <reference types = "cypress"/>
describe("Testing smth on Google", function(){
    before(function(){
        cy.visit('https://google.com');
        cy.title().should('contain', 'Google');
    });

    
    it("Search smth", function(){    
        cy.get('.gLFyf').type('smth {enter}');
    });
    

    it("Check validation", function(){
    cy.get('input.gLFyf').should('have.value', 'smth');
    cy.get('.ExCKkf').should('not.be.checked');
    });

    it("Toggle buttons", function(){
    cy.get('.ExCKkf').click();
    cy.get('.ly0Ckb').click();
    cy.get('input.gLFyf').type('anyth');
    cy.get('.zgAlFc').click();
    });
});