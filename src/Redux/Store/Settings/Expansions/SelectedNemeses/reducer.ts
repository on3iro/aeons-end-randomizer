import { LoopReducer } from 'redux-loop'

import config from 'config'

import { Action, ActionTypes, State } from './types'

import * as reducerHelpers from './reducerHelpers'

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

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_NEMESIS: {
      return reducerHelpers.toggleNemesis(state, action)
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
