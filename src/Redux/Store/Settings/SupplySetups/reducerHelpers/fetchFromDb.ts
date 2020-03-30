import { loop, Cmd } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import { State } from '../types'
import { SUPPLY_DB_KEY } from '../constants'
import { migrate } from '../helpers'
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
  // Migration from 1.6 to 2.0.0
  const newState = migrate(action.payload)

  return newState
}
