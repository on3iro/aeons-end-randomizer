import { LoopReducer } from 'redux-loop'

import { State, Action, ActionTypes } from './types'
import * as reducerHelpers from './reducerHelpers'

export const initialState: State = {
  Tier1: [],
  Tier2: [],
  Tier3: [],
}

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.CREATE: {
      return reducerHelpers.createDeck(state, action)
    }

    default: {
      return state
    }
  }
}
