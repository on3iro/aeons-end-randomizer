import { LoopReducer } from 'redux-loop'

import { State, Action, ActionTypes } from './types'
import {
  createExpedition,
  deleteExpedition,
  rollBattle,
  startBattle,
  winBattle,
  loseBattle,
  rollLoss,
  acceptLoss,
  finishBattle,
  finishExpedition,
  fetchFromDB,
} from './reducerHelpers'

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
      return createExpedition(state, action)
    }

    case ActionTypes.DELETE_EXPEDITION: {
      return deleteExpedition(state, action)
    }

    case ActionTypes.ROLL_BATTLE: {
      return rollBattle(state, action)
    }

    case ActionTypes.START_BATTLE: {
      return startBattle(state, action)
    }

    case ActionTypes.WIN_BATTLE: {
      return winBattle(state, action)
    }

    case ActionTypes.LOSE_BATTLE: {
      return loseBattle(state, action)
    }

    case ActionTypes.ROLL_LOSS: {
      return rollLoss(state, action)
    }

    case ActionTypes.ACCEPT_LOSS: {
      return acceptLoss(state, action)
    }

    case ActionTypes.FINISH_BATTLE: {
      return finishBattle(state, action)
    }

    case ActionTypes.FINISH_EXPEDITION: {
      return finishExpedition(state, action)
    }

    case ActionTypes.FETCH_FROM_DB: {
      return fetchFromDB(state, action)
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
