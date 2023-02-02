import { combineReducers } from 'redux-loop'
import { createSelector } from 'reselect'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'

import * as Expansions from './Expansions'
import * as Cards from './Cards'
import * as Nemeses from './Nemeses'
import * as Mages from './Mages'
import * as Treasures from './Treasures'
import * as BasicNemesisCards from './BasicNemesisCards'
import * as UpgradedBasicNemesisCards from './UpgradedBasicNemesisCards'
import * as Languages from './Languages'
import * as GlobalLanguage from './GlobalLanguage'

import * as topLevelSelectors from './selectors'

import * as types from 'aer-types/types'

///////////
// STATE //
///////////

export type State = {
  GlobalLanguage: GlobalLanguage.State
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
  GlobalLanguage: GlobalLanguage.initialState,
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
  | GlobalLanguage.Action
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
  GlobalLanguage: GlobalLanguage.actions,
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
  GlobalLanguage: GlobalLanguage.Reducer,
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

const getAllContentOfExpansionSelected = createSelector(
  [
    Nemeses.selectors.getAllNemesesOfExpansionSelected,
    Mages.selectors.getAllMagesOfExpansionSelected,
    Cards.selectors.getAllCardsOfExpansionSelected,
    Treasures.selectors.getAllTreasuresOfExpansionSelected,
    BasicNemesisCards.selectors.getAllBasicNemesisCardsOfExpansionSelected,
    UpgradedBasicNemesisCards.selectors
      .getAllUpgradedBasicNemesisCardsOfExpansionSelected,
  ],
  (
    allNemesesSelected,
    allMagesSelected,
    allSupplyCardsSelected,
    allTreasuresSelected,
    allBasicNemesisCardsSelected,
    allUpgradedBasicNemesisCardsSelected
  ) =>
    allNemesesSelected &&
    allMagesSelected &&
    allSupplyCardsSelected &&
    allTreasuresSelected &&
    allBasicNemesisCardsSelected &&
    allUpgradedBasicNemesisCardsSelected
)

export const selectors = {
  GlobalLanguage: GlobalLanguage.selectors,
  Languages: Languages.selectors,
  Expansions: Expansions.selectors,
  Cards: Cards.selectors,
  Nemeses: Nemeses.selectors,
  Mages: Mages.selectors,
  Treasures: Treasures.selectors,
  BasicNemesisCards: BasicNemesisCards.selectors,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.selectors,
  ...topLevelSelectors,
  getAllContentOfExpansionSelected,
}
