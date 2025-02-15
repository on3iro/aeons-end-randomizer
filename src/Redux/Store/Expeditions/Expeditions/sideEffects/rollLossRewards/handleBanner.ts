import * as types from 'aer-types/types'

import { getRandomEntity } from 'Redux/helpers'
import { rollNewEntity } from '../helpers'

export const handleBanner = (
  battle: types.Battle,
  bannerIds: string[],
  seed: types.Seed
) => {
  const newBannerResult = rollNewEntity(bannerIds, getRandomEntity, seed)
  const newBanner = newBannerResult.result

  return {
    ...battle,
    rewards: {
      treasure: [],
      mages: [],
      supplyIds: [],
      bannerIds: newBanner ? [newBanner] : [],
    },
    seed: newBannerResult.seed,
  }
}