import { LoopReducer } from 'redux-loop'

import { State, Action, ActionTypes } from './types'

export const initialState: State = {
  queue: [],
}

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.QUEUE: {
      const { type, message } = action.payload
      return {
        ...state,
        queue: [
          ...state.queue,
          {
            type,
            message,
          },
        ],
      }
    }
    case ActionTypes.DEQUEUE: {
      const [_head, ...tail] = state.queue // eslint-disable-line
      return {
        queue: tail,
      }
    }

    default: {
      return state
    }
  }
}
