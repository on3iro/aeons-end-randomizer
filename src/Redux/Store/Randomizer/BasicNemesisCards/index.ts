import { combineReducers } from 'redux-loop'

import * as RandomCards from './RandomCards'

export type State = {
  RandomCards: RandomCards.State
}

export type Action = RandomCards.Action

export const selectors = {
  RandomCards: RandomCards.selectors,
}

export const actions = {
  RandomCards: RandomCards.actions,
}

export const initialState = {
  RandomCards: RandomCards.initialState,
}

export const Reducer = combineReducers({
  RandomCards: RandomCards.Reducer,
})
