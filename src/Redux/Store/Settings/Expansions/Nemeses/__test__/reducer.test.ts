import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb, get as getFromDb } from 'idb-keyval'

import { State } from 'Redux/Store/Settings/Expansions/SelectedCards/types'
import { CARDS_DB_KEY } from 'Redux/Store/Settings/Expansions/SelectedCards/constants'
import { actions } from 'Redux/Store/Settings/Expansions/SelectedCards/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Settings/Expansions/SelectedCards/reducer'

const mockSelectedCardsState: State = {
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
}

describe('Settings | Expansions | SelectedCards | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it('should handle TOGGLE_CARD', () => {
    const expected = {
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
          selected: false,
        },
      },
      cardIds: ['DiamondCluster', 'ChaosArc', 'SoulCords'],
    }

    const selectedCardsToSave = ['DiamondCluster']

    const result = Reducer(
      mockSelectedCardsState,
      actions.toggleCard('SoulCords')
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(expected)
    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [CARDS_DB_KEY, selectedCardsToSave],
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
        args: [CARDS_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      mockSelectedCardsState,
      actions.fetchFromDBSuccessful(['DiamondCluster', 'SoulCords'])
    )

    expect(getModel(result)).toEqual(mockSelectedCardsState)
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
