import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as types from 'aer-types/types'
import * as helpers from '../helpers'
import * as sideEffects from '../sideEffects'
import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const winBattle = (
  state: State,
  action: ReturnType<typeof actions.winBattle>
) => {
  const battle = action.payload

  return loop(
    state,
    Cmd.run(sideEffects.createWinRewards, {
      args: [Cmd.getState, battle],
      successActionCreator: actions.winBattleSuccess,
    })
  )
}

export const winBattleSuccess = (
  state: State,
  action: ReturnType<typeof actions.winBattleSuccess>
) => {
  const { battle, seed } = action.payload
  const oldExpedition = state.expeditions[battle.expeditionId]
  const { branches } = oldExpedition.sequence

  const newStatus: types.BattleStatus = 'won'

  const updatedBranches = {
    ...branches,
    [battle.id]: {
      ...battle,
      status: newStatus,
    },
  }

  const battleScore = helpers.calcBattleScore(battle.tries)

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [battle.expeditionId]: {
        ...oldExpedition,
        seed: {
          ...oldExpedition.seed,
          supplyState: seed.state || true,
        },
        score: oldExpedition.score + battleScore,
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
