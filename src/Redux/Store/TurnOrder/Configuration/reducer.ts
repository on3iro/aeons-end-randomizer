import { Action, ActionTypes, State } from './types'
import {
  INITIAL_MODE,
  INITIAL_PLAYER_SETUP,
  INITIAL_VARIATION,
} from './constants'

import * as reducerHelpers from './reducerHelpers'

export const initialState: State = {
  Mode: INITIAL_MODE,
  SelectedPlayerCount: INITIAL_PLAYER_SETUP,
  SelectedSetup: INITIAL_VARIATION,
}

export const Reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_MODE: {
      return reducerHelpers.setMode(state, action)
    }

    case ActionTypes.SELECT_PLAYER_COUNT: {
      return reducerHelpers.selectPlayerCount(state, action)
    }

    case ActionTypes.SELECT_SETUP: {
      return reducerHelpers.selectSetup(state, action)
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
