import { combineReducers } from 'redux-loop'

import * as Count from './Count'
import * as Recruited from './Recruited'

export type State = {
  Count: Count.State
  Recruited: Recruited.State
}

export type Action = Count.Action | Recruited.Action

export const selectors = {
  Count: Count.selectors,
  Recruited: Recruited.selectors,
}

export const actions = {
  Count: Count.actions,
  Recruited: Recruited.actions,
}

export const initialState = {
  Count: Count.initialState,
  Recruited: Recruited.initialState,
}

export const Reducer = combineReducers({
  Count: Count.Reducer,
  Recruited: Recruited.Reducer,
})
