import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as helpers from '../helpers'
import * as sideEffects from '../sideEffects'
import { State } from '../types'
import { actions } from '../actions'

import { EXPEDITIONS_DB_KEY, updateBattle } from './helpers'

// TODO RollLoss

export const rollLossSuccess = (
  state: State,
  action: ReturnType<typeof actions.rollLossSuccess>
) => {
  const battle = action.payload

  return updateBattle(state, battle)
}
