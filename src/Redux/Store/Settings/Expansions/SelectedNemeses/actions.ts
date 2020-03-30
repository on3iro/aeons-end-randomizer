import { createAction } from '@martin_hotell/rex-tils'

import { ActionTypes, State } from './types'

export const actions = {
  toggleNemesis: (id: string) => createAction(ActionTypes.TOGGLE_NEMESIS, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (selectedNemeses: string[]) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, selectedNemeses),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}
