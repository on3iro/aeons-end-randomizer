import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { migrate } from '../migrations'
import { State } from '../types'
import { actions } from '../actions'

import { SUPPLY_DB_KEY } from '../constants'

export const migrateAfterFetch = (
  state: State,
  action: ReturnType<typeof actions.fetchFromDBSuccessful>
) => {
  const newState = action.payload
  return loop(
    state,
    Cmd.run(migrate, {
      args: [
        Cmd.getState,
        {
          newState,
        },
      ],
      successActionCreator: actions.migrationSuccess,
    })
  )
}

export const migrateAfterFetchSuccess = (
  state: State,
  action: ReturnType<typeof actions.migrationSuccess>
) => {
  const newState = action.payload || state
  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [SUPPLY_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
