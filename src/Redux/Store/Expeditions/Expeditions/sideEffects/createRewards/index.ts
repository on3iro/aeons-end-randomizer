import * as types from 'aer-types/types'
import { GetStateFn } from 'Redux/helpers'

import { selectors } from 'Redux/Store'
import { handleCustomRewards } from 'Redux/Store/Expeditions/Expeditions/sideEffects/helpers'

// TODO add tests
export const createRewards = (getState: GetStateFn, reward: types.Reward) => {
  const state = getState()
  const expeditionId = reward.expeditionId
  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId }
  )

  // FIXME
  // it currently is possible that an id which is used as custom id is also being
  // rolle before its part of a reward
  // We definitely need a testcase for this, as well as the logic to avoid clashes like these

  // The 'regular' RewardsConfig property should only be used in other contexts
  // Which is why we opt out of doing anything, if it was mistakenly added to a
  // Reward-Branch
  if (reward.config.type === 'regular') {
    return {
      rewards: {
        treasure: [],
        mages: [],
        supplyIds: [],
      },
      seed: {
        seed: expedition.seed.seed,
        state: expedition.seed.supplyState,
      },
      expeditionId,
      branchId: reward.id,
    }
  } else {
    return {
      expeditionId,
      branchId: reward.id,
      ...handleCustomRewards(state, reward.config, expedition),
    }
  }
}
