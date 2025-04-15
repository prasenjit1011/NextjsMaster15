import React from 'react'
import StaticCustomer from './page'

describe('<StaticCustomer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StaticCustomer />)
  })
})