import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import * as types from '../../../../types'
import config from '../../../../config'
import { RootState } from '../..'

const EXPANSIONS_DB_KEY = 'expansions-1.8'

///////////
// STATE //
///////////

type Expansions = {
  [key: string]: types.Expansion & { selected: boolean }
}

export type State = Readonly<{
  expansions: Expansions
  expansionIds: string[]
}>

export const initialState: State = {
  expansions: config.NORMALIZEDDATA.expansionIds.reduce(
    (acc, id) => ({
      ...acc,
      [id]: {
        ...config.NORMALIZEDDATA.expansions[id],
        selected: false,
      },
    }),
    {}
  ),
  expansionIds: config.NORMALIZEDDATA.expansionIds,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_ALL = 'Settings/Expansions/SelectedExpansions/TOGGLE_ALL',
  TOGGLE_EXPANSION = 'Settings/Expansions/SelectedExpansions/TOGGLE_EXPANSION',
  SET_TO_DB = 'Settings/Expansions/SelectedExpansions/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/SelectedExpansions/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/SelectedExpansions/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SelectedExpansions/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SelectedExpansions/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SelectedExpansions/FETCH_FROM_DB_FAILURE',
}

export const actions = {
  toggleAll: () => createAction(ActionTypes.TOGGLE_ALL),
  toggleExpansion: (id: string) =>
    createAction(ActionTypes.TOGGLE_EXPANSION, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (selectedExpansions: string[]) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, selectedExpansions),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}

export type Action = ActionsUnion<typeof actions>

/////////////
// REDUCER //
/////////////

const allExpansionsAreSelected = (expansions: Expansions) =>
  Object.values(expansions).every(exp => exp.selected)

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ALL: {
      const allExpansionsSelected = allExpansionsAreSelected(state.expansions)
      const newExpansionsState = Object.values(state.expansions).reduce(
        (acc, exp) => ({
          ...acc,
          [exp.id]: {
            ...exp,
            selected: !allExpansionsSelected,
          },
        }),
        {}
      )

      const newState: State = {
        ...state,
        expansions: newExpansionsState,
      }

      const selectedExpansionsToSave = state.expansionIds.filter(
        id => newState.expansions[id].selected
      )

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [EXPANSIONS_DB_KEY, selectedExpansionsToSave],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.TOGGLE_EXPANSION: {
      const newState = {
        ...state,
        expansions: {
          ...state.expansions,
          [action.payload]: {
            ...state.expansions[action.payload],
            selected: !state.expansions[action.payload].selected,
          },
        },
      }

      const selectedExpansionsToSave = state.expansionIds.filter(
        id => newState.expansions[id].selected
      )

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [EXPANSIONS_DB_KEY, selectedExpansionsToSave],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run(getFromDb, {
          args: [EXPANSIONS_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      if (!action.payload) {
        return initialState
      }

      const selectedExpansions: string[] = action.payload
      const newState = Object.values(state.expansions).reduce(
        (acc, exp) => ({
          ...acc,
          expansions: {
            ...acc.expansions,
            [exp.id]: {
              ...exp,
              selected: selectedExpansions.includes(exp.id),
            },
          },
        }),
        state
      )

      return newState || initialState
    }

    case ActionTypes.FETCH_FROM_DB_FAILURE: {
      return state
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getSelectedExpansionsState = (state: RootState) =>
  state.Settings.Expansions.SelectedExpansions

const getExpansionId = (_: RootState, id: string) => id

const getExpansionIds = (
  _: RootState,
  { expansionIds }: { expansionIds: string[] }
) => expansionIds

const getExpansionsByIdList = createSelector(
  [getSelectedExpansionsState, getExpansionIds],
  ({ expansions }, ids) => ids.map(id => expansions[id])
)

const getExpansionNamesByIdList = createSelector(
  [getExpansionsByIdList],
  expansions => expansions.map(e => e.name)
)

const getSelectedExpansionsArray = createSelector(
  [getSelectedExpansionsState],
  state => state.expansionIds.filter(id => state.expansions[id].selected)
)

const getAllExpansionsSelected = createSelector(
  [getSelectedExpansionsState],
  state => allExpansionsAreSelected(state.expansions)
)

const getExpansionById = createSelector(
  [getSelectedExpansionsState, getExpansionId],
  ({ expansions }, id) => expansions[id]
)

const getHasStandaloneExpansion = createSelector(
  [getSelectedExpansionsArray],
  selectedExpansions =>
    selectedExpansions.some(
      expansion => config.DATA[expansion].type === 'standalone'
    )
)

const getStandaloneExpansionIds = createSelector(
  [getSelectedExpansionsState],
  state =>
    state.expansionIds.filter(id => state.expansions[id].type === 'standalone')
)
const getMiniExpansionIds = createSelector(
  [getSelectedExpansionsState],
  state => state.expansionIds.filter(id => state.expansions[id].type === 'mini')
)
const getPromoIds = createSelector([getSelectedExpansionsState], state =>
  state.expansionIds
    .filter(id => state.expansions[id].type === 'promo')
    .sort((a, b) => {
      const promoA = state.expansions[a].name
      const promoB = state.expansions[b].name

      if (promoA < promoB) {
        return -1
      }

      if (promoA > promoB) {
        return 1
      }

      return 0
    })
)

const getStandaloneExpansions = createSelector(
  [getSelectedExpansionsState, getStandaloneExpansionIds],
  (state, ids) => ids.map(id => state.expansions[id])
)
const getMiniExpansions = createSelector(
  [getSelectedExpansionsState, getMiniExpansionIds],
  (state, ids) => ids.map(id => state.expansions[id])
)
const getPromos = createSelector(
  [getSelectedExpansionsState, getPromoIds],
  (state, ids) => ids.map(id => state.expansions[id])
)

export const selectors = {
  getSelectedExpansionsState,
  getSelectedExpansionsArray,
  getAllExpansionsSelected,
  getHasStandaloneExpansion,
  getStandaloneExpansionIds,
  getMiniExpansionIds,
  getPromoIds,
  getStandaloneExpansions,
  getMiniExpansions,
  getPromos,
  getExpansionById,
  getExpansionsByIdList,
  getExpansionNamesByIdList,
}
