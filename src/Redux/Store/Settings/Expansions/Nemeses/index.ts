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

const getNemesisIdsByExpansionId = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds, getExpansionId],
  (content, ids, expansionId) =>
    ids.filter(id => content.ENG[id].expansion === expansionId)
)

const getNemesesByExpansionId = createSelector(
  [Content.selectors.getContent, getNemesisIdsByExpansionId],
  (content, nemesisIds) => nemesisIds.map(nemesisId => content.ENG[nemesisId])
)

const getSelectedNemeses = createSelector(
  [Content.selectors.getContent, Selected.selectors.getSelected],
  (content, nemesisIds) => nemesisIds.map(nemesisId => content.ENG[nemesisId])
)

export const selectors = {
  selected: Selected.selectors,
  ids: Ids.selectors,
  content: Content.selectors,
  getNemesesByExpansionId,
  getSelectedNemeses,
}
