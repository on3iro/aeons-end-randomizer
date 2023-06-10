import { createAction } from '@martin_hotell/rex-tils'

import * as types from 'aer-types/types'

import { ActionTypes } from './types'

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  setMode: (mode: types.Mode) => createAction(ActionTypes.SET_MODE, mode),
  selectPlayerCount: (playerCountId: types.PlayerCountId) =>
    createAction(ActionTypes.SELECT_PLAYER_COUNT, playerCountId),
  selectSetup: (setupId: types.TurnorderSetupVariationId) =>
    createAction(ActionTypes.SELECT_SETUP, setupId),
  setToDB: () => createAction(ActionTypes.SET_TO_DB),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: () => createAction(ActionTypes.SET_TO_DB_FAILURE),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: unknown) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: () => createAction(ActionTypes.FETCH_FROM_DB_FAILURE),
}
