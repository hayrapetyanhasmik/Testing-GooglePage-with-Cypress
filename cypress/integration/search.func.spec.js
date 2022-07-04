/// <reference types = "cypress"/>

describe("Test search functionality on List", function(){
    before(function(){    
        cy.visit("https://www.list.am");
        cy.pause();
        cy.url().should('include', 'list');
        cy.location('protocol').should('eq', 'https:');
    });

    it("Search for Labrador", function(){
        cy.get('#idSearchBox').type('labrador');
        cy.get('.ui-menu-item').should('be.visible')
        .should('have.length', 4);
        cy.contains('labrador');
        cy.contains('labrador');
        cy.contains('labrador retriver');
        cy.contains('labradori');
        cy.get('#ui-id-4').click();
        cy.url().should('include', 'retriver');
    });












});