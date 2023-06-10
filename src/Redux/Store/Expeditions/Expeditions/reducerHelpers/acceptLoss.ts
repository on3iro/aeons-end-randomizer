import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as types from 'aer-types/types'

import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

const handleSkip = (
  state: State,
  action: ReturnType<typeof actions.acceptLoss>
) => {
  const { battle, banished, newSupplyIds } = action.payload

  const oldExpedition = state.expeditions[battle.expeditionId]
  const branches = oldExpedition.sequence.branches
  // FIXME fix type casting
  const branch = oldExpedition.sequence.branches[battle.id] as types.Battle

  const { nextBranchId } = branch

  // Battles do currently only have one outcome
  const hasNext = !!nextBranchId && typeof nextBranchId === 'string'

  const newStatus: types.BattleStatus = 'finished'
  const nextBranchNewStatus: types.BattleStatus = 'unlocked'

  const updatedBranches = {
    ...branches,
    [battle.id]: {
      ...branch,
      status: newStatus,
      rewards: undefined,
    },
    ...(hasNext && {
      [nextBranchId as string]: {
        ...branches[nextBranchId as string],
        status: nextBranchNewStatus,
      },
    }),
  }

  const newTreasureIds = battle.rewards ? battle.rewards.treasure : []
  const newMageIds =
    battle.rewards && battle.rewards.mages ? battle.rewards.mages : []

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

const handleRegular = (
  state: State,
  action: ReturnType<typeof actions.acceptLoss>
) => {
  const { battle, banished, newSupplyIds } = action.payload

  const oldExpedition = state.expeditions[battle.expeditionId]
  const branches = oldExpedition.sequence.branches
  // FIXME fix type casting
  const branch = oldExpedition.sequence.branches[battle.id] as types.Battle

  const newStatus: types.BattleStatus = 'before_battle'

  const updatedBranches = {
    ...branches,
    [battle.id]: {
      ...branch,
      status: newStatus,
      rewards: undefined,
    },
  }

  const newTreasureIds = battle.rewards ? battle.rewards.treasure : []
  const newMageIds =
    battle.rewards && battle.rewards.mages ? battle.rewards.mages : []

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

export const acceptLoss = (
  state: State,
  action: ReturnType<typeof actions.acceptLoss>
) => {
  const { battle } = action.payload

  const oldExpedition = state.expeditions[battle.expeditionId]
  // FIXME fix type casting
  const branch = oldExpedition.sequence.branches[battle.id] as types.Battle

  switch (branch.config?.onLoss) {
    case 'skip': {
      return handleSkip(state, action)
    }

    default: {
      return handleRegular(state, action)
    }
  }
}
