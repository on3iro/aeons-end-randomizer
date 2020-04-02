import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb, get as getFromDb } from 'idb-keyval'

import { State } from 'Redux/Store/Settings/Expansions/BasicNemesisCards/types'
import { BASIC_NEMESIS_CARDS_DB_KEY } from 'Redux/Store/Settings/Expansions/BasicNemesisCards/constants'
import { actions } from 'Redux/Store/Settings/Expansions/BasicNemesisCards/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Settings/Expansions/BasicNemesisCards/reducer'

const mockBasicNemesisCardsState: State = {
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
}

describe('Settings | Expansions | BasicNemesisCards | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle NOOP')

  it('should handle TOGGLE_CARD', () => {
    const expected = {
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
          selected: false,
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
    }

    const selectedCardsToSave = ['AgonyField']

    const result = Reducer(
      mockBasicNemesisCardsState,
      actions.toggleCard('Venomite')
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(expected)
    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [BASIC_NEMESIS_CARDS_DB_KEY, selectedCardsToSave],
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
        args: [BASIC_NEMESIS_CARDS_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      mockBasicNemesisCardsState,
      actions.fetchFromDBSuccessful(['AgonyField', 'Venomite'])
    )

    expect(getModel(result)).toEqual(mockBasicNemesisCardsState)
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
