import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = PlayerCount

export enum ActionTypes {
  SET = 'BasicNemesisCards/PlayerCount/SET',
}

export type Action = ActionsUnion<typeof actions>

export type PlayerCount = 1 | 2 | 3 | 4
