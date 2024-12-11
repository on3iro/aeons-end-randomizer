import { combineReducers } from 'redux-loop'

import * as Nemesis from './Nemesis'
import * as BasicNemesisCards from './BasicNemesisCards'
import * as Mages from './Mages'
import * as Supply from './Supply'
import * as FriendFoe from './FriendFoe'

export type State = {
  Nemesis: Nemesis.State
  BasicNemesisCards: BasicNemesisCards.State
  Mages: Mages.State
  Supply: Supply.State
  FriendFoe: FriendFoe.State
}

export const actions = {
  Nemesis: Nemesis.actions,
  BasicNemesisCards: BasicNemesisCards.actions,
  Mages: Mages.actions,
  Supply: Supply.actions,
  FriendFoe: FriendFoe.actions
}

export const selectors = {
  Nemesis: Nemesis.selectors,
  BasicNemesisCards: BasicNemesisCards.selectors,
  Mages: Mages.selectors,
  Supply: Supply.selectors,
  FriendFoe: FriendFoe.selectors,
}

export type Action =
  | Nemesis.Action
  | BasicNemesisCards.Action
  | Mages.Action
  | Supply.Action
  | FriendFoe.Action

export const initialState = {
  Nemesis: Nemesis.initialState,
  BasicNemesisCards: BasicNemesisCards.initialState,
  Mages: Mages.initialState,
  Supply: Supply.initialState,
  FriendFoe: FriendFoe.initialState
}

export const Reducer = combineReducers({
  Nemesis: Nemesis.Reducer,
  BasicNemesisCards: BasicNemesisCards.Reducer,
  Mages: Mages.Reducer,
  Supply: Supply.Reducer,
  FriendFoe: FriendFoe.Reducer
})
