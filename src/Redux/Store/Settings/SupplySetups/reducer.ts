import { LoopReducer } from 'redux-loop'

import AERData from 'aer-data'

import { Action, ActionTypes, State } from './types'

import * as reducerHelpers from './reducerHelpers'

export const initialState: State = {
  Predefined: AERData.marketsetups,
  Custom: {
    setups: {},
    ids: [],
  },
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
      return reducerHelpers.fetchFromDbSuccess(action)
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
