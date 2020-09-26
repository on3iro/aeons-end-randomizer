import { LoopReducer } from 'redux-loop'

import { State, Action, ActionTypes } from './types'
import * as reducerHelpers from './reducerHelpers'

export const initialState: State = {
  expeditions: {},
  expeditionIds: [],
}

export const isExpeditionState = (value: unknown): value is State => {
  if (typeof value !== 'object' || !value) {
    return false
  } else {
    return 'expeditions' in value && 'expeditionIds' in value
  }
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

    case ActionTypes.ROLL_BATTLE_SUCCESS: {
      return reducerHelpers.rollBattleSuccess(state, action)
    }

    case ActionTypes.START_BATTLE: {
      return reducerHelpers.startBattle(state, action)
    }

    case ActionTypes.WIN_BATTLE: {
      return reducerHelpers.winBattle(state, action)
    }

    case ActionTypes.WIN_BATTLE_SUCCESS: {
      return reducerHelpers.winBattleSuccess(state, action)
    }

    case ActionTypes.LOSE_BATTLE: {
      return reducerHelpers.loseBattle(state, action)
    }

    case ActionTypes.ROLL_LOSS: {
      return reducerHelpers.rollLoss(state, action)
    }

    case ActionTypes.ROLL_LOSS_SUCCESS: {
      return reducerHelpers.rollLossSuccess(state, action)
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
      if (!action.payload) {
        return state
      }
      return reducerHelpers.migrateAfterFetch(state, action)
    }

    case ActionTypes.SETTINGS_SNAPSHOT_MIGRATION_SUCCESS: {
      return reducerHelpers.migrateAfterFetchSuccess(state, action)
    }

    case ActionTypes.FETCH_FROM_DB_FAILURE: {
      return state
    }

    case ActionTypes.EXPEDITION_SHARE: {
      return reducerHelpers.shareExpedition(state, action)
    }

    case ActionTypes.EXPEDITION_SHARE_SUCCESS: {
      return reducerHelpers.shareExpeditionSuccess(state, action)
    }

    case ActionTypes.EXPEDITION_SHARE_FAILURE: {
      return reducerHelpers.shareExpeditionFailure(state, action)
    }

    case ActionTypes.NARRATIVE_RESOLVE: {
      return reducerHelpers.resolveNarrative(state, action)
    }

    case ActionTypes.REWARDS_GENERATE: {
      return reducerHelpers.generateRewards(state, action)
    }

    case ActionTypes.REWARDS_GENERATE_SUCCESS: {
      return reducerHelpers.generateRewardsSuccess(state, action)
    }

    case ActionTypes.REWARDS_ACCEPT: {
      return reducerHelpers.acceptRewards(state, action)
    }

    default: {
      return state
    }
  }
}
