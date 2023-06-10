import { combineReducers } from 'redux-loop'

import * as Configuration from './Configuration'
import * as ActiveGame from './ActiveGame'

export type State = {
  Configuration: Configuration.State
  ActiveGame: ActiveGame.State
}

export type Action = Configuration.Action | ActiveGame.Action

export const initialState = {
  Configuration: Configuration.initialState,
  ActiveGame: ActiveGame.initialState,
}

export const actions = {
  Configuration: Configuration.actions,
  ActiveGame: ActiveGame.actions,
}

export const selectors = {
  Configuration: Configuration.selectors,
  ActiveGame: ActiveGame.selectors,
}

export const Reducer = combineReducers({
  Configuration: Configuration.Reducer,
  ActiveGame: ActiveGame.Reducer,
})
