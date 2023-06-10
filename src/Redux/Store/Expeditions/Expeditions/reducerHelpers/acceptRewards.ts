import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as types from 'aer-types/types'

import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const acceptRewards = (
  state: State,
  action: ReturnType<typeof actions.acceptRewards>
) => {
  const { reward, banished, newSupplyIds } = action.payload

  const oldExpedition = state.expeditions[reward.expeditionId]
  const branches = oldExpedition.sequence.branches
  // FIXME fix type casting
  const branch = oldExpedition.sequence.branches[reward.id] as types.Reward

  const nextBranchId = reward?.nextBranchId
  const hasNext = !!nextBranchId

  const newStatus: types.Status = 'finished'
  const nextBranchNewStatus: types.Status = 'unlocked'

  const updatedBranches = {
    ...branches,
    [reward.id]: {
      ...branch,
      status: newStatus,
    },
    ...(hasNext && {
      [nextBranchId as string]: {
        ...branches[nextBranchId as string],
        status: nextBranchNewStatus,
      },
    }),
  }

  const newTreasureIds = reward.rewards ? reward.rewards.treasure : []
  const newMageIds =
    reward.rewards && reward.rewards.mages ? reward.rewards.mages : []

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [reward.expeditionId]: {
        ...oldExpedition,
        sequence: {
          ...oldExpedition.sequence,
          branches: updatedBranches,
        },
        barracks: {
          ...oldExpedition.barracks,
          treasureIds: [
            ...oldExpedition.barracks.treasureIds,
            ...newTreasureIds,
          ],
          supplyIds: newSupplyIds,
          mageIds: [...oldExpedition.barracks.mageIds, ...newMageIds],
        },
        banished: [...oldExpedition.banished, ...banished],
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
