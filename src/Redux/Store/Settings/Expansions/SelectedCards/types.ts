import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'types'

import { actions } from './actions'

export type State = Readonly<{
  cards: Cards
  cardIds: string[]
}>

export enum ActionTypes {
  TOGGLE_CARD = 'Settings/Expansions/SelectedCards/TOGGLE_CARD',
  SET_TO_DB = 'Settings/Expansions/SelectedCards/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/SelectedCards/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/SelectedCards/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SelectedCards/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SelectedCards/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SelectedCards/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

type Cards = {
  [key: string]: types.ICard & { selected: boolean }
}

export type SelectedCardsStateSlice = {
  Settings: {
    Expansions: {
      SelectedCards: State
    }
  }
}

export type SelectedCardsLookupStateSlice = {
  Settings: {
    Expansions: {
      SelectedCards: {
        cards: Cards
      }
    }
  }
}
