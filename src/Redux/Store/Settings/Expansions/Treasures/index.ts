import { combineReducers } from 'redux-loop'
import { createSelector } from 'reselect'
import { selectors as LanguageSelectors } from '../Languages'

import * as types from 'aer-types/types'

import * as Content from './content'
import * as Selected from './selected'
import * as Ids from './ids'
import {
  getEntitiesByIdListWithLanguageFallback,
  getContentByIdWithLanguageFallback,
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

const getTreasureLevel = (
  _: unknown,
  props: { treasureLevel: types.TreasureLevel }
) => props.treasureLevel

const getExpansionId = (_: unknown, props: { expansionId: string }) =>
  props.expansionId

const getIdList = (_: unknown, props: { treasureIds: string[] }) =>
  props.treasureIds

// Memoized

const getTreasureIdsByTreasureLevel = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds, getTreasureLevel],
  (content, ids, level) =>
    ids
      .map((id) => content.ENG[id])
      .filter((treasure) => treasure.level === level)
      .map((treasure) => treasure.id)
)

const getTreasureIdsByExpansionId = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds, getExpansionId],
  (content, ids, expansionId) =>
    ids.filter((id) => content.ENG[id].expansion === expansionId)
)

const getTreasuresByExpansionId = createSelector(
  [
    Content.selectors.getContent,
    getTreasureIdsByExpansionId,
    LanguageSelectors.getSelectedLanguageByExpansionId,
  ],
  getEntitiesByIdListWithLanguageFallback
)

const getTreasureList = createSelector(
  [
    Content.selectors.getContent,
    Ids.selectors.getIds,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map((id) => getContentByIdWithLanguageFallback(languages, content, id))
)

const getTreasureListByLevel = createSelector(
  [
    Content.selectors.getContent,
    getTreasureIdsByTreasureLevel,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map((id) => getContentByIdWithLanguageFallback(languages, content, id))
)

const getTreasureListFromIdList = createSelector(
  [
    Content.selectors.getContent,
    getIdList,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map((id) => getContentByIdWithLanguageFallback(languages, content, id))
)

const getSelectedTreasures = createSelector(
  [
    Content.selectors.getContent,
    Selected.selectors.getSelected,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map((id) => getContentByIdWithLanguageFallback(languages, content, id))
)

const getSelectedTreasureIdsByTreasureLevel = createSelector(
  [
    Content.selectors.getContent,
    Selected.selectors.getSelected,
    getTreasureLevel,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, level, languages) =>
    ids
      .map((id) => getContentByIdWithLanguageFallback(languages, content, id))
      .filter((treasure) => treasure.level === level)
      .map((treasure) => treasure.id)
)

const getSelectedTreasureListByLevel = createSelector(
  [
    Content.selectors.getContent,
    getSelectedTreasureIdsByTreasureLevel,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map((id) => getContentByIdWithLanguageFallback(languages, content, id))
)

export const selectors = {
  selected: Selected.selectors,
  ids: Ids.selectors,
  content: Content.selectors,
  getTreasuresByExpansionId,
  getTreasureIdsByTreasureLevel,
  getTreasureList,
  getTreasureListByLevel,
  getTreasureListFromIdList,
  getSelectedTreasures,
  getSelectedTreasureIdsByTreasureLevel,
  getSelectedTreasureListByLevel,
}
