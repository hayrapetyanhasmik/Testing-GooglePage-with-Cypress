/// <reference types = "cypress"/>
describe("Register on List.am", function(){
    it('', function(){
        cy.visit('https://www.list.am/register');
        cy.get('#_idyour_email').type('hasyokahasiko7@gmail.com');
        cy.get('#_idpassword').type('123456');
        cy.get('#_idconfirm_password').type('123457');
        cy.get('#_idverification_number').type('44414');
        cy.get('#_idagree').click();
        cy.get('#registeraction__form_action0').click();
        cy.get('.error').should('contain', 'Մուտքագրված գաղնտաբառերը չեն համընկնում:Պատկերի վրա նշված թիվը սխալ է:')
    });
});