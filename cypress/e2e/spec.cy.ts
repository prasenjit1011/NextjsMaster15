describe('template spec', () => {
    beforeEach(() => {
    })

    it('Home Page', () => {
      cy.visit('http://localhost:3001/')
    })

    it('Login Page', () => {
      cy.visit('http://localhost:3001/login');
      cy.get('[data-cy="login-button"]').click();
      cy.wait(2000);
    })

    it('Item Listing Page', () => {
      cy.visit('http://localhost:3001/login');
      cy.get('[data-cy="login-button"]').click();
      cy.wait(2000);
      
      
      cy.visit('http://localhost:3001/item');
      cy.wait(5000);
    })
})