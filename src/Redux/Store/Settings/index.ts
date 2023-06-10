import { combineReducers } from 'redux-loop'

import * as Expansions from './Expansions'
import * as SupplySetups from './SupplySetups'
import * as Accordions from './Accordions'

export type State = {
  Expansions: Expansions.State
  SupplySetups: SupplySetups.State
  Accordions: Accordions.State
}

export type Action = Expansions.Action | SupplySetups.Action | Accordions.Action

export const actions = {
  Expansions: Expansions.actions,
  SupplySetups: SupplySetups.actions,
  Accordions: Accordions.actions,
}

export const selectors = {
  Expansions: Expansions.selectors,
  SupplySetups: SupplySetups.selectors,
  Accordions: Accordions.selectors,
}

export const initialState = {
  Expansions: Expansions.initialState,
  SupplySetups: SupplySetups.initialState,
  Accordions: Accordions.initialState,
}

export const Reducer = combineReducers({
  Expansions: Expansions.Reducer,
  SupplySetups: SupplySetups.Reducer,
  Accordions: Accordions.Reducer,
})
