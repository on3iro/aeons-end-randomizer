import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'aer-types/types'

import { actions } from './actions'

export type State = PlayerCount

export enum ActionTypes {
  SET = 'BasicNemesisCards/PlayerCount/SET',
}

export type Action = ActionsUnion<typeof actions>

export type PlayerCount = types.PlayerCount

export type PlayerCountStateSlice = {
  Randomizer: {
    BasicNemesisCards: {
      PlayerCount: PlayerCount
    }
  }
}
