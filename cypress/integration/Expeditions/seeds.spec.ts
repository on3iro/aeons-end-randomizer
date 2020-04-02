const createBaseExpedition = () => {
  cy.get('[data-test*=btn-start-expedition]').click()
  cy.get('[data-test=input-name]')
    .find('input')
    .type('Test: Base Expedition')
  cy.get('[data-test=input-seed]')
    .find('input')
    .type('TEST-SEED')
  cy.get('[data-test=btn-expedition-create]').click()
}

describe('seeds', () => {
  before(() => {
    // @ts-ignore disable-line
    cy.cleanupIndexedDB()

    // @ts-ignore disable-line
    cy.selectAllExpansions()
    cy.visit('expeditions')

    createBaseExpedition()
  })

  after(() => {
    // @ts-ignore disable-line
    cy.deselectAllExpansions()
    // @ts-ignore disable-line
    cy.cleanupIndexedDB()
  })

  it('should produce correct results in original', () => {
    cy.get('[data-test="Test: Base Expedition"]').click()
    cy.get('[data-test=btn-battle]')
      .eq(0)
      .click()

    cy.get('[data-test="Carapace Queen"]')

    cy.get('[data-test="btn-start-battle"]').click()

    cy.get('[data-test="btn-battle-lost"]').click()
    cy.get('[data-test="select-loss-reward"]').click()
    cy.get('[data-test="option-gem"]').click()
    cy.get('[data-test="btn-confirm-reward"]').click()
    cy.get('p')
      .contains('Breach Ore')
      .click()
    cy.get('[data-test="btn-continue"]').click()
    cy.get('[data-test="btn-start-battle"]').click()
    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p')
      .contains('Mentite Chunk')
      .click()
    cy.get('p')
      .contains('Riddle Sphere')
      .click()
    cy.get('p')
      .contains('Nerve Jab')
      .click()
    cy.get('[data-test="btn-unlock-next-battle"]').click()

    cy.get('[data-test=btn-battle]')
      .eq(1)
      .click()

    cy.get('[data-test="Prince Of Gluttons"]')

    cy.get('[data-test="modal__btn-close"]').click()
    cy.get('[data-test="backlink"]').click()
  })

  it('should produce same results in copy if everything is unchanged and done in the same order', () => {
    cy.get('[data-test="Test: Base Expedition"]')
      .get('[data-test=btn-copy]')
      .click()
    cy.get('[data-test=btn-expedition-create]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]').click()
    cy.get('[data-test=btn-battle]')
      .eq(0)
      .click()

    cy.get('[data-test="Carapace Queen"]')

    cy.get('[data-test="btn-start-battle"]').click()

    cy.get('[data-test="btn-battle-lost"]').click()
    cy.get('[data-test="select-loss-reward"]').click()
    cy.get('[data-test="option-gem"]').click()
    cy.get('[data-test="btn-confirm-reward"]').click()
    cy.get('p')
      .contains('Breach Ore')
      .click()
    cy.get('[data-test="btn-continue"]').click()
    cy.get('[data-test="btn-start-battle"]').click()
    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p')
      .contains('Mentite Chunk')
      .click()
    cy.get('p')
      .contains('Riddle Sphere')
      .click()
    cy.get('p')
      .contains('Nerve Jab')
      .click()
    cy.get('[data-test="btn-unlock-next-battle"]').click()

    cy.get('[data-test=btn-battle]')
      .eq(1)
      .click()

    cy.get('[data-test="Prince Of Gluttons"]')

    cy.get('[data-test="modal__btn-close"]').click()
    cy.get('[data-test="backlink"]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]')
      .find('[data-test=btn-delete]')
      .click()
    cy.get('[data-test="YES"]').click()
  })

  it('should produce correct nemesis if seed is identical but things are done differently', () => {
    cy.get('[data-test="Test: Base Expedition"]')
      .get('[data-test=btn-copy]')
      .click()
    cy.get('[data-test=btn-expedition-create]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]').click()
    cy.get('[data-test=btn-battle]')
      .eq(0)
      .click()

    cy.get('[data-test="Carapace Queen"]')

    cy.get('[data-test="btn-start-battle"]').click()

    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p')
      .contains('Mentite Chunk')
      .click()
    cy.get('p')
      .contains('Geophage')
      .click()
    cy.get('p')
      .contains('Nerve Jab')
      .click()

    cy.get('[data-test="btn-unlock-next-battle"]').click()

    cy.get('[data-test=btn-battle]')
      .eq(1)
      .click()

    cy.get('[data-test="Prince Of Gluttons"]')

    cy.get('[data-test="modal__btn-close"]').click()
    cy.get('[data-test="backlink"]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]')
      .find('[data-test=btn-delete]')
      .click()
    cy.get('[data-test="YES"]').click()
  })

  it('should procude completely different results when seed is changed', () => {
    cy.get('[data-test="Test: Base Expedition"]')
      .get('[data-test=btn-copy]')
      .click()
    cy.get('[data-test=input-seed]')
      .find('input')
      .type('TEST-DIFFERENT')
    cy.get('[data-test=btn-expedition-create]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]').click()
    cy.get('[data-test=btn-battle]')
      .eq(0)
      .click()

    cy.get('[data-test="Maggoth"]')

    cy.get('[data-test="btn-start-battle"]').click()

    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p')
      .contains('Frozen Magmite')
      .click()
    cy.get('p')
      .contains('Molten Hammer')
      .scrollIntoView()
      .click()
    cy.get('p')
      .contains('Amplify Vision')
      .click()

    cy.get('[data-test="btn-unlock-next-battle"]').click()

    cy.get('[data-test=btn-battle]')
      .eq(1)
      .click()

    cy.get('[data-test="Blight Lord"]')

    cy.get('[data-test="modal__btn-close"]').click()
    cy.get('[data-test="backlink"]').click()

    cy.get('[data-test="Test: Base Expedition Copy"]')
      .find('[data-test=btn-delete]')
      .click()
    cy.get('[data-test="YES"]').click()
  })
})
