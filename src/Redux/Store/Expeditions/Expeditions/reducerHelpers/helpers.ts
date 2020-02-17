import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'
import * as types from 'types'

import { State } from '../types'
import { actions } from '../actions'

export const EXPEDITIONS_DB_KEY = 'expeditions-1.11.0'

export const updateBattle = (
  state: State,
  battle: types.Battle,
  additionalBattleProps?: {
    status?: types.BattleStatus
    tries?: number
    rewards?: null
  }
) => {
  const oldExpedition = state.expeditions[battle.expeditionId]
  const oldBattleList = oldExpedition.battles

  const battleIndex = oldBattleList.findIndex(
    oldBattle => oldBattle.id === battle.id
  )

  const updatedBattles = Object.assign([...oldBattleList], {
    [battleIndex]: {
      ...battle,
      ...additionalBattleProps,
    },
  })

  const newState = {
    ...state,
    expeditions: {
      ...state.expeditions,
      [battle.expeditionId]: {
        ...oldExpedition,
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
