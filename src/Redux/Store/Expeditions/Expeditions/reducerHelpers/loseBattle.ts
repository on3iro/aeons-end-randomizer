import { State } from '../types'
import { actions } from '../actions'

import { updateBattle } from './helpers'

export const loseBattle = (
  state: State,
  action: ReturnType<typeof actions.loseBattle>
) => {
  const { battle } = action.payload
  return updateBattle(state, battle, { status: 'lost' })
}
