import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'aer-types'

import { actions } from './actions'

export type State = Readonly<{
  mages: Mages
  mageIds: string[]
}>

export enum ActionTypes {
  TOGGLE_MAGE = 'Settings/Expansions/SelectedMages/TOGGLE_MAGE',
  SET_TO_DB = 'Settings/Expansions/SelectedMages/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/SelectedMages/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/SelectedMages/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SelectedMages/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SelectedMages/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SelectedMages/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type Mages = {
  [key: string]: types.Mage & { selected: boolean }
}

export type SelectedMagesStateSlice = {
  Settings: {
    Expansions: {
      SelectedMages: State
    }
  }
}

export type SelectedMagesLookupStateSlice = {
  Settings: {
    Expansions: {
      SelectedMages: {
        mages: Mages
      }
    }
  }
}
