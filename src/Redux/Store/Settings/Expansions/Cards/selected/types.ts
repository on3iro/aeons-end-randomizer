import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = string[]

export enum ActionTypes {
  TOGGLE_CARD = 'Settings/Expansions/Cards/TOGGLE_CARD',
  DESELECT_CARDS = 'Settings/Expansions/Cards/DESELECT_CARDS',
  SET_TO_DB = 'Settings/Expansions/Cards/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/Cards/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/Cards/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/Cards/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/Cards/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/Cards/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedCardsStateSlice = {
  Settings: {
    Expansions: {
      Cards: {
        selected: string[]
      }
    }
  }
}
