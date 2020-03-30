import { Cmd, getCmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import config from 'config'

import { TURNORDER_GAME_DB_KEY } from 'Redux/Store/TurnOrder/ActiveGame/constants'
import { actions } from 'Redux/Store/TurnOrder/ActiveGame/actions'

import { newStateWithDBWrite } from 'Redux/Store/TurnOrder/ActiveGame/helpers'

const mockGameState = {
  deck: [
    config.TURNORDERCARDS['player1-1'],
    config.TURNORDERCARDS['player4-1'],
    config.TURNORDERCARDS['player2-1'],
    config.TURNORDERCARDS['nemesis-2'],
  ],
  discard: [
    config.TURNORDERCARDS['player3-1'],
    config.TURNORDERCARDS['nemesis-1'],
  ],
  started: true,
}

describe('newStateWithDBWrite()', () => {
  const result = newStateWithDBWrite(mockGameState)

  it('should have right cmd', () => {
    const cmd = getCmd(result)

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [TURNORDER_GAME_DB_KEY, mockGameState],
        successActionCreator: actions.setTurnOrderToDbSuccess,
        failActionCreator: actions.setTurnOrderToDbFailure,
      })
    )
  })
})
