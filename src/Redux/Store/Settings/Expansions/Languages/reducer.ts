import { LoopReducer } from 'redux-loop'

import AERData from 'aer-data'

import { Action, ActionTypes, State } from './types'

import * as reducerHelpers from './reducerHelpers'

export const initialState: State = AERData.normalizedData.ENG.expansionIds.reduce(
  (acc, id) => {
    return {
      ...acc,
      [id]: 'ENG',
    }
  },
  {}
)

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.SELECT: {
      return reducerHelpers.select(state, action)
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
