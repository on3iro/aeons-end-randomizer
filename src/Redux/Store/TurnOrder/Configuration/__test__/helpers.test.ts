import { Cmd, getCmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import config from 'config'

import { State } from '../types'
import { TURNORDER_CONFIG_DB_KEY } from '../constants'
import { actions } from '../actions'

import {
  newStateWithDBWrite,
  adjustSetup,
} from 'Redux/Store/TurnOrder/Configuration/helpers'

const mockConfiguration: State = {
  Mode: 'Blitz',
  SelectedPlayerCount: config.TURNORDERSETUPS['fourPlayers'],
  SelectedSetup: config.TURNORDERSETUPS['fourPlayers'].variations['default'],
}

describe('newStateWithDBWrite()', () => {
  const result = newStateWithDBWrite(mockConfiguration)

  it('should have right cmd', () => {
    const cmd = getCmd(result)

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [TURNORDER_CONFIG_DB_KEY, mockConfiguration],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })
})

describe('adjustSetup()', () => {
  const defaultVariation =
    config.TURNORDERSETUPS.twoPlayers.variations['default']

  it('should return the default variation of tocs for 2 players', () => {
    const expected = {
      id: 'default',
      name: 'Default',
      turnOrderCards: [
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player1-2'],
        config.TURNORDERCARDS['player2-1'],
        config.TURNORDERCARDS['player2-2'],
        config.TURNORDERCARDS['nemesis-1'],
        config.TURNORDERCARDS['nemesis-2'],
      ],
    }

    const result = adjustSetup('Default', defaultVariation)

    expect(result).toEqual(expected)
  })

  it('should switch the nemesis-1 card with maelstrom', () => {
    const expected = {
      id: 'default',
      name: 'Default',
      turnOrderCards: [
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player1-2'],
        config.TURNORDERCARDS['player2-1'],
        config.TURNORDERCARDS['player2-2'],
        config.TURNORDERCARDS['maelstrom'],
        config.TURNORDERCARDS['nemesis-2'],
      ],
    }

    const result = adjustSetup('Maelstrom', defaultVariation)

    expect(result).toEqual(expected)
  })

  it('should switch the nemesis-1 card with blitz', () => {
    const expected = {
      id: 'default',
      name: 'Default',
      turnOrderCards: [
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player1-2'],
        config.TURNORDERCARDS['player2-1'],
        config.TURNORDERCARDS['player2-2'],
        config.TURNORDERCARDS['blitz'],
        config.TURNORDERCARDS['nemesis-2'],
      ],
    }

    const result = adjustSetup('Blitz', defaultVariation)

    expect(result).toEqual(expected)
  })

  it('should switch the nemesis cards with maelstrom and blitz', () => {
    const expected = {
      id: 'default',
      name: 'Default',
      turnOrderCards: [
        config.TURNORDERCARDS['player1-1'],
        config.TURNORDERCARDS['player1-2'],
        config.TURNORDERCARDS['player2-1'],
        config.TURNORDERCARDS['player2-2'],
        config.TURNORDERCARDS['blitz'],
        config.TURNORDERCARDS['maelstrom'],
      ],
    }

    const result = adjustSetup('Blitz + Maelstrom', defaultVariation)

    expect(result).toEqual(expected)
  })
})
