import { combineReducers } from 'redux-loop'

import * as SelectedExpansions from './SelectedExpansions'

///////////
// STATE //
///////////

export type State = {
  SelectedExpansions: SelectedExpansions.State
}

export const initialState = {
  SelectedExpansions: SelectedExpansions.initialState,
}

/////////////
// ACTIONS //
/////////////

export type Action = SelectedExpansions.Action

export const actions = {
  SelectedExpansions: SelectedExpansions.actions,
}

/////////////
// REDUCER //
/////////////

export const Reducer = combineReducers<State, Action>({
  SelectedExpansions: SelectedExpansions.Reducer,
})

///////////////
// SELECTORS //
///////////////

export const selectors = {
  SelectedExpansions: SelectedExpansions.selectors,
}
