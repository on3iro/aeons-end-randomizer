import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import * as types from '../../../../types'
import config from '../../../../config'
import { RootState } from '../..'

const MAGES_DB_KEY = 'mages-1.8'

///////////
// STATE //
///////////

type Mages = {
  [key: string]: types.ICreature & { selected: boolean }
}

export type State = Readonly<{
  mages: Mages
  mageIds: string[]
}>

export const initialState: State = {
  mages: config.NORMALIZEDDATA.mageIds.reduce(
    (acc, id) => ({
      ...acc,
      [id]: {
        ...config.NORMALIZEDDATA.mages[id],
        selected: true,
      },
    }),
    {}
  ),
  mageIds: config.NORMALIZEDDATA.mageIds,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_MAGE = 'Settings/Expansions/SelectedMages/TOGGLE_MAGE',
  SET_TO_DB = 'Settings/Expansions/SelectedMages/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/SelectedMages/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/SelectedMages/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SelectedMages/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SelectedMages/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SelectedMages/FETCH_FROM_DB_FAILURE',
}

export const actions = {
  toggleMage: (id: string) => createAction(ActionTypes.TOGGLE_MAGE, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (selectedMages: string[]) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, selectedMages),
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
    case ActionTypes.TOGGLE_MAGE: {
      const newState = {
        ...state,
        mages: {
          ...state.mages,
          [action.payload]: {
            ...state.mages[action.payload],
            selected: !state.mages[action.payload].selected,
          },
        },
      }

      const selectedCardsToSave = state.mageIds.filter(
        id => newState.mages[id].selected
      )

      return loop(
        newState,
        Cmd.run<Action>(setToDb, {
          args: [MAGES_DB_KEY, selectedCardsToSave],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run<Action>(getFromDb, {
          args: [MAGES_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      const selectedCards: string[] = action.payload || []
      const newState = Object.values(state.mages).reduce(
        (acc, card) => ({
          ...acc,
          mages: {
            ...acc.mages,
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

const getSelectedMagesState = (state: RootState) =>
  state.Settings.Expansions.SelectedMages

const getExpansionId = (_: any, id: string) => id

const getMageIdsArray = createSelector(
  [getSelectedMagesState],
  state => state.mageIds
)

const getMageIdsByExpansionId = createSelector(
  [getSelectedMagesState, getMageIdsArray, getExpansionId],
  (state, mageIds, expansionId) =>
    mageIds.filter(mageId => state.mages[mageId].expansion === expansionId)
)

const getMagesByExpansionId = createSelector(
  [getSelectedMagesState, getMageIdsByExpansionId],
  (state, mageIds) => mageIds.map(mageId => state.mages[mageId])
)

// Selected

const getSelectedMagesIds = createSelector(
  [getSelectedMagesState],
  state => state.mageIds.filter(id => state.mages[id].selected)
)

const getSelectedMages = createSelector(
  [getSelectedMagesState, getSelectedMagesIds],
  (state, mageIds) => mageIds.map(mageId => state.mages[mageId])
)

export const selectors = {
  getSelectedMages,
  getMagesByExpansionId,
}
