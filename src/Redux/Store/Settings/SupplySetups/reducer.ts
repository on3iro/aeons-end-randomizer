import { LoopReducer } from 'redux-loop'

import AERData from 'aer-data/src/index'

import { Action, ActionTypes, State } from './types'

import * as reducerHelpers from './reducerHelpers'

const marketSetupsWithTileIds = Object.values(
  AERData.marketsetups.setups
).reduce((acc, setup) => {
  return {
    ...acc,
    [setup.id]: {
      ...setup,
      tiles: setup.tiles.map((tile, index) => ({ ...tile, id: index })),
    },
  }
}, {})

export const initialState: State = {
  Predefined: {
    setups: marketSetupsWithTileIds,
    ids: AERData.marketsetups.ids,
  },
  Custom: {
    setups: {},
    ids: [],
  },
  migrationVersion: 0,
}

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ALL: {
      return reducerHelpers.toggleAll(state)
    }

    case ActionTypes.TOGGLE_SETUP: {
      return reducerHelpers.toggleSetup(state, action)
    }

    case ActionTypes.FETCH_FROM_DB: {
      return reducerHelpers.fetchFromDb(state)
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      return reducerHelpers.migrateAfterFetch(state, action)
    }

    case ActionTypes.MIGRATION_SUCCESS: {
      return reducerHelpers.migrateAfterFetchSuccess(state, action)
    }

    case ActionTypes.FETCH_FROM_DB_FAILURE: {
      return state
    }

    case ActionTypes.SAVE_CUSTOM_SETUP: {
      return reducerHelpers.saveCustomSetup(state, action)
    }

    case ActionTypes.EDIT_CUSTOM_SETUP: {
      return reducerHelpers.editCustomSetup(state, action)
    }

    case ActionTypes.CANCEL_EDIT_SETUP: {
      return reducerHelpers.cancelEditSetup(state, action)
    }

    case ActionTypes.DELETE_CUSTOM_SETUP: {
      return reducerHelpers.deleteCustomSetup(state, action)
    }

    default: {
      return state
    }
  }
}
