import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import * as types from '../../../../types'
import config from '../../../../config'
import { RootState } from '../..'

const NEMESES_DB_KEY = 'nemeses-1.8'

///////////
// STATE //
///////////

type Nemeses = {
  [key: string]: types.Nemesis & { selected: boolean }
}

export type State = Readonly<{
  nemeses: Nemeses
  nemesisIds: string[]
}>

export const initialState: State = {
  nemeses: config.NORMALIZEDDATA.nemesisIds.reduce(
    (acc, id) => ({
      ...acc,
      [id]: {
        ...config.NORMALIZEDDATA.nemeses[id],
        selected: true,
      },
    }),
    {}
  ),
  nemesisIds: config.NORMALIZEDDATA.nemesisIds,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_NEMESIS = 'Settings/Expansions/SelectedNemeses/TOGGLE_NEMESIS',
  SET_TO_DB = 'Settings/Expansions/SelectedNemeses/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/SelectedNemeses/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/SelectedNemeses/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SelectedNemeses/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SelectedNemeses/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SelectedNemeses/FETCH_FROM_DB_FAILURE',
}

export const actions = {
  toggleNemesis: (id: string) => createAction(ActionTypes.TOGGLE_NEMESIS, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (selectedNemeses: string[]) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, selectedNemeses),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}

export type Action = ActionsUnion<typeof actions>

/////////////
// REDUCER //
/////////////

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_NEMESIS: {
      const newState = {
        ...state,
        nemeses: {
          ...state.nemeses,
          [action.payload]: {
            ...state.nemeses[action.payload],
            selected: !state.nemeses[action.payload].selected,
          },
        },
      }

      const selectedCardsToSave = state.nemesisIds.filter(
        id => newState.nemeses[id].selected
      )

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [NEMESES_DB_KEY, selectedCardsToSave],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run(getFromDb, {
          args: [NEMESES_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      if (!action.payload) {
        return initialState
      }

      const selectedCards: string[] = action.payload
      const newState = Object.values(state.nemeses).reduce(
        (acc, card) => ({
          ...acc,
          nemeses: {
            ...acc.nemeses,
            [card.id]: {
              ...card,
              selected: selectedCards.includes(card.id),
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

// All

const getSelectedNemesesState = (state: RootState) =>
  state.Settings.Expansions.SelectedNemeses

const getExpansionId = (_: any, id: string) => id

const getNemesisById = (state: RootState, props: { id: string }) =>
  state.Settings.Expansions.SelectedNemeses.nemeses[props.id]

const getNemesisIdsArray = createSelector(
  [getSelectedNemesesState],
  state => state.nemesisIds
)

const getNemesisIdsByExpansionId = createSelector(
  [getSelectedNemesesState, getNemesisIdsArray, getExpansionId],
  (state, nemesisIds, expansionId) =>
    nemesisIds.filter(
      nemesisId => state.nemeses[nemesisId].expansion === expansionId
    )
)

const getNemesesByExpansionId = createSelector(
  [getSelectedNemesesState, getNemesisIdsByExpansionId],
  (state, nemesisIds) => nemesisIds.map(nemesisId => state.nemeses[nemesisId])
)

// Selected

const getSelectedNemesesIds = createSelector(
  [getSelectedNemesesState],
  state => state.nemesisIds.filter(id => state.nemeses[id].selected)
)

const getSelectedNemeses = createSelector(
  [getSelectedNemesesState, getSelectedNemesesIds],
  (state, nemesisIds) => nemesisIds.map(nemesisId => state.nemeses[nemesisId])
)

export const selectors = {
  getSelectedNemeses,
  getNemesesByExpansionId,
  getNemesisById,
}
