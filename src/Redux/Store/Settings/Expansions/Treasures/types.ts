import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'types'

import { actions } from './actions'

export type State = Readonly<{
  treasures: SelectedTreasures
  treasureIds: string[]
}>

export enum ActionTypes {
  TOGGLE_CARD = 'Settings/Expansions/Treasures/TOGGLE_CARD',
  SET_TO_DB = 'Settings/Expansions/Treasures/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/Treasures/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/Treasures/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/Treasures/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/Treasures/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/Treasures/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedTreasures = {
  [key: string]: types.Treasure & { selected: boolean }
}

export type TreasuresStateSlice = {
  Settings: {
    Expansions: {
      Treasures: {
        treasures: SelectedTreasures
      }
    }
  }
}

export type TreasureIdsStateSlice = {
  Settings: {
    Expansions: {
      Treasures: {
        treasureIds: string[]
      }
    }
  }
}
