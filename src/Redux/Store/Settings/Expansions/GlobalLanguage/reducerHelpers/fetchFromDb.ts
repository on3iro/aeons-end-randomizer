import { loop, Cmd } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import { State } from '../types'
import { GLOBAL_LANGUAGE_DB_KEY } from '../constants'
import { initialState } from '../reducer'
import { actions } from '../actions'

export const fetchFromDb = (state: State) => {
  return loop(
    state,
    Cmd.run(getFromDb, {
      args: [GLOBAL_LANGUAGE_DB_KEY],
      successActionCreator: actions.fetchFromDBSuccessful,
      failActionCreator: actions.fetchFromDBFailed,
    })
  )
}

export const fetchFromDbSuccess = (
  _: State,
  action: ReturnType<typeof actions.fetchFromDBSuccessful>
) => {
  if (typeof action.payload === 'string' && action.payload !== null) {
    return action.payload as State
  }
  return initialState
}
