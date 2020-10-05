import { combineReducers } from 'redux-loop'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'

import * as Expansions from './Expansions'
import * as Cards from './Cards'
import * as Nemeses from './Nemeses'
import * as Mages from './Mages'
import * as Treasures from './Treasures'
import * as BasicNemesisCards from './BasicNemesisCards'
import * as UpgradedBasicNemesisCards from './UpgradedBasicNemesisCards'
import * as Languages from './Languages'

import * as topLevelSelectors from './selectors'

import * as types from 'aer-types/types'

///////////
// STATE //
///////////

export type State = {
  Languages: Languages.State
  Expansions: Expansions.State
  Cards: Cards.State
  Nemeses: Nemeses.State
  Mages: Mages.State
  Treasures: Treasures.State
  BasicNemesisCards: BasicNemesisCards.State
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.State
}

export const initialState: State = {
  Languages: Languages.initialState,
  Expansions: Expansions.initialState,
  Cards: Cards.initialState,
  Nemeses: Nemeses.initialState,
  Mages: Mages.initialState,
  Treasures: Treasures.initialState,
  BasicNemesisCards: BasicNemesisCards.initialState,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.initialState,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_ALL_EXPANSION_CONTENT = 'Settings/Expansions/TOGGLE_ALL_EXPANSION_CONTENT',
}

export const mainActions = {
  toggleAllExpansionContent: (
    expansionId: string,
    toggleType: types.ToggleType
  ) =>
    createAction(ActionTypes.TOGGLE_ALL_EXPANSION_CONTENT, {
      expansionId,
      toggleType,
    }),
}

export type MainAction = ActionsUnion<typeof mainActions>

export type Action =
  | Languages.Action
  | Expansions.Action
  | Cards.Action
  | Nemeses.Action
  | Mages.Action
  | Treasures.Action
  | BasicNemesisCards.Action
  | UpgradedBasicNemesisCards.Action
  | MainAction

export const actions = {
  Languages: Languages.actions,
  Expansions: Expansions.actions,
  Cards: Cards.actions,
  Nemeses: Nemeses.actions,
  Mages: Mages.actions,
  Treasures: Treasures.actions,
  BasicNemesisCards: BasicNemesisCards.actions,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.actions,
  main: mainActions,
}

/////////////
// REDUCER //
/////////////

export const Reducer = combineReducers({
  Languages: Languages.Reducer,
  Expansions: Expansions.Reducer,
  Cards: Cards.Reducer,
  Nemeses: Nemeses.Reducer,
  Mages: Mages.Reducer,
  Treasures: Treasures.Reducer,
  BasicNemesisCards: BasicNemesisCards.Reducer,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.Reducer,
})

///////////////
// SELECTORS //
///////////////

export const selectors = {
  Languages: Languages.selectors,
  Expansions: Expansions.selectors,
  Cards: Cards.selectors,
  Nemeses: Nemeses.selectors,
  Mages: Mages.selectors,
  Treasures: Treasures.selectors,
  BasicNemesisCards: BasicNemesisCards.selectors,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.selectors,
  ...topLevelSelectors,
}
