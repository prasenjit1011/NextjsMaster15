describe('template spec', () => {
  it('Home Page', () => {
    cy.visit('http://localhost:3001/')
  })

  it('Client Page', () => {
    cy.visit('http://localhost:3001/client');
    cy.wait(100);
  })


  describe('Client Login Page', () => {

    beforeEach(() => {
      //cy.clearCookies();
    });
  
    it('Client Login', () => {
      cy.visit('http://localhost:3001/client/login');
      cy.wait(10500);
      cy.get('button[type="submit"]').click();
      cy.wait(10500);
    })

    it('Client Dashboard', () => {
      cy.visit('http://localhost:3001/client/dashboard');
      cy.wait(10500);
      cy.get('button[type="submit"]').click();
      cy.wait(10500);
    })

    
  });


  // describe('Login and Add Review Flow', () => {

  //   beforeEach(() => {
  //     cy.clearCookies();
  //   });
  
  //   it('Should login the user and redirect to product page', () => {
  //     cy.visit('/client/login');
  
  //     // Fill login form and submit (adjust selectors)
  //     // cy.get('input[name="email"]').type('test@example.com');
  //     // cy.get('input[name="password"]').type('password123');
  //     cy.get('button[type="submit"]').click();
  
  //     // Assert login success by checking token cookie
  //     //cy.getCookie('token').should('exist');
  
  //     // Optional: Redirect to product page after login
  //     //cy.url().should('not.include', '/login');
  //   });
  
  //   // it('Should add a review after login', () => {
  //   //   // Set cookie manually if login form isn't testable
  //   //   cy.setCookie('token', 'mocked-token');
  
  //   //   // Visit product page
  //   //   cy.visit('/product/123');
  
  //   //   // Assert review form is visible
  //   //   cy.get('textarea[name="review"]').should('exist');
  
  //   //   // Fill and submit the review
  //   //   cy.get('textarea[name="review"]').type('This is an awesome product!');
  //   //   cy.get('button[type="submit"]').contains('Submit Review').click();
  
  //   //   // Intercept the API request to confirm review was sent
  //   //   cy.intercept('POST', '/api/reviews').as('submitReview');
  //   //   cy.wait('@submitReview').its('response.statusCode').should('eq', 200);
  
  //   //   // Assert review is added to DOM (optional)
  //   //   cy.contains('This is an awesome product!').should('exist');
  //   // });
  // });
  


















})


/*

*/