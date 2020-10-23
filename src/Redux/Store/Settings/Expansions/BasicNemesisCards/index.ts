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

import { setSelectedBasicNemesisCardsToDB } from './selected/sideEffects'

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
  TOGGLE_ALL = 'Settings/Expansions/BasicNemesisCards/TOGGLE_ALL',
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

        const allBasicNemesisCardsOfExpansion = state.ids.filter(
          (id) => state.content.ENG[id].expansion === expansionId
        )

        const newSelected =
          toggleType === 'deselect' ? [] : allBasicNemesisCardsOfExpansion

        const newSelectedBasicNemesisCards =
          newSelected.length === 0
            ? state.selected.filter(
                (id) => state.content.ENG[id].expansion !== expansionId
              )
            : [...new Set([...state.selected, ...newSelected])]

        const newState = {
          ...state,
          selected: newSelectedBasicNemesisCards,
        }

        return loop(
          newState,
          Cmd.run(setSelectedBasicNemesisCardsToDB, {
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

const getExpansionId = (_: unknown, props: { expansionId: string }) =>
  props.expansionId

// Memoized

const getIdsByExpansionId = createSelector(
  [Content.selectors.getContent, Ids.selectors.getIds, getExpansionId],
  (content, ids, expansionId) =>
    ids.filter((id) => content.ENG[id].expansion === expansionId)
)

const getContentByExpansionId = createSelector(
  [
    Content.selectors.getContent,
    getIdsByExpansionId,
    LanguageSelectors.getSelectedLanguageByExpansionId,
  ],
  getEntitiesByIdListWithLanguageFallback
)

const getSelectedContent = createSelector(
  [
    Content.selectors.getContent,
    Selected.selectors.getSelected,
    LanguageSelectors.getLanguagesByExpansion,
  ],
  (content, selectedIds, languages) =>
    selectedIds.map((id) =>
      getContentByIdWithLanguageFallback(languages, content, id)
    )
)

const getSelectedBasicNemesisCardsByExpansionId = createSelector(
  [getSelectedContent, getContentByExpansionId],
  (selectedBasicNemesisCardIds, expansionBasicNemesisCardIds) => {
    return selectedBasicNemesisCardIds.filter((id) =>
      expansionBasicNemesisCardIds.includes(id)
    )
  }
)

const getAllBasicNemesisCardsOfExpansionSelected = createSelector(
  [getSelectedBasicNemesisCardsByExpansionId, getContentByExpansionId],
  (selectedBasicNemesisCardIds, allBasicNemesisCardIds) =>
    allBasicNemesisCardIds.every((id) =>
      selectedBasicNemesisCardIds.includes(id)
    )
)

export const selectors = {
  selected: Selected.selectors,
  ids: Ids.selectors,
  content: Content.selectors,
  getContentByExpansionId,
  getSelectedContent,
  getSelectedBasicNemesisCardsByExpansionId,
  getAllBasicNemesisCardsOfExpansionSelected,
}
