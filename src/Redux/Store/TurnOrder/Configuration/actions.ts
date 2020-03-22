import { createAction } from '@martin_hotell/rex-tils'

import * as types from 'types'

import { ActionTypes, State, PlayerCountId } from './types'

export const actions = {
  noOp: () => createAction('NOOP'),
  setMode: (mode: types.Mode) => createAction(ActionTypes.SET_MODE, mode),
  selectPlayerCount: (playerCountId: PlayerCountId) =>
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
