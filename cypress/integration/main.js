describe('which key code', () => {
  it('Visits the website', () => {
    cy.visit('http://localhost:1234')
    cy.get('body').type('a')
  })
})
