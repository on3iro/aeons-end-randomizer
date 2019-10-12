import { combineReducers } from 'redux-loop'
import { createSelector, OutputSelector } from 'reselect'

import * as SelectedExpansions from './SelectedExpansions'
import * as SelectedCards from './SelectedCards'
import * as SelectedNemeses from './SelectedNemeses'
import * as SelectedMages from './SelectedMages'
import * as Treasures from './Treasures'
import * as UpgradedBasicNemesisCards from './UpgradedBasicNemesisCards'

import * as types from '../../../../types'
import { RootState } from '../../'

///////////
// STATE //
///////////

export type State = {
  SelectedExpansions: SelectedExpansions.State
  SelectedCards: SelectedCards.State
  SelectedNemeses: SelectedNemeses.State
  SelectedMages: SelectedMages.State
  Treasures: Treasures.State
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.State
}

export const initialState: State = {
  SelectedExpansions: SelectedExpansions.initialState,
  SelectedCards: SelectedCards.initialState,
  SelectedNemeses: SelectedNemeses.initialState,
  SelectedMages: SelectedMages.initialState,
  Treasures: Treasures.initialState,
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
  | UpgradedBasicNemesisCards.Action

export const actions = {
  SelectedExpansions: SelectedExpansions.actions,
  SelectedCards: SelectedCards.actions,
  SelectedNemeses: SelectedNemeses.actions,
  SelectedMages: SelectedMages.actions,
  Treasures: Treasures.actions,
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
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.Reducer,
})

///////////////
// SELECTORS //
///////////////

// FIXME any typing sucks ;)
const getSelectedEntitiesForSelectedExpansions = <T>(
  entitySelector: OutputSelector<
    RootState,
    Array<{ expansion: string } & T>,
    any
  >
) =>
  createSelector(
    [SelectedExpansions.selectors.getSelectedExpansionsArray, entitySelector],
    (expansionIds, entities) =>
      entities.filter(entity => expansionIds.includes(entity.expansion))
  )

const getSelectedCardsForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  SelectedCards.selectors.getSelectedCards
)

const createIdsByCardTypeSelector = (type: types.CardType) =>
  createSelector(
    [getSelectedCardsForSelectedExpansions],
    (selectedCards: types.ICard[]) =>
      selectedCards.filter(card => card.type === type).map(card => card.id)
  )

const getGemIdsForSelectedExpansions = createIdsByCardTypeSelector('Gem')
const getRelicIdsForSelectedExpansions = createIdsByCardTypeSelector('Relic')
const getSpellIdsForSelectedExpansions = createIdsByCardTypeSelector('Spell')

const getSelectedNemesesForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  SelectedNemeses.selectors.getSelectedNemeses
)

const getSelectedMagesForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  SelectedMages.selectors.getSelectedMages
)

const getTreasuresForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  Treasures.selectors.getTreasureList
)
const getUpgradedBasicNemesisCardsForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  UpgradedBasicNemesisCards.selectors.getUpgradedBasicNemesisCardList
)

export const selectors = {
  SelectedExpansions: SelectedExpansions.selectors,
  SelectedCards: SelectedCards.selectors,
  SelectedNemeses: SelectedNemeses.selectors,
  SelectedMages: SelectedMages.selectors,
  Treasures: Treasures.selectors,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.selectors,
  getSelectedCardsForSelectedExpansions,
  getSelectedNemesesForSelectedExpansions,
  getSelectedMagesForSelectedExpansions,
  getTreasuresForSelectedExpansions,
  getUpgradedBasicNemesisCardsForSelectedExpansions,
  getGemIdsForSelectedExpansions,
  getRelicIdsForSelectedExpansions,
  getSpellIdsForSelectedExpansions,
}
