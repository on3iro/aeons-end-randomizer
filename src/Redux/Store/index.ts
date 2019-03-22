import { combineReducers } from 'redux-loop'

import * as MainContentLoading from './MainContentLoading'
import * as Settings from './Settings'
import * as Nemesis from './Nemesis'
import * as Mages from './Mages'
import * as Supply from './Supply'
import * as TurnOrder from './TurnOrder'

export type RootState = {
  Settings: Settings.State
  MainContentLoading: MainContentLoading.State
  Nemesis: Nemesis.State
  Mages: Mages.State
  Supply: Supply.State
  TurnOrder: TurnOrder.State
}

export type RootAction =
  | Settings.Action
  | MainContentLoading.Action
  | Nemesis.Action
  | Mages.Action
  | Supply.Action
  | TurnOrder.Action

export const initialState = {
  Settings: Settings.initialState,
  MainContentLoading: MainContentLoading.initialState,
  Nemesis: Nemesis.initialState,
  Mages: Mages.initialState,
  Supply: Supply.initialState,
  TurnOrder: TurnOrder.initialState,
}

export const RootReducer = combineReducers<RootState, RootAction>({
  Settings: Settings.Reducer,
  MainContentLoading: MainContentLoading.Reducer,
  Nemesis: Nemesis.Reducer,
  Mages: Mages.Reducer,
  Supply: Supply.Reducer,
  TurnOrder: TurnOrder.Reducer,
})
