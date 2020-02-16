import { LoopReducer } from 'redux-loop'

import { State, Action, ActionTypes } from './types'

export const initialState: State = 1

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.SET: {
      return action.payload
    }

    default: {
      return state
    }
  }
}
