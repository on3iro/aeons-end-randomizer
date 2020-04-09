import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = Readonly<{
  Tier1: ReadonlyArray<{ id: Readonly<string> }>
  Tier2: ReadonlyArray<{ id: Readonly<string> }>
  Tier3: ReadonlyArray<{ id: Readonly<string> }>
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
