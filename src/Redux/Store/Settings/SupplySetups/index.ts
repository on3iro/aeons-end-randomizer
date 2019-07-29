import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'
import shortid from 'shortid'

import config from '../../../../config'
import * as types from '../../../../types'
import { RootState } from '../../'

const SUPPLY_DB_KEY = 'supplySetups-1.6' // FIXME this is a quickfix, see https://github.com/on3iro/aeons-end-randomizer/issues/138

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
  TOGGLE_ALL = 'Settings/SupplySetups/TOGGLE_ALL',
  TOGGLE_SETUP = 'Settings/SupplySetups/TOGGLE_SETUP',
  CREATE_CUSTOM_SETUP = 'Settings/SupplySetups/CREATE_CUSTOM_SETUP',
  SAVE_CUSTOM_SETUP = 'Settings/SupplySetups/SAVE_CUSTOM_SETUP',
  CANCEL_EDIT_SETUP = 'Settings/SupplySetups/CANCEL_EDIT_SETUP',
  EDIT_CUSTOM_SETUP = 'Settings/SupplySetups/EDIT_CUSTOM_SETUP',
  DELETE_CUSTOM_SETUP = 'Settings/SupplySetups/DELETE_CUSTOM_SETUP',
  SET_TO_DB = 'Settings/SupplySetups/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/SupplySetups/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/SupplySetups/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/SupplySetups/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/SupplySetups/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/SupplySetups/FETCH_FROM_DB_FAILURE',
}

type SetupType = 'Predefined' | 'Custom'

export const actions = {
  noOp: () => createAction('NOOP'),
  toggleAll: () => createAction(ActionTypes.TOGGLE_ALL),
  toggleSetup: (setup: string, setupType: SetupType) =>
    createAction(ActionTypes.TOGGLE_SETUP, { setup, setupType }),
  createCustomSetup: () =>
    createAction(ActionTypes.CREATE_CUSTOM_SETUP, shortid.generate()),
  saveCustomSetup: (setup: types.IMarketSetup) =>
    createAction(ActionTypes.SAVE_CUSTOM_SETUP, setup),
  cancelEdit: (id: string) => createAction(ActionTypes.CANCEL_EDIT_SETUP, id),
  editCustomSetup: (id: string) =>
    createAction(ActionTypes.EDIT_CUSTOM_SETUP, id),
  deleteCustomSetup: (id: string) =>
    createAction(ActionTypes.DELETE_CUSTOM_SETUP, id),
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

    case ActionTypes.CREATE_CUSTOM_SETUP: {
      const id = action.payload
      return {
        ...state,
        Custom: {
          [id]: {
            id,
            name: '',
            type: 'custom',
            active: false,
            tiles: [],
            isDirty: true,
            isNew: true,
          },
          ...state.Custom,
        },
      }
    }

    case ActionTypes.SAVE_CUSTOM_SETUP: {
      const setup = action.payload
      // Because we currently do not have a specific mapping from Blueprints
      // to actual cards in the supply it is important,
      // that we keep the order of Gem -> Relic -> Spell for supply sets.
      const tiles = [...setup.tiles].sort((a, b) => {
        if (a.type === 'Gem') {
          return -1
        }

        if (a.type === 'Relic' && b.type === 'Spell') {
          return -1
        }

        return 1
      })

      const newState = {
        ...state,
        Custom: {
          ...state.Custom,
          [setup.id]: {
            ...setup,
            tiles,
            isNew: false,
            isDirty: false,
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

    case ActionTypes.EDIT_CUSTOM_SETUP: {
      const id = action.payload

      return {
        ...state,
        Custom: {
          ...state.Custom,
          [id]: {
            ...state.Custom[id],
            isDirty: true,
          },
        },
      }
    }

    case ActionTypes.CANCEL_EDIT_SETUP: {
      const id = action.payload

      const { [id]: setup, ...rest } = state.Custom

      if (setup.isNew) {
        return { ...state, Custom: { ...rest } }
      }

      return {
        ...state,
        Custom: {
          ...rest,
          [id]: {
            ...setup,
            isDirty: false,
          },
        },
      }
    }

    // FIXME should prompt the user if he really wants to delete the setup
    case ActionTypes.DELETE_CUSTOM_SETUP: {
      const id = action.payload

      const { [id]: setup, ...rest } = state.Custom
      const newState = { ...state, Custom: { ...rest } }

      return loop(
        newState,
        Cmd.run<Action>(setToDb, {
          args: [SUPPLY_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
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
