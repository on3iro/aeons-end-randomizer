import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import { Status } from 'aer-types/types'

import { EXPEDITIONS_DB_KEY } from './helpers'

import { State } from '../types'
import { actions } from '../actions'

export const resolveNarrative = (
  state: State,
  action: ReturnType<typeof actions.resolveNarrative>
) => {
  const { expeditionId, narrativeId, decision } = action.payload
  const oldExpedition = state.expeditions[expeditionId]
  const branches = oldExpedition.sequence.branches
  const narrative = branches[narrativeId]

  const nextBranchId = narrative.nextBranchId
    ? narrative.nextBranchId[decision]
    : false

  const hasNext = !!nextBranchId

  const newStatus: Status = 'finished'
  const nextBranchNewStatus: Status = 'unlocked'

  const updatedBranches = {
    ...branches,
    [narrative.id]: {
      ...narrative,
      status: newStatus,
    },
    ...(hasNext && {
      [nextBranchId as string]: {
        ...branches[nextBranchId as string],
        status: nextBranchNewStatus,
      },
    }),
  }

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [expeditionId]: {
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
