import * as types from 'types'

import { SelectedCardsStateSlice } from 'Redux/Store/Settings/Expansions/SelectedCards/types'

import { selectors } from 'Redux/Store/Settings/Expansions/SelectedCards/selectors'

const mockSelectedCardsState: SelectedCardsStateSlice = {
  Settings: {
    Expansions: {
      SelectedCards: {
        cards: {
          DiamondCluster: {
            type: 'Gem',
            expansion: 'AE',
            name: 'Diamond Cluster',
            id: 'DiamondCluster',
            cost: 4,
            effect:
              '\n        <p>\n          Gain 2 <span class="aether">&AElig;</span>.<br/>\n          If this is the second time you have played Diamond Cluster this turn \n          gain an additional 2 <span class="aether">&AElig;</span>.\n        </p>\n      ',
            keywords: [],
            selected: true,
          },
          ChaosArc: {
            type: 'Spell',
            expansion: 'AE',
            name: 'Chaos Arc',
            id: 'ChaosArc',
            cost: 6,
            effect:
              '\n      <p>\n      <b>Cast:</b> Deal 3 damage.<br/>\n      Deal 2 additional damage for each prepped spell in an adjacent breach.\n        </p>\n        ',
            keywords: [],
            selected: false,
          },
          SoulCords: {
            type: 'Relic',
            expansion: 'BS',
            name: 'Soul Cords',
            id: 'SoulCords',
            cost: 5,
            effect:
              '\n      <p>\n      Any player gains 1 pulse token.<br/>\n      Each player with 2 or more pulse tokens gains 1 charge.\n      </p>\n      ',
            keywords: ['pulse'],
            selected: true,
          },
        },
        cardIds: ['DiamondCluster', 'ChaosArc', 'SoulCords'],
      },
    },
  },
}

describe('Settings | Expansions | SelectedCards | selectors', () => {
  test('getCardById()', () => {
    const expected = {
      type: 'Relic',
      expansion: 'BS',
      name: 'Soul Cords',
      id: 'SoulCords',
      cost: 5,
      effect:
        '\n      <p>\n      Any player gains 1 pulse token.<br/>\n      Each player with 2 or more pulse tokens gains 1 charge.\n      </p>\n      ',
      keywords: ['pulse'],
      selected: true,
    }

    const result = selectors.getCardById(mockSelectedCardsState, {
      id: 'SoulCords',
    })

    expect(result).toEqual(expected)
  })

  test('getGemsByExpansionId()', () => {
    const expected = [
      {
        type: 'Gem',
        expansion: 'AE',
        name: 'Diamond Cluster',
        id: 'DiamondCluster',
        cost: 4,
        effect:
          '\n        <p>\n          Gain 2 <span class="aether">&AElig;</span>.<br/>\n          If this is the second time you have played Diamond Cluster this turn \n          gain an additional 2 <span class="aether">&AElig;</span>.\n        </p>\n      ',
        keywords: [],
        selected: true,
      },
    ]

    const result = selectors.getGemsByExpansionId(mockSelectedCardsState, 'AE')

    expect(result).toEqual(expected)
  })

  test('getRelicsByExpansionId()', () => {
    const expected = [] as types.ICard[]

    const result = selectors.getRelicsByExpansionId(
      mockSelectedCardsState,
      'AE'
    )

    expect(result).toEqual(expected)
  })

  test('getSpellsByExpansionId()', () => {
    const expected = [
      {
        type: 'Spell',
        expansion: 'AE',
        name: 'Chaos Arc',
        id: 'ChaosArc',
        cost: 6,
        effect:
          '\n      <p>\n      <b>Cast:</b> Deal 3 damage.<br/>\n      Deal 2 additional damage for each prepped spell in an adjacent breach.\n        </p>\n        ',
        keywords: [],
        selected: false,
      },
    ]

    const result = selectors.getSpellsByExpansionId(
      mockSelectedCardsState,
      'AE'
    )

    expect(result).toEqual(expected)
  })

  test('getSelectedCards()', () => {
    const expected = [
      {
        type: 'Gem',
        expansion: 'AE',
        name: 'Diamond Cluster',
        id: 'DiamondCluster',
        cost: 4,
        effect:
          '\n        <p>\n          Gain 2 <span class="aether">&AElig;</span>.<br/>\n          If this is the second time you have played Diamond Cluster this turn \n          gain an additional 2 <span class="aether">&AElig;</span>.\n        </p>\n      ',
        keywords: [],
        selected: true,
      },
      {
        type: 'Relic',
        expansion: 'BS',
        name: 'Soul Cords',
        id: 'SoulCords',
        cost: 5,
        effect:
          '\n      <p>\n      Any player gains 1 pulse token.<br/>\n      Each player with 2 or more pulse tokens gains 1 charge.\n      </p>\n      ',
        keywords: ['pulse'],
        selected: true,
      },
    ]

    const result = selectors.getSelectedCards(mockSelectedCardsState)

    expect(result).toEqual(expected)
  })
})
