import { combineReducers, reduceReducers, Cmd, loop } from 'redux-loop'
import { createSelector } from 'reselect'
import { set as setToDb } from 'idb-keyval'
import { selectors as LanguageSelectors } from '../Languages'

import * as Content from './content'
import * as Selected from './selected'
import * as Ids from './ids'
import * as types from 'aer-types/types'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { EXPANSIONS_DB_KEY } from './constants'
import { getContentWithLanguageFallback } from './content/selectors'

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
//
export enum ActionTypes {
  TOGGLE_ALL = 'Settings/Expansions/Expansions/TOGGLE_ALL',
}

export const mainActions = {
  toggleAll: () => createAction(ActionTypes.TOGGLE_ALL),
}

export type MainAction = ActionsUnion<typeof mainActions>

export const actions = {
  selected: Selected.actions,
  ids: Ids.actions,
  content: Content.actions,
  main: mainActions,
}

export type Action = Selected.Action | Ids.Action | Content.Action | MainAction

/////////////
// REDUCER //
/////////////

export const Reducer = reduceReducers(
  combineReducers<State>({
    selected: Selected.Reducer,
    ids: Ids.Reducer,
    content: Content.Reducer,
  }),
  (state: State, action: Action) => {
    switch (action.type) {
      case ActionTypes.TOGGLE_ALL: {
        const allExpansionsSelected = state.ids.every((id) =>
          state.selected.includes(id)
        )

        const newSelected = allExpansionsSelected ? [] : state.ids

        const newState = {
          ...state,
          selected: newSelected,
        }

        return loop(
          newState,
          Cmd.run(setToDb, {
            args: [EXPANSIONS_DB_KEY, newSelected],
            successActionCreator: actions.selected.setToDBSuccessful,
            failActionCreator: actions.selected.setToDBFailed,
          })
        )
      }

      default: {
        return state
      }
    }
  }
)

///////////////
// SELECTORS //
///////////////

// Primitive

const getExpansionIds = (
  _: unknown,
  { expansionIds }: { expansionIds: string[] }
) => expansionIds

// Memoized

const getExpansionsByIdList = createSelector(
  [Content.selectors.getContent, getExpansionIds],
  (content, ids) => ids.map((id) => content.ENG[id])
)

const getExpansionNamesByIdList = createSelector(
  [getExpansionsByIdList],
  (expansions) => expansions.map((e) => e.name)
)

const getAllExpansionsSelected = createSelector(
  [Ids.selectors.getIds, Selected.selectors.getSelected],
  (ids, selectedIds) => ids.every((id) => selectedIds.includes(id))
)

const getHasStandaloneExpansion = createSelector(
  [Selected.selectors.getSelected, Content.selectors.getContent],
  (selectedIds, content) =>
    selectedIds.some((id) => content.ENG[id].type === 'standalone')
)

const getStandaloneExpansionIds = createSelector(
  [Ids.selectors.getIds, Content.selectors.getContent],
  (ids, content) => ids.filter((id) => content.ENG[id].type === 'standalone')
)

const getMiniExpansionIds = createSelector(
  [Ids.selectors.getIds, Content.selectors.getContent],
  (ids, content) => ids.filter((id) => content.ENG[id].type === 'mini')
)

const getPromoIds = createSelector(
  [Ids.selectors.getIds, Content.selectors.getContent],
  (ids, content) =>
    ids
      .filter((id) => content.ENG[id].type === 'promo')
      .sort((a, b) => {
        const promoA = content.ENG[a].name
        const promoB = content.ENG[b].name

        if (promoA < promoB) {
          return -1
        }

        if (promoA > promoB) {
          return 1
        }

        return 0
      })
)

//
// Expansion selectors (with language fallback; by expansion id index)
//
const getAllExpansions = createSelector(
  [
    Content.selectors.getContent,
    Ids.selectors.getIds,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) => {
    let result: types.Expansions = {}
    ids.forEach(
      (id) =>
        (result[id] = getContentWithLanguageFallback(languages, content, id))
    )
    return result
  }
)

//
// Expansion selectors (with language fallback; by numeric index)
//
const getStandaloneExpansions = createSelector(
  [
    Content.selectors.getContent,
    getStandaloneExpansionIds,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map((id) => getContentWithLanguageFallback(languages, content, id))
)
const getMiniExpansions = createSelector(
  [
    Content.selectors.getContent,
    getMiniExpansionIds,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map((id) => getContentWithLanguageFallback(languages, content, id))
)
const getPromos = createSelector(
  [
    Content.selectors.getContent,
    getPromoIds,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, ids, languages) =>
    ids.map((id) => getContentWithLanguageFallback(languages, content, id))
)

export const selectors = {
  selected: Selected.selectors,
  ids: Ids.selectors,
  content: Content.selectors,
  getExpansionNamesByIdList,
  getAllExpansionsSelected,
  getHasStandaloneExpansion,
  getAllExpansions,
  getStandaloneExpansions,
  getMiniExpansions,
  getPromos,
}
