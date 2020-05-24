import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = string[]

export enum ActionTypes {}

export type Action = ActionsUnion<typeof actions>

export type BasicNemesisCardIdsStateSlice = {
  Settings: {
    Expansions: {
      BasicNemesisCards: {
        ids: string[]
      }
    }
  }
}
