describe('The landing page "/"', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('redirects to the nemesis randomizer', () => {
    cy.visit('/')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/randomizer/nemesis')
    })

    cy.get('h6').contains('Nemesis')
  })
})
