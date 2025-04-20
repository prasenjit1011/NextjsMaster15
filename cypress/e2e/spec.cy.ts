describe('template spec', () => {
    it('Home Page', () => {
      cy.visit('http://localhost:3001/')
    })
  
    it('Login Page', () => {
      cy.visit('http://localhost:3001/login');
      
      cy.wait(1000);

      cy.visit('http://localhost:3001/item');
      cy.wait(1000);
    })
})