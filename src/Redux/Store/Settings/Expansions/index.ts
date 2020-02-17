import { combineReducers } from 'redux-loop'

import * as SelectedExpansions from './SelectedExpansions'
import * as SelectedCards from './SelectedCards'
import * as SelectedNemeses from './SelectedNemeses'
import * as SelectedMages from './SelectedMages'
import * as Treasures from './Treasures'
import * as BasicNemesisCards from './BasicNemesisCards'
import * as UpgradedBasicNemesisCards from './UpgradedBasicNemesisCards'

import * as topLevelSelectors from './selectors'

///////////
// STATE //
///////////

export type State = {
  SelectedExpansions: SelectedExpansions.State
  SelectedCards: SelectedCards.State
  SelectedNemeses: SelectedNemeses.State
  SelectedMages: SelectedMages.State
  Treasures: Treasures.State
  BasicNemesisCards: BasicNemesisCards.State
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.State
}

export const initialState: State = {
  SelectedExpansions: SelectedExpansions.initialState,
  SelectedCards: SelectedCards.initialState,
  SelectedNemeses: SelectedNemeses.initialState,
  SelectedMages: SelectedMages.initialState,
  Treasures: Treasures.initialState,
  BasicNemesisCards: BasicNemesisCards.initialState,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.initialState,
}

/////////////
// ACTIONS //
/////////////

export type Action =
  | SelectedExpansions.Action
  | SelectedCards.Action
  | SelectedNemeses.Action
  | SelectedMages.Action
  | Treasures.Action
  | BasicNemesisCards.Action
  | UpgradedBasicNemesisCards.Action

export const actions = {
  SelectedExpansions: SelectedExpansions.actions,
  SelectedCards: SelectedCards.actions,
  SelectedNemeses: SelectedNemeses.actions,
  SelectedMages: SelectedMages.actions,
  Treasures: Treasures.actions,
  BasicNemesisCards: BasicNemesisCards.actions,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.actions,
}

/////////////
// REDUCER //
/////////////

export const Reducer = combineReducers({
  SelectedExpansions: SelectedExpansions.Reducer,
  SelectedCards: SelectedCards.Reducer,
  SelectedNemeses: SelectedNemeses.Reducer,
  SelectedMages: SelectedMages.Reducer,
  Treasures: Treasures.Reducer,
  BasicNemesisCards: BasicNemesisCards.Reducer,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.Reducer,
})

///////////////
// SELECTORS //
///////////////

export const selectors = {
  SelectedExpansions: SelectedExpansions.selectors,
  SelectedCards: SelectedCards.selectors,
  SelectedNemeses: SelectedNemeses.selectors,
  SelectedMages: SelectedMages.selectors,
  Treasures: Treasures.selectors,
  BasicNemesisCards: BasicNemesisCards.selectors,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.selectors,
  ...topLevelSelectors,
}
