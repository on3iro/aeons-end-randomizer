import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as sideEffects from '../sideEffects'
import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const rollLoss = (
  state: State,
  action: ReturnType<typeof actions.rollLoss>
) => {
  const { battle, rewardType } = action.payload

  return loop(
    state,
    Cmd.run(sideEffects.createLossRewards, {
      args: [Cmd.getState, battle, rewardType],
      successActionCreator: actions.rollLossSuccess,
    })
  )
}

export const rollLossSuccess = (
  state: State,
  action: ReturnType<typeof actions.rollLossSuccess>
) => {
  const { seed, ...battle } = action.payload
  const oldExpedition = state.expeditions[battle.expeditionId]
  const { branches } = oldExpedition.sequence

  const updatedBranches = {
    ...branches,
    [battle.id]: battle,
  }

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
