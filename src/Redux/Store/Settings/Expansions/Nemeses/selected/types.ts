import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = string[]

export enum ActionTypes {
  TOGGLE = 'Settings/Expansions/Nemeses/TOGGLE',
  SET_TO_DB = 'Settings/Expansions/Nemeses/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/Nemeses/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/Nemeses/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/Nemeses/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/Nemeses/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/Nemeses/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedNemesesStateSlice = {
  Settings: {
    Expansions: {
      Nemeses: {
        selected: string[]
      }
    }
  }
}
