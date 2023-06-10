import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = Readonly<{
  Tier1: ReadonlyArray<Readonly<{ id: string }>>
  Tier2: ReadonlyArray<Readonly<{ id: string }>>
  Tier3: ReadonlyArray<Readonly<{ id: string }>>
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
