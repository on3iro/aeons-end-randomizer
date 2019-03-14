import { combineReducers } from 'redux-loop'

import * as Count from './Count'
import * as Recruited from './Recruited'


export type State = {
  Count: Count.State,
  Recruited: Recruited.State,
}

export type Action =
  Count.Action
  | Recruited.Action

  export const initialState = {
    Count: Count.initialState,
    Recruited: Recruited.initialState,
  }

export const Reducer = combineReducers<State, Action>({
  Count: Count.Reducer,
  Recruited: Recruited.Reducer,
})
