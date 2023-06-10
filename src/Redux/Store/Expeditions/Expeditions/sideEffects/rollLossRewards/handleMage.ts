import * as types from 'aer-types/types'

import { getRandomEntity } from 'Redux/helpers'
import { rollNewEntity } from '../helpers'

export const handleMage = (
  battle: types.Battle,
  mageIds: string[],
  seed: types.Seed
) => {
  const newMageResult = rollNewEntity(mageIds, getRandomEntity, seed)
  const newMage = newMageResult.result

  return {
    ...battle,
    rewards: {
      treasure: [],
      mages: newMage ? [newMage] : [],
      supplyIds: [],
    },
    seed: newMageResult.seed,
  }
}
