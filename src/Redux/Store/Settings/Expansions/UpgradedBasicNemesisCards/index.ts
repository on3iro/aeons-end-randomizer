import { combineReducers } from 'redux-loop'
import { createSelector } from 'reselect'

import * as Content from './content'
import * as Selected from './selected'
import * as Ids from './ids'

///////////
// STATE //
///////////

export type State = {
  selected: Selected.State
  ids: Ids.State
  content: Content.State
}

export const initialState: State = {
  selected: Selected.initialState,
  ids: Ids.initialState,
  content: Content.initialState,
}

/////////////
// ACTIONS //
/////////////

export type Action = Selected.Action

export const actions = {
  selected: Selected.actions,
  ids: Ids.actions,
  content: Content.actions,
}

/////////////
// REDUCER //
/////////////

export const Reducer = combineReducers({
  selected: Selected.Reducer,
  ids: Ids.Reducer,
  content: Content.Reducer,
})

///////////////
// SELECTORS //
///////////////

// Primitive

const getExpansionId = (_: unknown, id: string) => id

// Memoized

const getUpgradedBasicNemesisCardIdsByExpansionId = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds, getExpansionId],
  (content, ids, expansionId) =>
    ids.filter(id => content.ENG[id].expansion === expansionId)
)

const getUpgradedBasicNemesisCardsByExpansionId = createSelector(
  [Content.selectors.getContent, getUpgradedBasicNemesisCardIdsByExpansionId],
  (content, ids) => ids.map(id => content.ENG[id])
)

const getUpgradedBasicNemesisCardList = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds],
  (content, ids) => ids.map(id => content.ENG[id])
)

const getSelectedUpgradedBasicNemesisCards = createSelector(
  [Content.selectors.getContent, Selected.selectors.getSelected],
  (content, ids) => ids.map(id => content.ENG[id])
)

export const selectors = {
  selected: Selected.selectors,
  ids: Ids.selectors,
  content: Content.selectors,
  getUpgradedBasicNemesisCardsByExpansionId,
  getUpgradedBasicNemesisCardList,
  getSelectedUpgradedBasicNemesisCards,
}
