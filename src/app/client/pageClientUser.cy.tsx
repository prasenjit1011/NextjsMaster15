import React from 'react'
import ClientUser from './page'

describe('<ClientUser />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ClientUser />)
  })
})