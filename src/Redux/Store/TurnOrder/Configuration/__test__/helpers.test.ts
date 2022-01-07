import { Cmd, getCmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import AERData from 'aer-data/src/index'

import { State } from '../types'
import { TURNORDER_CONFIG_DB_KEY } from '../constants'
import { actions } from '../actions'

import {
  newStateWithDBWrite,
  adjustSetup,
} from 'Redux/Store/TurnOrder/Configuration/helpers'

const mockConfiguration: State = {
  Mode: 'Blitz',
  SelectedPlayerCount: AERData.turnordersetups['fourPlayers'],
  SelectedSetup: AERData.turnordersetups['fourPlayers'].variations['default'],
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
    AERData.turnordersetups.twoPlayers.variations['default']

  it('should return the default variation of tocs for 2 players', () => {
    const expected = {
      id: 'default',
      name: 'Default',
      turnOrderCards: [
        AERData.turnordercards['player1-1'],
        AERData.turnordercards['player1-2'],
        AERData.turnordercards['player2-1'],
        AERData.turnordercards['player2-2'],
        AERData.turnordercards['nemesis-1'],
        AERData.turnordercards['nemesis-2'],
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
        AERData.turnordercards['player1-1'],
        AERData.turnordercards['player1-2'],
        AERData.turnordercards['player2-1'],
        AERData.turnordercards['player2-2'],
        AERData.turnordercards['maelstrom'],
        AERData.turnordercards['nemesis-2'],
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
        AERData.turnordercards['player1-1'],
        AERData.turnordercards['player1-2'],
        AERData.turnordercards['player2-1'],
        AERData.turnordercards['player2-2'],
        AERData.turnordercards['blitz'],
        AERData.turnordercards['nemesis-2'],
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
        AERData.turnordercards['player1-1'],
        AERData.turnordercards['player1-2'],
        AERData.turnordercards['player2-1'],
        AERData.turnordercards['player2-2'],
        AERData.turnordercards['blitz'],
        AERData.turnordercards['maelstrom'],
      ],
    }

    const result = adjustSetup('Blitz + Maelstrom', defaultVariation)

    expect(result).toEqual(expected)
  })

  it('should switch the nemesis-1 card with thief of dreams', () => {
    const expected = {
      id: 'default',
      name: 'Default',
      turnOrderCards: [
        AERData.turnordercards['player1-1'],
        AERData.turnordercards['player1-2'],
        AERData.turnordercards['player2-1'],
        AERData.turnordercards['player2-2'],
        AERData.turnordercards['thiefOfDreams'],
        AERData.turnordercards['nemesis-2'],
      ],
    }

    const result = adjustSetup('Thief Of Dreams', defaultVariation)

    expect(result).toEqual(expected)
  })

  it('should switch the nemesis cards with myth and bone', () => {
    const expected = {
      id: 'default',
      name: 'Default',
      turnOrderCards: [
        AERData.turnordercards['player1-1'],
        AERData.turnordercards['player1-2'],
        AERData.turnordercards['player2-1'],
        AERData.turnordercards['player2-2'],
        AERData.turnordercards['myth'],
        AERData.turnordercards['bone'],
      ],
    }

    const result = adjustSetup('Paradox of Myth and Bone', defaultVariation)

    expect(result).toEqual(expected)
  })
})
