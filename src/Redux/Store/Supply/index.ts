import { combineReducers } from 'redux-loop'

import * as Selection from './Selection'
import * as RandomSetup from './RandomSetup'

export type State = {
  Selection: Selection.State
  RandomSetup: RandomSetup.State
}

export type Action = Selection.Action | RandomSetup.Action

export const initialState = {
  Selection: Selection.initialState,
  RandomSetup: RandomSetup.initialState,
}

export const Reducer = combineReducers<State, Action>({
  Selection: Selection.Reducer,
  RandomSetup: RandomSetup.Reducer,
})
