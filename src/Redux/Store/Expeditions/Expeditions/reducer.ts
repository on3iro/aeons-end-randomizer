import { LoopReducer } from 'redux-loop'

import { State, Action, ActionTypes } from './types'
import * as reducerHelpers from './reducerHelpers'

export const initialState: State = {
  expeditions: {},
  expeditionIds: [],
}

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.CREATE_EXPEDITION: {
      return reducerHelpers.createExpedition(state, action)
    }

    case ActionTypes.CREATE_EXPEDITION_SUCCESS: {
      return reducerHelpers.createExpeditionSuccess(state, action)
    }

    case ActionTypes.DELETE_EXPEDITION: {
      return reducerHelpers.deleteExpedition(state, action)
    }

    case ActionTypes.ROLL_BATTLE: {
      return reducerHelpers.rollBattle(state, action)
    }

    case ActionTypes.START_BATTLE: {
      return reducerHelpers.startBattle(state, action)
    }

    case ActionTypes.WIN_BATTLE: {
      return reducerHelpers.winBattle(state, action)
    }

    case ActionTypes.LOSE_BATTLE: {
      return reducerHelpers.loseBattle(state, action)
    }

    case ActionTypes.ROLL_LOSS: {
      return reducerHelpers.rollLoss(state, action)
    }

    case ActionTypes.ACCEPT_LOSS: {
      return reducerHelpers.acceptLoss(state, action)
    }

    case ActionTypes.FINISH_BATTLE: {
      return reducerHelpers.finishBattle(state, action)
    }

    case ActionTypes.FINISH_EXPEDITION: {
      return reducerHelpers.finishExpedition(state, action)
    }

    case ActionTypes.FETCH_FROM_DB: {
      return reducerHelpers.fetchFromDB(state, action)
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      return action.payload || state
    }

    case ActionTypes.FETCH_FROM_DB_FAILURE: {
      return state
    }

    default: {
      return state
    }
  }
}
