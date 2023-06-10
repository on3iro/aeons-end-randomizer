import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'
import * as types from 'aer-types/types'

import { State } from '../types'
import { actions } from '../actions'

export const EXPEDITIONS_DB_KEY = 'expeditions-1.11.0'

export const updateBattle = (
  state: State,
  battle: types.Battle,
  additionalBattleProps?: {
    status?: types.BattleStatus
    tries?: number
    rewards?: types.Rewards
  }
) => {
  const oldExpedition = state.expeditions[battle.expeditionId]
  const branches = oldExpedition.sequence.branches

  const updatedBranches = {
    ...branches,
    [battle.id]: {
      ...battle,
      ...additionalBattleProps,
    },
  }

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [battle.expeditionId]: {
        ...oldExpedition,
        sequence: {
          ...oldExpedition.sequence,
          branches: updatedBranches,
        },
      },
    },
  }

  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [EXPEDITIONS_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}
