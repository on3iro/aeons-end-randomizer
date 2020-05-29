import { combineReducers } from 'redux-loop'
import { createSelector } from 'reselect'
import { selectors as LanguageSelectors } from '../Languages'

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

const getExpansionId = (_: unknown, props: { expansionId: string }) =>
  props.expansionId
const getIdList = (_: unknown, props: { cardIds: string[] }) => props.cardIds

// Memoized

const getIdsByExpansionId = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds, getExpansionId],
  (content, ids, expansionId) =>
    ids.filter(id => content.ENG[id].expansion === expansionId)
)

const getContentByExpansionId = createSelector(
  [
    Content.selectors.getContent,
    getIdsByExpansionId,
    LanguageSelectors.getSelectedLanguageByExpansionId,
  ],
  getEntitiesByIdListWithLanguageFallback
)

const getGemsByExpansionId = createSelector(
  [getContentByExpansionId],
  content => content.filter(card => card.type === 'Gem')
)

const getRelicsByExpansionId = createSelector(
  [getContentByExpansionId],
  content => content.filter(card => card.type === 'Relic')
)

const getSpellsByExpansionId = createSelector(
  [getContentByExpansionId],
  cards => cards.filter(card => card.type === 'Spell')
)

const getSelectedCards = createSelector(
  [
    Content.selectors.getContent,
    Selected.selectors.getSelected,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, selectedIds, languages) =>
    selectedIds.map(id =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

const getCardsByIdList = createSelector(
  [
    Content.selectors.getContent,
    getIdList,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, idList, languages) =>
    idList.map(id => getContentByIdWithLanguageFallback(languages, content, id))
)

export const selectors = {
  selected: Selected.selectors,
  ids: Ids.selectors,
  content: Content.selectors,
  getSelectedCards,
  getGemsByExpansionId,
  getRelicsByExpansionId,
  getSpellsByExpansionId,
  getCardsByIdList,
}
