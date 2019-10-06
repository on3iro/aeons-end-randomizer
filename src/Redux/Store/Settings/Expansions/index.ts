import { combineReducers } from 'redux-loop'
import { createSelector } from 'reselect'

import * as SelectedExpansions from './SelectedExpansions'
import * as SelectedCards from './SelectedCards'
import * as SelectedNemeses from './SelectedNemeses'
import * as SelectedMages from './SelectedMages'

import * as types from '../../../../types'

///////////
// STATE //
///////////

export type State = {
  SelectedExpansions: SelectedExpansions.State
  SelectedCards: SelectedCards.State
  SelectedNemeses: SelectedNemeses.State
  SelectedMages: SelectedMages.State
}

export const initialState: State = {
  SelectedExpansions: SelectedExpansions.initialState,
  SelectedCards: SelectedCards.initialState,
  SelectedNemeses: SelectedNemeses.initialState,
  SelectedMages: SelectedMages.initialState,
}

/////////////
// ACTIONS //
/////////////

export type Action =
  | SelectedExpansions.Action
  | SelectedCards.Action
  | SelectedNemeses.Action
  | SelectedMages.Action

export const actions = {
  SelectedExpansions: SelectedExpansions.actions,
  SelectedCards: SelectedCards.actions,
  SelectedNemeses: SelectedNemeses.actions,
  SelectedMages: SelectedMages.actions,
}

/////////////
// REDUCER //
/////////////

export const Reducer = combineReducers<State, Action>({
  SelectedExpansions: SelectedExpansions.Reducer,
  SelectedCards: SelectedCards.Reducer,
  SelectedNemeses: SelectedNemeses.Reducer,
  SelectedMages: SelectedMages.Reducer,
})

///////////////
// SELECTORS //
///////////////

const getSelectedCardsForSelectedExpansions = createSelector(
  [
    SelectedExpansions.selectors.getSelectedExpansionsArray,
    SelectedCards.selectors.getSelectedCards,
  ],
  (expansionIds, cards) =>
    cards.filter(card => expansionIds.includes(card.expansion))
)

const createIdsByCardTypeSelector = (type: types.CardType) =>
  createSelector(
    [getSelectedCardsForSelectedExpansions],
    selectedCards =>
      selectedCards.filter(card => card.type === type).map(card => card.id)
  )

const getGemIdsForSelectedExpansions = createIdsByCardTypeSelector('Gem')
const getRelicIdsForSelectedExpansions = createIdsByCardTypeSelector('Relic')
const getSpellIdsForSelectedExpansions = createIdsByCardTypeSelector('Spell')

const getSelectedNemesesForSelectedExpansions = createSelector(
  [
    SelectedExpansions.selectors.getSelectedExpansionsArray,
    SelectedNemeses.selectors.getSelectedNemeses,
  ],
  (expansionIds, nemeses) =>
    nemeses.filter(nemesis => expansionIds.includes(nemesis.expansion))
)

const getSelectedMagesForSelectedExpansions = createSelector(
  [
    SelectedExpansions.selectors.getSelectedExpansionsArray,
    SelectedMages.selectors.getSelectedMages,
  ],
  (expansionIds, mages) =>
    mages.filter(mage => expansionIds.includes(mage.expansion))
)

export const selectors = {
  SelectedExpansions: SelectedExpansions.selectors,
  SelectedCards: SelectedCards.selectors,
  SelectedNemeses: SelectedNemeses.selectors,
  SelectedMages: SelectedMages.selectors,
  getSelectedCardsForSelectedExpansions,
  getSelectedNemesesForSelectedExpansions,
  getSelectedMagesForSelectedExpansions,
  getGemIdsForSelectedExpansions,
  getRelicIdsForSelectedExpansions,
  getSpellIdsForSelectedExpansions,
}
