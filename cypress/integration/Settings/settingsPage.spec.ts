describe('Settings page', () => {
  beforeEach(() => {
    // @ts-ignore disable-line
    cy.cleanupIndexedDB().visit('settings')
  })

  after(() => {
    // @ts-ignore disable-line
    cy.cleanupIndexedDB()
  })

  it('successfully loads', () => {
    cy.get('h6').contains('Settings')
  })
})
