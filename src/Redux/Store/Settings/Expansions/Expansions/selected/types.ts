import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = string[]

export enum ActionTypes {
  TOGGLE_EXPANSION = 'Settings/Expansions/Expansions/TOGGLE_EXPANSION',
  SET_TO_DB = 'Settings/Expansions/Expansions/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/Expansions/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/Expansions/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/Expansions/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/Expansions/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/Expansions/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedExpansionsStateSlice = {
  Settings: {
    Expansions: {
      Expansions: {
        selected: string[]
      }
    }
  }
}
