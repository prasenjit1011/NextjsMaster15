describe('template spec', () => {
  beforeEach(()=>{
    //cy.visit('http://localhost:3001/')
  })

  it('passes', () => {
    cy.visit('http://localhost:3001/');
    cy.wait(1500);
  })

  it('Client us ', () =>{
    cy.visit('/client');
    cy.wait(1500);
  })

  it('Server us ', () =>{
    cy.visit('/server');
    cy.wait(1500);
  })

  it('Contact us ', () =>{
    cy.visit('/contact');

    cy.get('[data-cy=input-name]').type('John Doe');
    cy.get('[data-cy=input-email]').type('john@example.com');
    cy.get('[data-cy=input-message]').type('Hello from Cypress!');

    cy.get('[data-cy=submit-button]').click();

    //{"message":"User id is required"}
    //cy.get('[data-cy=success-message]').should('contain', 'Your message has been sent!');
    cy.wait(500);
  })


  it('Submits the contact form and validates response', () => {
    // Intercept the POST request
    cy.intercept('POST', '/items').as('submitForm');
  
    // Visit the form page
    cy.visit('/contact');
  
    // Fill out the form
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('textarea[name="message"]').type('Hello, this is a test message.');
  
    // Submit the form
    cy.get('form').submit();
  
    // Wait for the request and validate the response
    cy.wait('@submitForm').then((interception) => {
      //console.log(interception);
      //User id is required
      //Item created successfully!
      expect(interception.response.statusCode).to.eq(201);
      expect(interception.response.body).to.have.property('message', 'Item created successfully!');
    });
    //cy.wait(500)
  });
  




})