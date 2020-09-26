import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { migrate } from '../migrations'
import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const migrateAfterFetch = (
  state: State,
  action: ReturnType<typeof actions.fetchFromDBSuccessful>
) => {
  const newState = action.payload as State
  return loop(
    state,
    Cmd.run(migrate, {
      args: [
        Cmd.getState,
        {
          newState,
        },
      ],
      successActionCreator: actions.migrateToSettingsSnapshotSuccessful,
    })
  )
}

export const migrateAfterFetchSuccess = (
  state: State,
  action: ReturnType<typeof actions.migrateToSettingsSnapshotSuccessful>
) => {
  const newState: State = action.payload || state
  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [EXPEDITIONS_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
