import { combineReducers } from 'redux-loop'

import * as PlayerCount from './PlayerCount'
import * as RandomCards from './RandomCards'

export type State = {
  PlayerCount: PlayerCount.State
  RandomCards: RandomCards.State
}

export type Action = PlayerCount.Action | RandomCards.Action

export const selectors = {
  PlayerCount: PlayerCount.selectors,
  RandomCards: RandomCards.selectors,
}

export const actions = {
  PlayerCount: PlayerCount.actions,
  RandomCards: RandomCards.actions,
}

export const initialState = {
  PlayerCount: PlayerCount.initialState,
  RandomCards: RandomCards.initialState,
}

export const Reducer = combineReducers({
  PlayerCount: PlayerCount.Reducer,
  RandomCards: RandomCards.Reducer,
})
