import { LoopReducer } from 'redux-loop'

import { Action, ActionTypes, State } from './types'

import * as reducerHelpers from './reducerHelpers'

export const initialState: State = {
  deck: [],
  discard: [],
  started: false,
  round: 1,
}

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.INIT: {
      return action.payload
    }

    case ActionTypes.DRAW: {
      return reducerHelpers.draw(state)
    }

    case ActionTypes.NEW_ROUND: {
      return reducerHelpers.newRound(state, action)
    }

    case ActionTypes.ADD_TO_TOP: {
      return reducerHelpers.addToTop(state, action)
    }

    case ActionTypes.ADD_TO_BOTTOM: {
      return reducerHelpers.addToBottom(state, action)
    }

    case ActionTypes.SHUFFLE_INTO_DECK: {
      return reducerHelpers.shuffleIntoDeck(state, action)
    }

    case ActionTypes.START_GAME: {
      return reducerHelpers.startGame(action)
    }

    case ActionTypes.RESET_GAME: {
      return reducerHelpers.resetGame()
    }

    case ActionTypes.FETCH_FROM_DB: {
      return reducerHelpers.fetchFromDb(state)
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      return reducerHelpers.fetchFromDbSuccess(state, action)
    }

    default: {
      return state
    }
  }
}
