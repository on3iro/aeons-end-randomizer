describe('Expedition page', () => {
  beforeEach(() => {
    // @ts-ignore disable-line
    cy.cleanupIndexedDB()
      .visit('settings')
      .wait(1000)
      // @ts-ignore disable-line
      .selectAllExpansions()
      .visit('expeditions')
  })

  after(() => {
    cy.visit('settings')
      .wait(1000)
      // @ts-ignore disable-line
      .deselectAllExpansions()
      // @ts-ignore disable-line
      .cleanupIndexedDB()
  })

  it('successfully loads', () => {
    cy.get('h6').contains('Expeditions')
  })
})
