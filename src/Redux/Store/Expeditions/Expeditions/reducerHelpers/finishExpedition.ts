import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'
import { BattleStatus } from 'aer-types/types'

import * as helpers from '../helpers'
import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const finishExpedition = (
  state: State,
  action: ReturnType<typeof actions.finishExpedition>
) => {
  const { branch } = action.payload
  const oldExpedition = state.expeditions[branch.expeditionId]
  const branches = oldExpedition.sequence.branches

  const newStatus: BattleStatus = 'finished'

  const updatedBranches = {
    ...branches,
    [branch.id]: {
      ...branch,
      status: newStatus,
    },
  }

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [branch.expeditionId]: {
        ...oldExpedition,
        ...(branch.type === 'battle'
          ? {
              score:
                oldExpedition.score + helpers.calcBattleScore(branch.tries),
            }
          : {}),
        sequence: {
          ...oldExpedition.sequence,
          branches: updatedBranches,
        },
        finished: true,
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
