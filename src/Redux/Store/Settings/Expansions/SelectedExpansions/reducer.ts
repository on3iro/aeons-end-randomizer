import { LoopReducer } from 'redux-loop'

import config from 'config'

import { Action, ActionTypes, State } from './types'

import * as reducerHelpers from './reducerHelpers'

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

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ALL: {
      return reducerHelpers.toggleAll(state)
    }

    case ActionTypes.TOGGLE_EXPANSION: {
      return reducerHelpers.toggleExpansion(state, action)
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
