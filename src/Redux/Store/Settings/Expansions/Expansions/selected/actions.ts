import { createAction } from '@martin_hotell/rex-tils'

import { ActionTypes, State } from './types'

export const actions = {
  noOp: () => createAction('NOOP'),
  toggleExpansion: (id: string) =>
    createAction(ActionTypes.TOGGLE_EXPANSION, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (expansionIds: string[]) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, expansionIds),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}
