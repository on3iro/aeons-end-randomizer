import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import config from '../../../../config'
import * as types from '../../../../types'
import { RootState } from '../../'
import { sortByCardType } from '../../../../helpers'

const SUPPLY_DB_KEY = 'supplySetups-1.6' // FIXME this is a quickfix, see https://github.com/on3iro/aeons-end-randomizer/issues/138

const migrate = (
  oldSetups:
    | {
        Predefined: { [id: string]: types.IMarketSetup }
        Custom: { [id: string]: types.IMarketSetup }
      }
    | State
) => {
  if (!oldSetups) {
    return initialState
  }

  if (!oldSetups.Predefined.setups || !oldSetups.Custom.setups) {
    return {
      Predefined: {
        setups: oldSetups.Predefined,
        ids: Object.keys(oldSetups.Predefined),
      },
      Custom: {
        setups: oldSetups.Custom,
        ids: Object.keys(oldSetups.Custom),
      },
    } as State
  }

  return oldSetups as State
}

///////////
// STATE //
///////////

export type State = {
  Predefined: types.MarketSetups
  Custom: types.MarketSetups
}
export const initialState: State = {
  Predefined: config.MARKETSETUPS,
  Custom: {
    setups: {},
    ids: [],
  },
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_ALL = 'Settings/SupplySetups/TOGGLE_ALL',
  TOGGLE_SETUP = 'Settings/SupplySetups/TOGGLE_SETUP',
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
  Object.values({ ...state.Predefined.setups, ...state.Custom.setups }).every(
    val => val.active
  )

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ALL: {
      const allSetsSelected = allSetsAreSelected(state)
      const updatedPredefined = Object.values(state.Predefined.setups).reduce(
        (acc, setup) => ({
          ...acc,
          [setup.id]: {
            ...setup,
            active: setup.default ? true : !allSetsSelected,
          },
        }),
        {}
      )
      const updatedCustom = Object.values(state.Custom.setups).reduce(
        (acc, setup) => ({
          ...acc,
          [setup.id]: { ...setup, active: !allSetsSelected },
        }),
        {}
      )
      const newState = {
        Predefined: {
          ...state.Predefined,
          setups: updatedPredefined,
        },
        Custom: {
          ...state.Custom,
          setups: updatedCustom,
        },
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
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
          setups: {
            ...state[setupType].setups,
            [setup]: {
              ...state[setupType].setups[setup],
              active: !state[setupType].setups[setup].active,
            },
          },
        },
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [SUPPLY_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run(getFromDb, {
          args: [SUPPLY_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      // Migration from 1.6 to 2.0.0
      const newState = migrate(action.payload)

      return newState
    }

    case ActionTypes.FETCH_FROM_DB_FAILURE: {
      return state
    }

    case ActionTypes.SAVE_CUSTOM_SETUP: {
      const setup = action.payload
      // Because we currently do not have a specific mapping from Blueprints
      // to actual cards in the supply it is important,
      // that we keep the order of Gem -> Relic -> Spell for supply sets.
      // TODO is this still the case? \ Theo
      const tiles = [...setup.tiles].sort(sortByCardType)

      const ids = setup.isNew
        ? [setup.id, ...state.Custom.ids]
        : state.Custom.ids

      const newState = {
        ...state,
        Custom: {
          ...state.Custom,
          setups: {
            ...state.Custom.setups,
            [setup.id]: {
              ...setup,
              tiles,
              isNew: false,
              isDirty: false,
            },
          },
          ids,
        },
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
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
          setups: {
            ...state.Custom.setups,
            [id]: {
              ...state.Custom.setups[id],
              isDirty: true,
            },
          },
        },
      }
    }

    case ActionTypes.CANCEL_EDIT_SETUP: {
      const id = action.payload

      const { [id]: setup, ...rest } = state.Custom.setups

      if (setup.isNew) {
        return { ...state, Custom: { ...state.Custom, setups: { ...rest } } }
      }

      return {
        ...state,
        Custom: {
          ...state.Custom,
          setups: {
            ...rest,
            [id]: {
              ...setup,
              isDirty: false,
            },
          },
        },
      }
    }

    case ActionTypes.DELETE_CUSTOM_SETUP: {
      const id = action.payload

      const { [id]: setup, ...rest } = state.Custom.setups
      const newState = {
        ...state,
        Custom: {
          ids: state.Custom.ids.filter(customId => customId !== id),
          setups: { ...rest },
        },
      }

      return loop(
        newState,
        Cmd.run(setToDb, {
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

export type SupplySetupsStateSlice = {
  Settings: {
    SupplySetups: {
      Predefined: types.MarketSetups
      Custom: types.MarketSetups
    }
  }
}

export type PredefinedSupplySetupsStateSlice = {
  Settings: {
    SupplySetups: {
      Predefined: {
        setups: { [id: string]: types.IMarketSetup }
      }
    }
  }
}

export type PredefinedSupplySetupIdsStateSlice = {
  Settings: {
    SupplySetups: {
      Predefined: {
        ids: string[]
      }
    }
  }
}

export type CustomSupplySetupsStateSlice = {
  Settings: {
    SupplySetups: {
      Custom: {
        setups: { [id: string]: types.IMarketSetup }
      }
    }
  }
}

export type CustomSupplySetupIdsStateSlice = {
  Settings: {
    SupplySetups: {
      Custom: {
        ids: string[]
      }
    }
  }
}

const getState = (state: SupplySetupsStateSlice) => state.Settings.SupplySetups

const getPredefinedSetups = (state: PredefinedSupplySetupsStateSlice) =>
  state.Settings.SupplySetups.Predefined.setups

const getPredefinedIds = (state: PredefinedSupplySetupIdsStateSlice) =>
  state.Settings.SupplySetups.Predefined.ids

const getCustomSetups = (state: CustomSupplySetupsStateSlice) =>
  state.Settings.SupplySetups.Custom.setups

const getCustomIds = (state: CustomSupplySetupIdsStateSlice) =>
  state.Settings.SupplySetups.Custom.ids

const getPredefinedList = createSelector(
  [getPredefinedIds, getPredefinedSetups],
  (ids, setups) => ids.map(id => setups[id]).filter(setup => !setup.default)
)

const getCustomList = createSelector(
  [getCustomIds, getCustomSetups],
  (ids, setups) => ids.map(id => setups[id]).filter(setup => !setup.default)
)

const getCustomAndPredefined = createSelector(
  [getPredefinedSetups, getCustomSetups],
  (predefined, custom) => ({ ...predefined, ...custom })
)

const getAllAsArray = createSelector(
  [getCustomAndPredefined],
  customAndPredefined => Object.values(customAndPredefined)
)

const makeGetCustomAndPredefined = () => getCustomAndPredefined

const getAllExceptDefaultSets = createSelector([getAllAsArray], allSets =>
  allSets.filter(set => !set.default)
)

const getActiveSetups = createSelector([getAllAsArray], allSets =>
  allSets.filter(setup => setup.active)
)

const getAllSetsSelected = createSelector([getState], state =>
  allSetsAreSelected(state)
)

export const selectors = {
  getActiveSetups,
  getAllAsArray,
  getAllExceptDefaultSets,
  getAllSetsSelected,
  getCustomAndPredefined,
  getCustomList,
  getPredefinedList,
  makeGetCustomAndPredefined,
}
