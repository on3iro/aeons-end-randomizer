import { combineReducers } from 'redux-loop'

import * as Expansions from './Expansions'
import * as SupplySetups from './SupplySetups'

export type State = {
  Expansions: Expansions.State
  SupplySetups: SupplySetups.State
}

export type Action = Expansions.Action | SupplySetups.Action

export const initialState = {
  Expansions: Expansions.initialState,
  SupplySetups: SupplySetups.initialState,
}

export const Reducer = combineReducers<State, Action>({
  Expansions: Expansions.Reducer,
  SupplySetups: SupplySetups.Reducer,
})
