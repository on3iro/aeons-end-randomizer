import { createAction } from '@martin_hotell/rex-tils'

import { ActionTypes, State } from './types'

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  toggleCard: (id: string) => createAction(ActionTypes.TOGGLE_CARD, id),
  deselectCards: (ids: string[]) => createAction(ActionTypes.DESELECT_CARDS, ids),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (selectedCards: unknown) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, selectedCards),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}
