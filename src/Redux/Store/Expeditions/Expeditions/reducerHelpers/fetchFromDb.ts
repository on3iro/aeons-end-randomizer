import { loop, Cmd } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'
import { State, Action } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const fetchFromDB = (state: State, _: Action) => {
  return loop(
    state,
    Cmd.run(getFromDb, {
      args: [EXPEDITIONS_DB_KEY],
      successActionCreator: actions.fetchFromDBSuccessful,
      failActionCreator: actions.fetchFromDBFailed,
    })
  )
}
