import {
  UpgradedBasicNemesisCardsStateSlice,
  UpgradedBasicNemesisCardIdsStateSlice,
} from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards/types'

import { selectors } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards/selectors'

const mockUpgradedBasicNemesisCardsState: UpgradedBasicNemesisCardsStateSlice &
  UpgradedBasicNemesisCardIdsStateSlice = {
  Settings: {
    Expansions: {
      UpgradedBasicNemesisCards: {
        upgradedBasicNemesisCards: {
          HissingAcid: {
            id: 'HissingAcid',
            name: 'Hissing Acid',
            expansion: 'NA',
            tier: 1,
            type: 'Power',
            power: 3,
            effect:
              '\n      <p>\n        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />\n        <br /> \n        <b>Power 3:</b> Reveal the top card of the turn order deck. If it\'s a player turn order card, Unleash three times. Otherwise, any player suffers 5 damage.\n      </p>\n    ',
            upgraded: true,
            selected: true,
          },
          Wreck: {
            id: 'Wreck',
            name: 'Wreck',
            expansion: 'NA',
            tier: 1,
            type: 'Attack',
            effect:
              '\n      <p>\n        Unleash twice. Gravehold suffers 1 damage.\n      </p>\n    ',
            upgraded: true,
            selected: true,
          },
          Burialskulk: {
            id: 'Burialskulk',
            name: 'Burialskulk',
            expansion: 'NA',
            tier: 3,
            type: 'Minion',
            hp: 18,
            effect:
              '\n      <p>\n        <b>Persistent:</b> Unleash twice.\t\n      </p>\n    ',
            upgraded: true,
            selected: true,
          },
          Mangle: {
            id: 'Mangle',
            name: 'Mangle',
            expansion: 'TA',
            tier: 2,
            type: 'Attack',
            effect:
              '\n      <p>\n        The player with the most charges loses 3 charges and suffers 3 damage. A different player discards three cards in hand.\n      </p>\n    ',
            upgraded: true,
            selected: true,
          },
        },
        upgradedBasicNemesisCardIds: [
          'HissingAcid',
          'Wreck',
          'Burialskulk',
          'Mangle',
        ],
      },
    },
  },
}

describe('Settings | Expansions | UpgradedBasicNemesisCards | selectors', () => {
  test('getUpgradedBasicNemesisCardIdsByExpansionId()', () => {
    const expected = ['Mangle']

    const result = selectors.getUpgradedBasicNemesisCardIdsByExpansionId(
      mockUpgradedBasicNemesisCardsState,
      'TA'
    )

    expect(result).toEqual(expected)
  })

  test('getUpgradedBasicNemesisCardsByExpansionId()', () => {
    const expected = [
      {
        id: 'Mangle',
        name: 'Mangle',
        expansion: 'TA',
        tier: 2,
        type: 'Attack',
        effect:
          '\n      <p>\n        The player with the most charges loses 3 charges and suffers 3 damage. A different player discards three cards in hand.\n      </p>\n    ',
        upgraded: true,
        selected: true,
      },
    ]

    const result = selectors.getUpgradedBasicNemesisCardsByExpansionId(
      mockUpgradedBasicNemesisCardsState,
      'TA'
    )

    expect(result).toEqual(expected)
  })

  test('getUpgradedBasicNemesisCardList()', () => {
    const expected = [
      {
        id: 'HissingAcid',
        name: 'Hissing Acid',
        expansion: 'NA',
        tier: 1,
        type: 'Power',
        power: 3,
        effect:
          '\n      <p>\n        <b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br />\n        <br /> \n        <b>Power 3:</b> Reveal the top card of the turn order deck. If it\'s a player turn order card, Unleash three times. Otherwise, any player suffers 5 damage.\n      </p>\n    ',
        upgraded: true,
        selected: true,
      },
      {
        id: 'Wreck',
        name: 'Wreck',
        expansion: 'NA',
        tier: 1,
        type: 'Attack',
        effect:
          '\n      <p>\n        Unleash twice. Gravehold suffers 1 damage.\n      </p>\n    ',
        upgraded: true,
        selected: true,
      },
      {
        id: 'Burialskulk',
        name: 'Burialskulk',
        expansion: 'NA',
        tier: 3,
        type: 'Minion',
        hp: 18,
        effect:
          '\n      <p>\n        <b>Persistent:</b> Unleash twice.\t\n      </p>\n    ',
        upgraded: true,
        selected: true,
      },
      {
        id: 'Mangle',
        name: 'Mangle',
        expansion: 'TA',
        tier: 2,
        type: 'Attack',
        effect:
          '\n      <p>\n        The player with the most charges loses 3 charges and suffers 3 damage. A different player discards three cards in hand.\n      </p>\n    ',
        upgraded: true,
        selected: true,
      },
    ]

    const result = selectors.getUpgradedBasicNemesisCardList(
      mockUpgradedBasicNemesisCardsState
    )

    expect(result).toEqual(expected)
  })
})
