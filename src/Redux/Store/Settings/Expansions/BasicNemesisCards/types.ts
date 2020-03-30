import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'types'

import { actions } from './actions'

export type State = Readonly<{
  basicNemesisCards: SelectedBasicNemesisCards
  basicNemesisCardIds: string[]
}>

export enum ActionTypes {
  TOGGLE_CARD = 'Settings/Expansions/BasicNemesisCards/TOGGLE_CARD',
  SET_TO_DB = 'Settings/Expansions/BasicNemesisCards/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/BasicNemesisCards/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/BasicNemesisCards/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/BasicNemesisCards/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/BasicNemesisCards/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/BasicNemesisCards/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedBasicNemesisCards = {
  [key: string]: types.BasicNemesisCard & { selected: boolean }
}

export type BasicNemesisCardsStateSlice = {
  Settings: {
    Expansions: {
      BasicNemesisCards: {
        basicNemesisCards: SelectedBasicNemesisCards
      }
    }
  }
}

export type BasicNemesisCardIdsStateSlice = {
  Settings: {
    Expansions: {
      BasicNemesisCards: {
        basicNemesisCardIds: string[]
      }
    }
  }
}
