import { combineReducers } from 'redux-loop'

import * as types from 'aer-types'

import * as Content from './content'
import * as Selected from './selected'
import * as Ids from './ids'
import { BasicNemesisCardsContentStateSlice } from './content'
import { createSelector } from 'reselect'

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

const getBasicNemesisCardTier = (
  _: unknown,
  props: { tier: types.NemesisCardTier }
) => props.tier

const getExpansionId = (_: unknown, id: string) => id

const getBasicNemesisCardById = (
  state: BasicNemesisCardsContentStateSlice,
  props: { id: string }
) => state.Settings.Expansions.BasicNemesisCards.content.ENG[props.id]

// Memoized

const getIdsByTier = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds, getBasicNemesisCardTier],
  (content, ids, tier) =>
    ids
      .map(id => content.ENG[id])
      .filter(basicNemesisCard => basicNemesisCard.tier === tier)
      .map(basicNemesisCard => basicNemesisCard.id)
)

const getIdsByExpansionId = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds, getExpansionId],
  (content, ids, expansionId) =>
    ids.filter(id => content.ENG[id].expansion === expansionId)
)

const getContentByExpansionId = createSelector(
  [Content.selectors.getContent, getIdsByExpansionId],
  (content, idsByExpansion) => idsByExpansion.map(id => content.ENG[id])
)

const getContentAsList = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds],
  (content, ids) => ids.map(id => content.ENG[id])
)

const getContentAsListByTier = createSelector(
  [Content.selectors.getContent, getIdsByTier],
  (content, ids) => ids.map(id => content.ENG[id])
)

const getSelectedContent = createSelector(
  [Content.selectors.getContent, Selected.selectors.getSelected],
  (content, selectedIds) => selectedIds.map(id => content.ENG[id])
)

const getSelectedIdsByTier = createSelector(
  [
    Content.selectors.getContent,
    Selected.selectors.getSelected,
    getBasicNemesisCardTier,
  ],
  (content, selectedIds, tier) =>
    selectedIds
      .map(id => content.ENG[id])
      .filter(basicNemesisCard => basicNemesisCard.tier === tier)
      .map(basicNemesisCard => basicNemesisCard.id)
)

const getSelectedContentAsListByTier = createSelector(
  [Content.selectors.getContent, getSelectedIdsByTier],
  (content, ids) => ids.map(id => content.ENG[id])
)

export const selectors = {
  selected: Selected.selectors,
  ids: Ids.selectors,
  content: Content.selectors,
  getBasicNemesisCardById,
  getContentByExpansionId,
  getContentAsList,
  getContentAsListByTier,
  getSelectedContent,
  getSelectedContentAsListByTier,
}
