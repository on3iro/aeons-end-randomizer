import { combineReducers, reduceReducers, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'

import * as types from 'aer-types/types'

import {
  getEntitiesByIdListWithLanguageFallback,
  getContentByIdWithLanguageFallback,
} from '../helpers'
import { selectors as LanguageSelectors } from '../Languages'
import {
  Action as ExpansionAction,
  ActionTypes as ExpansionActionTypes,
} from '../'

import * as Content from './content'
import * as Selected from './selected'
import * as Ids from './ids'

import { setSelectedTreasuresToDB } from './selected/sideEffects'

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

export enum ActionTypes {
  TOGGLE_ALL = 'Settings/Expansions/Treasures/TOGGLE_ALL',
}

export const mainActions = {
  toggleAll: (expansionId: string, toggleType: types.ToggleType) =>
    createAction(ActionTypes.TOGGLE_ALL, {
      expansionId,
      toggleType,
    }),
}

export type MainAction = ActionsUnion<typeof mainActions>

export const actions = {
  selected: Selected.actions,
  ids: Ids.actions,
  content: Content.actions,
  main: mainActions,
}

export type Action = Selected.Action | MainAction

/////////////
// REDUCER //
/////////////

export const Reducer = reduceReducers(
  combineReducers<State>({
    selected: Selected.Reducer,
    ids: Ids.Reducer,
    content: Content.Reducer,
  }),
  (state: State, action: Action | ExpansionAction) => {
    switch (action.type) {
      case ExpansionActionTypes.TOGGLE_ALL_EXPANSION_CONTENT:
      case ActionTypes.TOGGLE_ALL: {
        const { expansionId, toggleType } = action.payload

        const allTreasuresOfExpansion = state.ids.filter(
          (id) => state.content.ENG[id].expansion === expansionId
        )

        const newSelected =
          toggleType === 'deselect' ? [] : allTreasuresOfExpansion

        const newSelectedTreasures =
          newSelected.length === 0
            ? state.selected.filter(
                (id) => state.content.ENG[id].expansion !== expansionId
              )
            : [...new Set([...state.selected, ...newSelected])]

        const newState = {
          ...state,
          selected: newSelectedTreasures,
        }

        return loop(
          newState,
          Cmd.run(setSelectedTreasuresToDB, {
            args: [newState.selected],
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

const getSelectedTreasuresByExpansionId = createSelector(
  [getSelectedTreasures, getTreasuresByExpansionId],
  (selectedTreasureIds, expansionTreasureIds) => {
    return selectedTreasureIds.filter((id) => expansionTreasureIds.includes(id))
  }
)

const getAllTreasuresOfExpansionSelected = createSelector(
  [getSelectedTreasuresByExpansionId, getTreasuresByExpansionId],
  (selectedTreasureIds, allTreasureIds) =>
    allTreasureIds.every((id) => selectedTreasureIds.includes(id))
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
  getSelectedTreasuresByExpansionId,
  getAllTreasuresOfExpansionSelected,
}
