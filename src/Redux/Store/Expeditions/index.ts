import { combineReducers } from 'redux-loop'

import * as Expeditions from './Expeditions'
import * as Variants from './Variants'

export type State = {
  Expeditions: Expeditions.State
  Variants: Variants.State
}

export type Action = Expeditions.Action | Variants.Action

export const selectors = {
  Expeditions: Expeditions.selectors,
  Variants: Variants.selectors,
}

export const actions = {
  Expeditions: Expeditions.actions,
  Variants: Variants.actions,
}

export const initialState = {
  Expeditions: Expeditions.initialState,
  Variants: Variants.initialState,
}

export const Reducer = combineReducers({
  Expeditions: Expeditions.Reducer,
  Variants: Variants.Reducer,
})
