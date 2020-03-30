import { LoopReducer } from 'redux-loop'

import config from 'config'

import { Action, ActionTypes, State } from './types'

import * as reducerHelpers from './reducerHelpers'

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

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MAGE: {
      return reducerHelpers.toggleMage(state, action)
    }

    case ActionTypes.FETCH_FROM_DB: {
      return reducerHelpers.fetchFromDb(state)
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      return reducerHelpers.fetchFromDbSuccess(state, action)
    }

    case ActionTypes.FETCH_FROM_DB_FAILURE: {
      return state
    }

    default: {
      return state
    }
  }
}
