import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = string[]

export enum ActionTypes {
  TOGGLE_FRIEND = 'Settings/Expansions/Friends/TOGGLE_FRIEND',
  SET_TO_DB = 'Settings/Expansions/Friends/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/Friends/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/Friends/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/Friends/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/Friends/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/Friends/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedFriendsStateSlice = {
  Settings: {
    Expansions: {
      Friends: {
        selected: string[]
      }
    }
  }
}
