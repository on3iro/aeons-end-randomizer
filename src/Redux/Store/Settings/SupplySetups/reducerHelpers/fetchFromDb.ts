import { loop, Cmd } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import { State } from '../types'
import { SUPPLY_DB_KEY } from '../constants'
import { actions } from '../actions'

export const fetchFromDb = (state: State) => {
  return loop(
    state,
    Cmd.run(getFromDb, {
      args: [SUPPLY_DB_KEY],
      successActionCreator: actions.fetchFromDBSuccessful,
      failActionCreator: actions.fetchFromDBFailed,
    })
  )
}

export const fetchFromDbSuccess = (
  action: ReturnType<typeof actions.fetchFromDBSuccessful>
) => {
  return action.payload
}
