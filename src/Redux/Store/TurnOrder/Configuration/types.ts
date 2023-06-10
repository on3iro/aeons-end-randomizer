import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'aer-types/types'

import { actions } from './actions'

export type State = Readonly<{
  Mode: types.Mode
  SelectedPlayerCount: types.ITurnOrderPlayerCount
  SelectedSetup: types.ITurnOrderSetup
}>

export enum ActionTypes {
  SET_MODE = 'TurnOrder/Configuration/SET_MODE',
  SELECT_PLAYER_COUNT = 'TurnOrder/Configuration/SELECT_PLAYER_COUNT',
  SELECT_SETUP = 'TurnOrder/Configuration/SELECT_SETUP',
  SET_TO_DB = 'TurnOrder/Configuration/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'TurnOrder/Configuration/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'TurnOrder/Configuration/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'TurnOrder/Configuration/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'TurnOrder/Configuration/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'TurnOrder/Configuration/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type ModeStateSlice = {
  TurnOrder: {
    Configuration: {
      Mode: types.Mode
    }
  }
}

export type SelectedPlayerCountStateSlice = {
  TurnOrder: {
    Configuration: {
      SelectedPlayerCount: types.ITurnOrderPlayerCount
    }
  }
}

export type SelectedSetupStateSlice = {
  TurnOrder: {
    Configuration: {
      SelectedSetup: types.ITurnOrderSetup
    }
  }
}
