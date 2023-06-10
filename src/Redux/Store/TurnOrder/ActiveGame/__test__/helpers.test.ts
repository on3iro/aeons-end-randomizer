import { Cmd, getCmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import AERData from 'aer-data/src/index'

import { TURNORDER_GAME_DB_KEY } from 'Redux/Store/TurnOrder/ActiveGame/constants'
import { actions } from 'Redux/Store/TurnOrder/ActiveGame/actions'

import { newStateWithDBWrite } from 'Redux/Store/TurnOrder/ActiveGame/helpers'

const mockGameState = {
  deck: [
    AERData.turnordercards['player1-1'],
    AERData.turnordercards['player4-1'],
    AERData.turnordercards['player2-1'],
    AERData.turnordercards['nemesis-2'],
  ],
  discard: [
    AERData.turnordercards['player3-1'],
    AERData.turnordercards['nemesis-1'],
  ],
  started: true,
  round: 0,
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
