import {
  TreasuresStateSlice,
  TreasureIdsStateSlice,
} from 'Redux/Store/Settings/Expansions/Treasures/types'

import { selectors } from 'Redux/Store/Settings/Expansions/Treasures/selectors'

const mockTreasuresState: TreasuresStateSlice & TreasureIdsStateSlice = {
  Settings: {
    Expansions: {
      Treasures: {
        treasures: {
          MistsAmethystParagon: {
            id: 'MistsAmethystParagon',
            name: "Mist's Amethyst Paragon",
            expansion: 'IW',
            level: 1,
            subtype: 'Gem',
            effect:
              '\n        <p>\n        Gain 1 <span class="aether">&AElig;</span>.<br/>\n        Any ally may prep a spell in hand to their opened or closed breach(es).\n        </p>\n      ',
            selected: true,
          },
          MalastarsImmolate: {
            id: 'MalastarsImmolate',
            name: "Malastar's Immolate",
            expansion: 'IW',
            level: 1,
            subtype: 'Spell',
            effect:
              '\n        <p>\n        While prepped, when you suffer damage gain 1 charge.<br/>\n        <b>Cast:</b> Deal 1 damage.\n        </p>\n      ',
            selected: false,
          },
          ShimmeringCloakOfTheMagus: {
            id: 'ShimmeringCloakOfTheMagus',
            name: 'Shimmering Cloak Of The Magus',
            expansion: 'NA',
            level: 2,
            effect:
              '\n      <p>\n      After a player finishes resolving their ability, that player deals 2 damage.\n      </p>\n      ',
            selected: true,
          },
          SeersBracer: {
            id: 'SeersBracer',
            name: "Seer's Bracer",
            expansion: 'SD',
            level: 3,
            effect:
              '\n      <p>\n      Once per turn during your main phase when you gain a charge, any ally \n      draws a card.\n      </p>\n      ',
            selected: false,
          },
        },
        treasureIds: [
          'MistsAmethystParagon',
          'MalastarsImmolate',
          'ShimmeringCloakOfTheMagus',
          'SeersBracer',
        ],
      },
    },
  },
}

describe('Settings | Expansions | Treasures | selectors', () => {
  test('getTreasureIdsByExpansionId()', () => {
    const expected = ['MistsAmethystParagon', 'MalastarsImmolate']

    const result = selectors.getTreasureIdsByExpansionId(
      mockTreasuresState,
      'IW'
    )

    expect(result).toEqual(expected)
  })

  test('getTreasuresByExpansionId()', () => {
    const expected = [
      {
        id: 'MistsAmethystParagon',
        name: "Mist's Amethyst Paragon",
        expansion: 'IW',
        level: 1,
        subtype: 'Gem',
        effect:
          '\n        <p>\n        Gain 1 <span class="aether">&AElig;</span>.<br/>\n        Any ally may prep a spell in hand to their opened or closed breach(es).\n        </p>\n      ',
        selected: true,
      },
      {
        id: 'MalastarsImmolate',
        name: "Malastar's Immolate",
        expansion: 'IW',
        level: 1,
        subtype: 'Spell',
        effect:
          '\n        <p>\n        While prepped, when you suffer damage gain 1 charge.<br/>\n        <b>Cast:</b> Deal 1 damage.\n        </p>\n      ',
        selected: false,
      },
    ]

    const result = selectors.getTreasuresByExpansionId(mockTreasuresState, 'IW')

    expect(result).toEqual(expected)
  })

  test('getTreasureList()', () => {
    const expected = [
      {
        id: 'MistsAmethystParagon',
        name: "Mist's Amethyst Paragon",
        expansion: 'IW',
        level: 1,
        subtype: 'Gem',
        effect:
          '\n        <p>\n        Gain 1 <span class="aether">&AElig;</span>.<br/>\n        Any ally may prep a spell in hand to their opened or closed breach(es).\n        </p>\n      ',
        selected: true,
      },
      {
        id: 'MalastarsImmolate',
        name: "Malastar's Immolate",
        expansion: 'IW',
        level: 1,
        subtype: 'Spell',
        effect:
          '\n        <p>\n        While prepped, when you suffer damage gain 1 charge.<br/>\n        <b>Cast:</b> Deal 1 damage.\n        </p>\n      ',
        selected: false,
      },
      {
        id: 'ShimmeringCloakOfTheMagus',
        name: 'Shimmering Cloak Of The Magus',
        expansion: 'NA',
        level: 2,
        effect:
          '\n      <p>\n      After a player finishes resolving their ability, that player deals 2 damage.\n      </p>\n      ',
        selected: true,
      },
      {
        id: 'SeersBracer',
        name: "Seer's Bracer",
        expansion: 'SD',
        level: 3,
        effect:
          '\n      <p>\n      Once per turn during your main phase when you gain a charge, any ally \n      draws a card.\n      </p>\n      ',
        selected: false,
      },
    ]

    const result = selectors.getTreasureList(mockTreasuresState)

    expect(result).toEqual(expected)
  })

  test('getTreasureListFromIdList()', () => {
    const expected = [
      {
        id: 'ShimmeringCloakOfTheMagus',
        name: 'Shimmering Cloak Of The Magus',
        expansion: 'NA',
        level: 2,
        effect:
          '\n      <p>\n      After a player finishes resolving their ability, that player deals 2 damage.\n      </p>\n      ',
        selected: true,
      },
      {
        id: 'SeersBracer',
        name: "Seer's Bracer",
        expansion: 'SD',
        level: 3,
        effect:
          '\n      <p>\n      Once per turn during your main phase when you gain a charge, any ally \n      draws a card.\n      </p>\n      ',
        selected: false,
      },
    ]

    const result = selectors.getTreasureListFromIdList(mockTreasuresState, {
      treasureIds: ['ShimmeringCloakOfTheMagus', 'SeersBracer'],
    })

    expect(result).toEqual(expected)
  })

  test('getSelectedTreasureIdsByTreasureLevel()', () => {
    const expected = ['MistsAmethystParagon']

    const result = selectors.getSelectedTreasureIdsByTreasureLevel(
      mockTreasuresState,
      { treasureLevel: 1 }
    )

    expect(result).toEqual(expected)
  })

  test('getSelectedTreasureListByLevel()', () => {
    const expected = [
      {
        id: 'MistsAmethystParagon',
        name: "Mist's Amethyst Paragon",
        expansion: 'IW',
        level: 1,
        subtype: 'Gem',
        effect:
          '\n        <p>\n        Gain 1 <span class="aether">&AElig;</span>.<br/>\n        Any ally may prep a spell in hand to their opened or closed breach(es).\n        </p>\n      ',
        selected: true,
      },
    ]

    const result = selectors.getSelectedTreasureListByLevel(
      mockTreasuresState,
      { treasureLevel: 1 }
    )

    expect(result).toEqual(expected)
  })
})
