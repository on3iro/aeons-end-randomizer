import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as sideEffects from '../sideEffects'
import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const generateRewards = (
  state: State,
  action: ReturnType<typeof actions.generateRewards>
) => {
  const { reward } = action.payload

  return loop(
    state,
    Cmd.run(sideEffects.createRewards, {
      args: [Cmd.getState, reward],
      successActionCreator: actions.generateRewardsSuccess,
    })
  )
}

export const generateRewardsSuccess = (
  state: State,
  action: ReturnType<typeof actions.generateRewardsSuccess>
) => {
  const { rewards, seed, expeditionId, branchId } = action.payload
  const oldExpedition = state.expeditions[expeditionId]
  const { branches } = oldExpedition.sequence
  const branch = oldExpedition.sequence.branches[branchId]

  const updatedBranches = {
    ...branches,
    [branchId]: {
      ...branch,
      rewards,
    },
  }

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [expeditionId]: {
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
