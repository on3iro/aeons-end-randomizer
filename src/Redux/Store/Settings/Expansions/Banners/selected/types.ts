import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = string[]

export enum ActionTypes {
  TOGGLE_BANNER = 'Settings/Expansions/Banners/TOGGLE_BANNER',
  SET_TO_DB = 'Settings/Expansions/Banners/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/Banners/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/Banners/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/Banners/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/Banners/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/Banners/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedBannersStateSlice = {
  Settings: {
    Expansions: {
      Banners: {
        selected: string[]
      }
    }
  }
}
