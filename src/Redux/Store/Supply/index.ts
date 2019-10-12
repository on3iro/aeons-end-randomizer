import { combineReducers } from 'redux-loop'

import * as RandomSetup from './RandomSetup'

export type State = {
  RandomSetup: RandomSetup.State
}

export type Action = RandomSetup.Action

export const actions = {
  RandomSetup: RandomSetup.actions,
}

export const selectors = {
  RandomSetup: RandomSetup.selectors,
}

export const initialState = {
  RandomSetup: RandomSetup.initialState,
}

export const Reducer = combineReducers({
  RandomSetup: RandomSetup.Reducer,
})
