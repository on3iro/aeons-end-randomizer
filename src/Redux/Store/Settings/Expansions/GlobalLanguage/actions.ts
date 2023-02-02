import { createAction } from '@martin_hotell/rex-tils'

import { ActionTypes, State } from './types'
import { GlobalLanguageKey } from '../types'

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  select: (lang: GlobalLanguageKey) =>
    createAction(ActionTypes.SELECT, { lang }),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (language: unknown) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, language),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}
