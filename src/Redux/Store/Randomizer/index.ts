import { combineReducers } from 'redux-loop'

import * as Nemesis from './Nemesis'
import * as Mages from './Mages'
import * as Supply from './Supply'

export type State = {
  Nemesis: Nemesis.State
  Mages: Mages.State
  Supply: Supply.State
}

export const actions = {
  Nemesis: Nemesis.actions,
  Mages: Mages.actions,
  Supply: Supply.actions,
}

export const selectors = {
  Nemesis: Nemesis.selectors,
  Mages: Mages.selectors,
  Supply: Supply.selectors,
}

export type Action = Nemesis.Action | Mages.Action | Supply.Action

export const initialState = {
  Nemesis: Nemesis.initialState,
  Mages: Mages.initialState,
  Supply: Supply.initialState,
}

export const Reducer = combineReducers({
  Nemesis: Nemesis.Reducer,
  Mages: Mages.Reducer,
  Supply: Supply.Reducer,
})
