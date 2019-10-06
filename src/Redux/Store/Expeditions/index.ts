import { combineReducers } from 'redux-loop'

import * as Expeditions from './Expeditions'
import * as Modes from './Modes'

export type State = {
  Expeditions: Expeditions.State
  Modes: Modes.State
}

export type Action = Expeditions.Action | Modes.Action

export const selectors = {
  Expeditions: Expeditions.selectors,
  Modes: Modes.selectors,
}

export const actions = {
  Expeditions: Expeditions.actions,
  Modes: Modes.actions,
}

export const initialState = {
  Expeditions: Expeditions.initialState,
  Modes: Modes.initialState,
}

export const Reducer = combineReducers<State, Action>({
  Expeditions: Expeditions.Reducer,
  Modes: Modes.Reducer,
})
