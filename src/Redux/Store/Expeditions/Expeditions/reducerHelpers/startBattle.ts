import { State } from '../types'
import { actions } from '../actions'

import { updateBattle } from './helpers'

export const startBattle = (
  state: State,
  action: ReturnType<typeof actions.startBattle>
) => {
  const { battle } = action.payload
  return updateBattle(state, battle, {
    tries: battle.tries + 1,
    status: 'started',
  })
}
