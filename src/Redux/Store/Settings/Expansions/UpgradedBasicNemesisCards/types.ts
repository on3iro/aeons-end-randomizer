import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'types'

import { actions } from './actions'

export type State = Readonly<{
  upgradedBasicNemesisCards: SelectedUpgradedBasicNemesisCards
  upgradedBasicNemesisCardIds: string[]
}>

export enum ActionTypes {
  TOGGLE_CARD = 'Settings/Expansions/UpgradedBasicNemesisCards/TOGGLE_CARD',
  SET_TO_DB = 'Settings/Expansions/UpgradedBasicNemesisCards/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/UpgradedBasicNemesisCards/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/UpgradedBasicNemesisCards/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/UpgradedBasicNemesisCards/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/UpgradedBasicNemesisCards/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/UpgradedBasicNemesisCards/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedUpgradedBasicNemesisCards = {
  [key: string]: types.UpgradedBasicNemesisCard & { selected: boolean }
}

export type UpgradedBasicNemesisCardsStateSlice = {
  Settings: {
    Expansions: {
      UpgradedBasicNemesisCards: {
        upgradedBasicNemesisCards: SelectedUpgradedBasicNemesisCards
      }
    }
  }
}

export type UpgradedBasicNemesisCardIdsStateSlice = {
  Settings: {
    Expansions: {
      UpgradedBasicNemesisCards: {
        upgradedBasicNemesisCardIds: string[]
      }
    }
  }
}
