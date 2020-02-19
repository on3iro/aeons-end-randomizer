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
    Cmd.run(sideEffects.rollLossRewards, {
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
  const oldBattleList = oldExpedition.battles

  const battleIndex = oldBattleList.findIndex(
    oldBattle => oldBattle.id === battle.id
  )

  const updatedBattles = Object.assign([...oldBattleList], {
    [battleIndex]: {
      ...battle,
    },
  })

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [battle.expeditionId]: {
        ...oldExpedition,
        seed,
        battles: updatedBattles,
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
