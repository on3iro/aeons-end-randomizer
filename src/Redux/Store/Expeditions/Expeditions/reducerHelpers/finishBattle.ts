import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'
import { BattleStatus } from 'aer-types'

import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const finishBattle = (
  state: State,
  action: ReturnType<typeof actions.finishBattle>
) => {
  const { battle, newSupplyIds, banished } = action.payload
  const oldExpedition = state.expeditions[battle.expeditionId]
  const branches = oldExpedition.sequence.branches

  const { nextBranchId } = battle

  // Battles do currently only have one outcome
  const hasNext = !!nextBranchId && typeof nextBranchId === 'string'

  const newStatus: BattleStatus = 'finished'
  const nextBranchNewStatus: BattleStatus = 'unlocked'

  const updatedBranches = {
    ...branches,
    [battle.id]: {
      ...battle,
      status: newStatus,
    },
    ...(hasNext && {
      [nextBranchId as string]: {
        ...branches[nextBranchId as string],
        status: nextBranchNewStatus,
      },
    }),
  }

  const newTreasureIds = battle.rewards ? battle.rewards.treasure : []

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
