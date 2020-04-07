import * as types from 'types'

import { RootState } from 'Redux/Store'
import { handleCustomRewards } from 'Redux/Store/Expeditions/Expeditions/sideEffects/helpers'

export const createRewards = (
  getState: () => RootState,
  reward: types.Reward
) => {
  const state = getState()
  return handleCustomRewards(state, reward)
}
