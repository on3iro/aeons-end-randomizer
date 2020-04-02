import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb, get as getFromDb } from 'idb-keyval'

import { State } from 'Redux/Store/Settings/Expansions/Treasures/types'
import { TREASURES_DB_KEY } from 'Redux/Store/Settings/Expansions/Treasures/constants'
import { actions } from 'Redux/Store/Settings/Expansions/Treasures/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Settings/Expansions/Treasures/reducer'

const mockTreasuresState: State = {
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
}

describe('Settings | Expansions | Treasures | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle NOOP')

  it('should handle TOGGLE_CARD', () => {
    const expected = {
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
          selected: false,
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
    }

    const selectedCardsToSave = ['MistsAmethystParagon']

    const result = Reducer(
      mockTreasuresState,
      actions.toggleCard('ShimmeringCloakOfTheMagus')
    )

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(expected)
    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [TREASURES_DB_KEY, selectedCardsToSave],
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
        args: [TREASURES_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      mockTreasuresState,
      actions.fetchFromDBSuccessful([
        'MistsAmethystParagon',
        'ShimmeringCloakOfTheMagus',
      ])
    )

    expect(getModel(result)).toEqual(mockTreasuresState)
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
