import React from 'react'
import ContactPage from './page'

describe('<ContactPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ContactPage />)
  })
})