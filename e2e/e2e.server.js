describe('Credit Card Validator Widget', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000');
    });

    it('checks valid Visa card', () => {
        cy.get('#card-input').type('4111111111111111');
        cy.get('#validation-result').should('have.text', 'Номер карты валиден');
        cy.get('#card-type').should('contain.text', 'visa');
        cy.get('#card-image').should('have.attr', 'alt').and('contain', 'visa');
    });

    it('checks invalid card', () => {
        cy.get('#card-input').type('1234567890123456');
        cy.get('#validation-result').should('contain.text', 'не валиден');
        cy.get('#card-type').should('contain.text', 'Неизвестно');
    });
});