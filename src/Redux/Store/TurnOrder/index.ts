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

// TODO extract initial fetch from subReducers and use here
// (i am not yet sure of how to actually do that, but it would be neat =D)
export const Reducer = combineReducers<State, Action>({
  Configuration: Configuration.Reducer,
  ActiveGame: ActiveGame.Reducer,
})
