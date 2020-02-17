import { loop, Cmd } from 'redux-loop'

import * as sideEffects from '../sideEffects'
import { State } from '../types'
import { actions } from '../actions'

import { updateBattle } from './helpers'

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
  const battle = action.payload

  return updateBattle(state, battle)
}
