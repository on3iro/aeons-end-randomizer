import * as types from 'aer-types'

import { RootState } from 'Redux/Store'
import { handleCustomRewards } from 'Redux/Store/Expeditions/Expeditions/sideEffects/helpers'

// TODO add tests
export const createRewards = (
  getState: () => RootState,
  reward: types.Reward
) => {
  const state = getState()
  return {
    expeditionId: reward.expeditionId,
    branchId: reward.id,
    ...handleCustomRewards(state, reward),
  }
}
