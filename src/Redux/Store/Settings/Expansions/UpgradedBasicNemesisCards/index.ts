import { combineReducers } from 'redux-loop'
import { createSelector } from 'reselect'
import { selectors as LanguageSelectors } from '../Languages'

import * as Content from './content'
import * as Selected from './selected'
import * as Ids from './ids'
import {
  getContentByIdWithLanguageFallback,
  getEntitiesByIdListWithLanguageFallback,
} from '../helpers'

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

const getExpansionId = (_: unknown, props: { expansionId: string }) =>
  props.expansionId

// Memoized

const getUpgradedBasicNemesisCardIdsByExpansionId = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds, getExpansionId],
  (content, ids, expansionId) =>
    ids.filter(id => content.ENG[id].expansion === expansionId)
)

const getUpgradedBasicNemesisCardsByExpansionId = createSelector(
  [
    Content.selectors.getContent,
    getUpgradedBasicNemesisCardIdsByExpansionId,
    LanguageSelectors.getSelectedLanguageByExpansionId,
  ],
  getEntitiesByIdListWithLanguageFallback
)

const getUpgradedBasicNemesisCardList = createSelector(
  [
    Content.selectors.getContent,
    Ids.selectors.getIds,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map(id => getContentByIdWithLanguageFallback(languages, content, id))
)

const getSelectedUpgradedBasicNemesisCards = createSelector(
  [
    Content.selectors.getContent,
    Selected.selectors.getSelected,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map(id => getContentByIdWithLanguageFallback(languages, content, id))
)

export const selectors = {
  selected: Selected.selectors,
  ids: Ids.selectors,
  content: Content.selectors,
  getUpgradedBasicNemesisCardsByExpansionId,
  getUpgradedBasicNemesisCardList,
  getSelectedUpgradedBasicNemesisCards,
}
