describe('which key code', () => {
  it('Visits the website', () => {
    cy.visit('http://localhost:1234')
    cy.get('body').type('a')
    cy.get('#js-which').should('have.value', '65')
    cy.get('a[href="/codes"').click()
    cy.url().should('include', '/codes')
    cy.get('pre').contains('Extract from')
  })
})
