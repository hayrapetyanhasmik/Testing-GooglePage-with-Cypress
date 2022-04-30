/// <reference types = "cypress"/>

describe("Testing smth on Google", function(){

    beforeEach(function(){
        cy.eyesOpen({appName: 'Google search', batchName: 'Google search ok'});
    });

    afterEach(function(){
        cy.eyesClose();
    });

    it("Search smth", function(){  
        cy.visit('https://google.com');
        cy.eyesCheckWindow('Main page');
        //cy.title().should('contain', 'Google');  
        cy.get('.gLFyf').type('smth {enter}'); 
        cy.eyesCheckWindow('Search succed'); 
    });
    
   
    //it("Check validation", function(){
    //cy.get('input.gLFyf').should('have.value', 'smth');
   // cy.get('.ExCKkf').should('not.be.checked');
    //});

    //it("Toggle buttons", function(){
    //cy.get('.ExCKkf').click();
   // });
});