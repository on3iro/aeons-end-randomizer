import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { TURNORDER_GAME_DB_KEY } from './constants'
import { State } from './types'
import { actions } from './actions'

const newStateWithDBWrite = (newState: State) => {
  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [TURNORDER_GAME_DB_KEY, newState],
      successActionCreator: actions.setTurnOrderToDbSuccess,
      failActionCreator: actions.setTurnOrderToDbFailure,
    })
  )
}

export { newStateWithDBWrite }
