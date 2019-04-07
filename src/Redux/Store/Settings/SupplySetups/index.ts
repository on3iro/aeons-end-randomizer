import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import config from '../../../../config'
import * as types from '../../../../types'
import { RootState } from '../../'

const SUPPLY_DB_KEY = 'supplySetups'

///////////
// STATE //
///////////

export type State = {
  Predefined: types.IMarketSetups
  Custom: types.IMarketSetups
}
export const initialState: State = {
  Predefined: config.MARKETSETUPS,
  Custom: {},
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_ALL = 'Settings/Expansions/SupplySetups/TOGGLE_ALL',
  TOGGLE_SETUP = 'Settings/Expansions/SupplySetups/TOGGLE_SETUP',
  SET_TO_DB = 'Settings/Expansions/SupplySetups/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/SupplySetups/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/SupplySetups/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SupplySetups/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SupplySetups/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SupplySetups/FETCH_FROM_DB_FAILURE',
}

type SetupType = 'Predefined' | 'Custom'

export const actions = {
  noOp: () => createAction('NOOP'),
  toggleAll: () => createAction(ActionTypes.TOGGLE_ALL),
  toggleSetup: (setup: string, setupType: SetupType) =>
    createAction(ActionTypes.TOGGLE_SETUP, { setup, setupType }),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: State) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}

export type Action = ActionsUnion<typeof actions>

/////////////
// REDUCER //
/////////////

const allSetsAreSelected = (state: State) =>
  Object.values({ ...state.Predefined, ...state.Custom }).every(
    val => val.active
  )

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ALL: {
      const allSetsSelected = allSetsAreSelected(state)
      const newPredefined = Object.values(state.Predefined).reduce(
        (acc, setup) => ({
          ...acc,
          [setup.id]: {
            ...setup,
            active: setup.default ? true : !allSetsSelected,
          },
        }),
        {}
      )
      const newCustom = Object.values(state.Custom).reduce(
        (acc, setup) => ({
          ...acc,
          [setup.id]: { ...setup, active: !allSetsSelected },
        }),
        {}
      )
      const newState = { Predefined: newPredefined, Custom: newCustom }

      return loop(
        newState,
        Cmd.run<Action>(setToDb, {
          args: [SUPPLY_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.TOGGLE_SETUP: {
      const { setup, setupType } = action.payload
      const newState = {
        ...state,
        [setupType]: {
          ...state[setupType],
          [setup]: {
            ...state[setupType][setup],
            active: !state[setupType][setup].active,
          },
        },
      }

      return loop(
        newState,
        Cmd.run<Action>(setToDb, {
          args: [SUPPLY_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run<Action>(getFromDb, {
          args: [SUPPLY_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      return action.payload || initialState
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

const getState = (state: RootState) => state.Settings.SupplySetups
const getPredefined = (state: RootState) =>
  state.Settings.SupplySetups.Predefined
const getCustom = (state: RootState) => state.Settings.SupplySetups.Custom

const getPredefinedAsArray = createSelector(
  [getPredefined],
  predefined => Object.values(predefined).filter(setup => !setup.default)
)

const getCustomAsArray = createSelector(
  [getCustom],
  custom => Object.values(custom).filter(setup => !setup.default)
)

const getCustomAndPredefined = createSelector(
  [getPredefined, getCustom],
  (predefined, custom) => ({ ...predefined, ...custom })
)

const getAllAsArray = createSelector(
  [getCustomAndPredefined],
  customAndPredefined => Object.values(customAndPredefined)
)

const makeGetCustomAndPredefined = () => getCustomAndPredefined

const getAllExceptDefaultSets = createSelector(
  [getAllAsArray],
  allSets => allSets.filter(set => !set.default)
)

const getActiveSetups = createSelector(
  [getAllAsArray],
  allSets => allSets.filter(setup => setup.active)
)

const getAllSetsSelected = createSelector(
  [getState],
  state => allSetsAreSelected(state)
)

export const selectors = {
  getActiveSetups,
  getAllAsArray,
  getAllExceptDefaultSets,
  getAllSetsSelected,
  getCustom,
  getCustomAndPredefined,
  getCustomAsArray,
  getPredefined,
  getPredefinedAsArray,
  makeGetCustomAndPredefined,
}
