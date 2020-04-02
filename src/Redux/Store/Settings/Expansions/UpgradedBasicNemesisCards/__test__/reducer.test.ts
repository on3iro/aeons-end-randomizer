import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb, get as getFromDb } from 'idb-keyval'

import { State } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards/types'
import { UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards/constants'
import { actions } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards/reducer'

const mockUpgradedBasicNemesisCardsState: State = {
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
      selected: false,
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
      selected: false,
    },
  },
  upgradedBasicNemesisCardIds: [
    'HissingAcid',
    'Wreck',
    'Burialskulk',
    'Mangle',
  ],
}

describe('Settings | Expansions | UpgradedBasicNemesisCards | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle NOOP')

  it('should handle TOGGLE_CARD', () => {
    const expected = {
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
          selected: false,
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
          selected: false,
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
          selected: false,
        },
      },
      upgradedBasicNemesisCardIds: [
        'HissingAcid',
        'Wreck',
        'Burialskulk',
        'Mangle',
      ],
    }

    const selectedCardsToSave = ['HissingAcid']

    const result = Reducer(
      mockUpgradedBasicNemesisCardsState,
      actions.toggleCard('Burialskulk')
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(expected)
    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY, selectedCardsToSave],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB', () => {
    const result = Reducer(initialState, actions.fetchFromDB())

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(initialState)

    expect(cmd).toEqual(
      Cmd.run(getFromDb, {
        args: [UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      mockUpgradedBasicNemesisCardsState,
      actions.fetchFromDBSuccessful(['HissingAcid', 'Burialskulk'])
    )

    expect(getModel(result)).toEqual(mockUpgradedBasicNemesisCardsState)
  })

  it('should handle FETCH_FROM_DB_SUCCESS for undefined state', () => {
    const result = Reducer(
      initialState,
      // @ts-ignore
      actions.fetchFromDBSuccessful(undefined)
    )

    expect(getModel(result)).toEqual(initialState)
  })

  it.todo('should handle FETCH_FROM_DB_FAILURE')
  it.todo('should handle SET_TO_DB')
  it.todo('should handle SET_TO_DB_SUCCESS')
  it.todo('should handle SET_TO_DB_FAILURE')
})
