const createBaseExpedition = () => {
  cy.get('[data-test*=btn-start-expedition]').click()
  cy.get('[data-test=input-name]').find('input').type('Test: Base Expedition')
  cy.get('[data-test=input-seed]').find('input').type('TEST-SEED')
  cy.get('[data-test=btn-expedition-create]').click()
}

describe('seeds', () => {
  before(() => {
    // @ts-ignore disable-line
    cy.cleanupIndexedDB()
      .visit('settings')
      .wait(1000)
      // @ts-ignore disable-line
      .selectSubsetOfExpansions()
      .visit('expeditions')
      .wait(1000)
  })

  after(() => {
    cy.visit('settings')
      .wait(1000)
      // @ts-ignore disable-line
      .selectAllExpansions()
      // @ts-ignore disable-line
      .deselectAllExpansions()
      // @ts-ignore disable-line
      .cleanupIndexedDB()
  })

  it('should produce correct results in original', () => {
    createBaseExpedition()

    cy.get('[data-test="Test: Base Expedition"]').click()
    cy.get('[data-test=btn-battle]').eq(0).click()

    cy.get('[data-test="Carapace Queen"]')

    cy.get('[data-test="btn-start-battle"]').click()

    cy.get('[data-test="btn-battle-lost"]').click()
    cy.get('[data-test="select-loss-reward"]').click()
    cy.get('[data-test="option-gem"]').click()
    cy.get('[data-test="btn-confirm-reward"]').click()
    cy.get('p').contains('Vriswood Amber').click()
    cy.get('[data-test="btn-continue"]').click()
    cy.get('[data-test="btn-start-battle"]').click()
    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p').contains('Dread Diamond').click()
    cy.get('p').contains('Reflective Conduit').click()
    cy.get('p').contains('Combustion').click()
    cy.get('[data-test="btn-continue"]').click()

    cy.get('[data-test=btn-battle]').eq(1).click()

    cy.get('[data-test="Prince Of Gluttons"]')

    cy.get('[data-test="modal__btn-close"]').click()
    cy.get('[data-test="backlink"]').click()
  })

  it('should produce same results in copy if everything is unchanged and done in the same order', () => {
    cy.visit('expeditions').wait(1000)
    cy.get('[data-test="Test: Base Expedition"]')
      .get('[data-test=btn-copy]')
      .click()
    cy.get('[data-test=btn-expedition-create]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]').click()
    cy.get('[data-test=btn-battle]').eq(0).click()

    cy.get('[data-test="Carapace Queen"]')

    cy.get('[data-test="btn-start-battle"]').click()

    cy.get('[data-test="btn-battle-lost"]').click()
    cy.get('[data-test="select-loss-reward"]').click()
    cy.get('[data-test="option-gem"]').click()
    cy.get('[data-test="btn-confirm-reward"]').click()
    cy.get('p').contains('Vriswood Amber').click()
    cy.get('[data-test="btn-continue"]').click()
    cy.get('[data-test="btn-start-battle"]').click()
    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p').contains('Dread Diamond').click()
    cy.get('p').contains('Reflective Conduit').click()
    cy.get('p').contains('Combustion').click()
    cy.get('[data-test="btn-continue"]').click()

    cy.get('[data-test=btn-battle]').eq(1).click()

    cy.get('[data-test="Prince Of Gluttons"]')

    cy.get('[data-test="modal__btn-close"]').click()
    cy.get('[data-test="backlink"]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]')
      .find('[data-test=btn-delete]')
      .click()
    cy.get('[data-test="YES"]').click()
  })

  it('should produce correct nemesis if seed is identical but things are done differently', () => {
    cy.visit('expeditions').wait(1000)
    cy.get('[data-test="Test: Base Expedition"]')
      .get('[data-test=btn-copy]')
      .click()
    cy.get('[data-test=btn-expedition-create]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]').click()
    cy.get('[data-test=btn-battle]').eq(0).click()

    cy.get('[data-test="Carapace Queen"]')

    cy.get('[data-test="btn-start-battle"]').click()

    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p').contains('Summonite').click()
    cy.get('p').contains('Conclave Scroll').click()
    cy.get('p').contains('Storm Vapor').click()

    cy.get('[data-test="btn-continue"]').click()

    cy.get('[data-test=btn-battle]').eq(1).click()

    cy.get('[data-test="Prince Of Gluttons"]')

    cy.get('[data-test="modal__btn-close"]').click()
    cy.get('[data-test="backlink"]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]')
      .find('[data-test=btn-delete]')
      .click()
    cy.get('[data-test="YES"]').click()
  })

  it('should procude completely different results when seed is changed', () => {
    cy.visit('expeditions').wait(1000)
    cy.get('[data-test="Test: Base Expedition"]')
      .get('[data-test=btn-copy]')
      .click()
    cy.get('[data-test=input-seed]').find('input').type('TEST-DIFFERENT')
    cy.get('[data-test=btn-expedition-create]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]').click()
    cy.get('[data-test=btn-battle]').eq(0).click()

    cy.get('[data-test="Maggoth"]')

    cy.get('[data-test="btn-start-battle"]').click()

    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p').contains('Voidium Spike').click()
    cy.get('p').contains('Caged Fire').scrollIntoView().click()
    cy.get('p').contains('Convection Field').click()

    cy.get('[data-test="btn-continue"]').click()

    cy.get('[data-test=btn-battle]').eq(1).click()

    cy.get('[data-test="Blight Lord"]')

    cy.get('[data-test="modal__btn-close"]').click()
    cy.get('[data-test="backlink"]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]')
      .find('[data-test=btn-delete]')
      .click()
    cy.get('[data-test="YES"]').click()
  })
})
