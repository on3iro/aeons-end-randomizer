describe('Expedition page', () => {
  beforeEach(() => {
    // @ts-ignore disable-line
    cy.cleanupIndexedDB()

    // @ts-ignore disable-line
    cy.selectAllExpansions()
    cy.visit('expeditions')
  })

  it('successfully loads', () => {
    // cy.visit('/expeditions')
    cy.get('h6').contains('Expeditions')
  })
})
