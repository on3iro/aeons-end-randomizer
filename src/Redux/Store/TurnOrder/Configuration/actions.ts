import { createAction } from '@martin_hotell/rex-tils'

import { Mode } from 'types'

import { ActionTypes, State } from './types'

export const actions = {
  noOp: () => createAction('NOOP'),
  setMode: (mode: Mode) => createAction(ActionTypes.SET_MODE, mode),
  selectPlayerCount: (playerCountId: string) =>
    createAction(ActionTypes.SELECT_PLAYER_COUNT, playerCountId),
  selectSetup: (setupId: string) =>
    createAction(ActionTypes.SELECT_SETUP, setupId),
  setToDB: () => createAction(ActionTypes.SET_TO_DB),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: () => createAction(ActionTypes.SET_TO_DB_FAILURE),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: State) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: () => createAction(ActionTypes.FETCH_FROM_DB_FAILURE),
}
