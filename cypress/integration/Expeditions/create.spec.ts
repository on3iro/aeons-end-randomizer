describe('Expedition creation', () => {
  beforeEach(() => {
    // @ts-ignore disable-line
    cy.cleanupIndexedDB()

    // @ts-ignore disable-line
    cy.selectAllExpansions()
    cy.visit('expeditions')
  })

  it('an expedition can be created successfully', () => {})
})
