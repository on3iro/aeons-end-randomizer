import { getModel, getCmd, Cmd } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import config from 'config'

import { State } from 'Redux/Store/TurnOrder/Configuration/types'
import { TURNORDER_CONFIG_DB_KEY } from 'Redux/Store/TurnOrder/Configuration/constants'
import { actions } from 'Redux/Store/TurnOrder/Configuration/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/TurnOrder/Configuration/reducer'

const mockConfiguration: State = {
  Mode: 'Blitz',
  SelectedPlayerCount: config.TURNORDERSETUPS['fourPlayers'],
  SelectedSetup: config.TURNORDERSETUPS['fourPlayers'].variations['default'],
}

describe('TurnOrder | Configuration | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle NOOP')

  it('should handle SET_MODE', () => {
    const expected = {
      Mode: 'Maelstrom',
      SelectedPlayerCount: config.TURNORDERSETUPS['fourPlayers'],
      SelectedSetup:
        config.TURNORDERSETUPS['fourPlayers'].variations['default'],
    }

    const result = Reducer(mockConfiguration, actions.setMode('Maelstrom'))

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle SELECT_PLAYER_COUNT', () => {
    const expected = {
      Mode: 'Blitz',
      SelectedPlayerCount: config.TURNORDERSETUPS['twoPlayers'],
      SelectedSetup: config.TURNORDERSETUPS['twoPlayers'].variations['default'],
    }

    const result = Reducer(
      mockConfiguration,
      actions.selectPlayerCount('twoPlayers')
    )

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle SELECT_PLAYER_COUNT when player count is undefined', () => {
    const expected = {
      Mode: 'Blitz',
      SelectedPlayerCount: config.TURNORDERSETUPS['fourPlayers'],
      SelectedSetup:
        config.TURNORDERSETUPS['fourPlayers'].variations['default'],
    }

    const result = Reducer(
      mockConfiguration,
      // @ts-ignore
      actions.selectPlayerCount('fivePlayers')
    )

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle SELECT_SETUP', () => {
    const expected = {
      Mode: 'Blitz',
      SelectedPlayerCount: config.TURNORDERSETUPS['fourPlayers'],
      SelectedSetup:
        config.TURNORDERSETUPS['fourPlayers'].variations['splitPlayers'],
    }

    const result = Reducer(
      mockConfiguration,
      actions.selectSetup('splitPlayers')
    )

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle SELECT_SETUP when setup does not exist for player count', () => {
    const expected = {
      Mode: 'Blitz',
      SelectedPlayerCount: config.TURNORDERSETUPS['fourPlayers'],
      SelectedSetup:
        config.TURNORDERSETUPS['fourPlayers'].variations['default'],
    }

    const result = Reducer(mockConfiguration, actions.selectSetup('wildToken'))

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle FETCH_FROM_DB', () => {
    const result = Reducer(initialState, actions.fetchFromDB())

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(initialState)

    expect(cmd).toEqual(
      Cmd.run(getFromDb, {
        args: [TURNORDER_CONFIG_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      initialState,
      actions.fetchFromDBSuccessful(mockConfiguration)
    )

    expect(getModel(result)).toEqual(mockConfiguration)
  })

  it('should handle FETCH_FROM_DB_SUCCESS for undefined state', () => {
    const result = Reducer(
      initialState,
      // @ts-ignore
      actions.fetchFromDBSuccessful(undefined)
    )

    expect(getModel(result)).toEqual(initialState)
  })

  it('should handle FETCH_FROM_DB_FAILURE', () => {
    const result = Reducer(mockConfiguration, actions.fetchFromDBFailed())

    expect(getModel(result)).toEqual(mockConfiguration)
  })

  it.todo('should handle SET_TO_DB')
  it.todo('should handle SET_TO_DB_SUCCESS')
  it.todo('should handle SET_TO_DB_FAILURE')
})
