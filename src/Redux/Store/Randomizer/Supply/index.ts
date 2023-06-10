import { combineReducers } from 'redux-loop'

import * as RandomSetup from './RandomSetup'
import * as LockedCards from './LockedCards'

export type State = {
  RandomSetup: RandomSetup.State
  LockedCards: LockedCards.State
}

export type Action = RandomSetup.Action | LockedCards.Action

export const actions = {
  RandomSetup: RandomSetup.actions,
  LockedCards: LockedCards.actions,
}

export const selectors = {
  RandomSetup: RandomSetup.selectors,
  LockedCards: LockedCards.selectors,
}

export const initialState = {
  RandomSetup: RandomSetup.initialState,
  LockedCards: LockedCards.initialState,
}

export const Reducer = combineReducers({
  RandomSetup: RandomSetup.Reducer,
  LockedCards: LockedCards.Reducer,
})
