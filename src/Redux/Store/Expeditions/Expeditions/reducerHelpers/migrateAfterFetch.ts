import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as sideEffects from '../sideEffects'
import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const migrateAfterFetch = (
  action: ReturnType<typeof actions.fetchFromDBSuccessful>
) => {
  const expeditions = action.payload.expeditionIds.map(
    id => action.payload.expeditions[id]
  )
  const expeditionsToMigrate = expeditions.filter(expedition => {
    return !expedition.settingsSnapshot || !expedition.seed
  })

  if (expeditionsToMigrate.length === 0) {
    return action.payload
  }

  return loop(
    action.payload,
    Cmd.run(sideEffects.migrateToSettingsSnapshot, {
      args: [
        Cmd.getState,
        {
          state: action.payload,
          expeditionsToMigrate,
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
  const newState = action.payload || state
  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [EXPEDITIONS_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
