import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'types'

import { actions } from './actions'

export type State = Readonly<{
  nemeses: Nemeses
  nemesisIds: string[]
}>

export enum ActionTypes {
  TOGGLE_NEMESIS = 'Settings/Expansions/SelectedNemeses/TOGGLE_NEMESIS',
  SET_TO_DB = 'Settings/Expansions/SelectedNemeses/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/SelectedNemeses/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/SelectedNemeses/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SelectedNemeses/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SelectedNemeses/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SelectedNemeses/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type Nemeses = {
  [key: string]: types.Nemesis & { selected: boolean }
}

export type SelectedNemesesStateSlice = {
  Settings: {
    Expansions: {
      SelectedNemeses: State
    }
  }
}

export type SelectedNemesesLookupStateSlice = {
  Settings: {
    Expansions: {
      SelectedNemeses: {
        nemeses: Nemeses
      }
    }
  }
}
