import { ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'types'

import { actions } from './actions'

export type State = Readonly<{
  Tier1: ReadonlyArray<types.BasicNemesisCard>
  Tier2: ReadonlyArray<types.BasicNemesisCard>
  Tier3: ReadonlyArray<types.BasicNemesisCard>
  recoverySeed?: string
}>

export enum ActionTypes {
  CREATE = 'BasicNemesisCards/RandomCards/CREATE',
}

export type Action = ActionsUnion<typeof actions>

export type RandomCardsStateSlice = {
  Randomizer: {
    BasicNemesisCards: {
      RandomCards: State
    }
  }
}
