import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'aer-types'

import { actions } from './actions'

export type State = Readonly<{
  expansions: Expansions
  expansionIds: string[]
}>

export enum ActionTypes {
  TOGGLE_ALL = 'Settings/Expansions/SelectedExpansions/TOGGLE_ALL',
  TOGGLE_EXPANSION = 'Settings/Expansions/SelectedExpansions/TOGGLE_EXPANSION',
  SET_TO_DB = 'Settings/Expansions/SelectedExpansions/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/SelectedExpansions/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/SelectedExpansions/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SelectedExpansions/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SelectedExpansions/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SelectedExpansions/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type Expansions = {
  [key: string]: types.Expansion & { selected: boolean }
}

export type SelectedExpansionsStateSlice = {
  Settings: {
    Expansions: {
      SelectedExpansions: State
    }
  }
}
