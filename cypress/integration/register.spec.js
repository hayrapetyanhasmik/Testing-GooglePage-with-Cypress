/// <reference types = "cypress"/>
describe("Registration on List.am", function(){
    beforeEach(function(){ 
        cy.visit('https://www.list.am/register');
        cy.url().should('include', '/register');
        cy.location('protocol').should('eq', 'https:')
    })
    it.skip('Check signup functionality with valid data', function(){
        cy.get('#_idyour_email').type('hasyokahasiko7@gmail.com');
        cy.get('#_idpassword').type('123456');
        cy.get('#_idconfirm_password').type('123456');
        cy.get('#_idverification_number').type(''); // ?
        cy.get('#_idagree').click();
        cy.get('#action__form_action0').click();
        
    });

    it('Check signup functionality with invalid data', function(){
        cy.get('#_idyour_email').type('hasyokahasiko7@gmail.com');
        cy.get('#_idpassword').type('123456');
        cy.get('#_idconfirm_password').type('123457');
        cy.get('#_idverification_number').type('61087');
        cy.get('#_idagree').click();
        cy.get('#action__form_action0').click();
        cy.get('.error').should('contain', 'Մուտքագրված գաղնտաբառերը չեն համընկնում:Պատկերի վրա նշված թիվը սխալ է:')
    });
});