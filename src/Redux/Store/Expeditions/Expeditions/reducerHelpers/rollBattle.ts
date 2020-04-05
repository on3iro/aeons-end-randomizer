import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as sideEffects from '../sideEffects'
import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY } from './helpers'

export const rollBattle = (
  state: State,
  action: ReturnType<typeof actions.rollBattle>
) => {
  const { battle } = action.payload

  return loop(
    state,
    Cmd.run(sideEffects.createBattle, {
      args: [Cmd.getState, battle],
      successActionCreator: actions.rollBattleSuccess,
    })
  )
}

export const rollBattleSuccess = (
  state: State,
  action: ReturnType<typeof actions.rollBattleSuccess>
) => {
  const {
    battle,
    upgradedBasicNemesisCardIds,
    nemesisSeedState,
  } = action.payload

  const oldExpedition = state.expeditions[battle.expeditionId]
  const branches = oldExpedition.sequence.branches
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
          nemesisState: nemesisSeedState,
        },
        upgradedBasicNemesisCards: upgradedBasicNemesisCardIds,
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
