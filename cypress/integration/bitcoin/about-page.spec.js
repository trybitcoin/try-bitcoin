describe('About page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/');
    });


    it('displays a version', () => {
        cy.contains('Try Bitcoin');
        cy.get('#nav-about').click();
        cy.contains('About');
    })

});
