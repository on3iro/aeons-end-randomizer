import {
  BasicNemesisCardsStateSlice,
  BasicNemesisCardIdsStateSlice,
} from 'Redux/Store/Settings/Expansions/BasicNemesisCards/types'

import { selectors } from 'Redux/Store/Settings/Expansions/BasicNemesisCards/selectors'

const mockBasicNemesisCardsState: BasicNemesisCardsStateSlice &
  BasicNemesisCardIdsStateSlice = {
  Settings: {
    Expansions: {
      BasicNemesisCards: {
        basicNemesisCards: {
          AgonyField: {
            id: 'AgonyField',
            expansion: 'AE',
            tier: 1,
            type: 'Power',
            name: 'Agony Field',
            power: 2,
            effect:
              '\n      <p>\n        <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />\n        <br />\n        <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.\n      </p>\n    ',
            selected: true,
          },
          Venomite: {
            id: 'Venomite',
            expansion: 'AE',
            tier: 2,
            type: 'Minion',
            name: 'Venomite',
            hp: 9,
            effect:
              '\n      <p>\n        <b>Persistent:</b> The player with the lowest life suffers 2 damage. \n        <span class="or">OR</span>\n        Any player discards a prepped spell that costs 3 <span class="aether">&AElig;</span> or more.\n      </p>\n    ',
            selected: true,
          },
          BladeStorm: {
            id: 'BladeStorm',
            expansion: 'BS',
            tier: 1,
            type: 'Attack',
            name: 'Blade Storm',
            effect:
              '\n      <p>\n        Gravehold suffers 3 damage. The player with the fewest opened breaches suffers 2 damage.\n      </p>\n    ',
            selected: false,
          },
        },
        basicNemesisCardIds: ['AgonyField', 'Venomite', 'BladeStorm'],
      },
    },
  },
}

describe('Settings | Expansions | BasicNemesisCards | selectors', () => {
  test('getBasicNemesisCardById()', () => {
    const expected = {
      id: 'AgonyField',
      expansion: 'AE',
      tier: 1,
      type: 'Power',
      name: 'Agony Field',
      power: 2,
      effect:
        '\n      <p>\n        <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />\n        <br />\n        <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.\n      </p>\n    ',
      selected: true,
    }

    const result = selectors.getBasicNemesisCardById(
      mockBasicNemesisCardsState,
      { id: 'AgonyField' }
    )

    expect(result).toEqual(expected)
  })

  test('getBasicNemesisCardIdsByExpansionId()', () => {
    const expected = ['AgonyField', 'Venomite']

    const result = selectors.getBasicNemesisCardIdsByExpansionId(
      mockBasicNemesisCardsState,
      'AE'
    )

    expect(result).toEqual(expected)
  })

  test('getBasicNemesisCardsByExpansionId()', () => {
    const expected = [
      {
        id: 'AgonyField',
        expansion: 'AE',
        tier: 1,
        type: 'Power',
        name: 'Agony Field',
        power: 2,
        effect:
          '\n      <p>\n        <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />\n        <br />\n        <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.\n      </p>\n    ',
        selected: true,
      },
      {
        id: 'Venomite',
        expansion: 'AE',
        tier: 2,
        type: 'Minion',
        name: 'Venomite',
        hp: 9,
        effect:
          '\n      <p>\n        <b>Persistent:</b> The player with the lowest life suffers 2 damage. \n        <span class="or">OR</span>\n        Any player discards a prepped spell that costs 3 <span class="aether">&AElig;</span> or more.\n      </p>\n    ',
        selected: true,
      },
    ]

    const result = selectors.getBasicNemesisCardsByExpansionId(
      mockBasicNemesisCardsState,
      'AE'
    )

    expect(result).toEqual(expected)
  })

  test('getBasicNemesisCardIdsByTier()', () => {
    const expected = ['AgonyField', 'BladeStorm']

    const result = selectors.getBasicNemesisCardIdsByTier(
      mockBasicNemesisCardsState,
      { tier: 1 }
    )

    expect(result).toEqual(expected)
  })

  test('getBasicNemesisCardListByTier()', () => {
    const expected = [
      {
        id: 'AgonyField',
        expansion: 'AE',
        tier: 1,
        type: 'Power',
        name: 'Agony Field',
        power: 2,
        effect:
          '\n      <p>\n        <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />\n        <br />\n        <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.\n      </p>\n    ',
        selected: true,
      },
      {
        id: 'BladeStorm',
        expansion: 'BS',
        tier: 1,
        type: 'Attack',
        name: 'Blade Storm',
        effect:
          '\n      <p>\n        Gravehold suffers 3 damage. The player with the fewest opened breaches suffers 2 damage.\n      </p>\n    ',
        selected: false,
      },
    ]

    const result = selectors.getBasicNemesisCardListByTier(
      mockBasicNemesisCardsState,
      { tier: 1 }
    )

    expect(result).toEqual(expected)
  })

  test('getBasicNemesisCardList()', () => {
    const expected = [
      {
        id: 'AgonyField',
        expansion: 'AE',
        tier: 1,
        type: 'Power',
        name: 'Agony Field',
        power: 2,
        effect:
          '\n      <p>\n        <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />\n        <br />\n        <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.\n      </p>\n    ',
        selected: true,
      },
      {
        id: 'Venomite',
        expansion: 'AE',
        tier: 2,
        type: 'Minion',
        name: 'Venomite',
        hp: 9,
        effect:
          '\n      <p>\n        <b>Persistent:</b> The player with the lowest life suffers 2 damage. \n        <span class="or">OR</span>\n        Any player discards a prepped spell that costs 3 <span class="aether">&AElig;</span> or more.\n      </p>\n    ',
        selected: true,
      },
      {
        id: 'BladeStorm',
        expansion: 'BS',
        tier: 1,
        type: 'Attack',
        name: 'Blade Storm',
        effect:
          '\n      <p>\n        Gravehold suffers 3 damage. The player with the fewest opened breaches suffers 2 damage.\n      </p>\n    ',
        selected: false,
      },
    ]

    const result = selectors.getBasicNemesisCardList(mockBasicNemesisCardsState)

    expect(result).toEqual(expected)
  })

  test('getSelectedBasicNemesisCards()', () => {
    const expected = [
      {
        id: 'AgonyField',
        expansion: 'AE',
        tier: 1,
        type: 'Power',
        name: 'Agony Field',
        power: 2,
        effect:
          '\n      <p>\n        <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />\n        <br />\n        <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.\n      </p>\n    ',
        selected: true,
      },
      {
        id: 'Venomite',
        expansion: 'AE',
        tier: 2,
        type: 'Minion',
        name: 'Venomite',
        hp: 9,
        effect:
          '\n      <p>\n        <b>Persistent:</b> The player with the lowest life suffers 2 damage. \n        <span class="or">OR</span>\n        Any player discards a prepped spell that costs 3 <span class="aether">&AElig;</span> or more.\n      </p>\n    ',
        selected: true,
      },
    ]

    const result = selectors.getSelectedBasicNemesisCards(
      mockBasicNemesisCardsState
    )

    expect(result).toEqual(expected)
  })

  test('getSelectedBasicNemesisCardIdsByTier()', () => {
    const expected = ['AgonyField']

    const result = selectors.getSelectedBasicNemesisCardIdsByTier(
      mockBasicNemesisCardsState,
      { tier: 1 }
    )

    expect(result).toEqual(expected)
  })

  test('getSelectedBasicNemesisCardListByTier()', () => {
    const expected = [
      {
        id: 'AgonyField',
        expansion: 'AE',
        tier: 1,
        type: 'Power',
        name: 'Agony Field',
        power: 2,
        effect:
          '\n      <p>\n        <b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br />\n        <br />\n        <b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.\n      </p>\n    ',
        selected: true,
      },
    ]

    const result = selectors.getSelectedBasicNemesisCardListByTier(
      mockBasicNemesisCardsState,
      { tier: 1 }
    )

    expect(result).toEqual(expected)
  })
})
