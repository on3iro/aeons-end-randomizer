import * as types from 'aer-types/types'

import { getRandomEntity } from 'Redux/helpers'
import { rollNewEntity } from '../helpers'

export const handleTreasure = (
  battle: types.Battle,
  treasureIds: string[],
  seed: types.Seed
) => {
  const newTreasureResult = rollNewEntity(treasureIds, getRandomEntity, seed)
  const newTreasure = newTreasureResult.result

  return {
    ...battle,
    rewards: {
      treasure: newTreasure ? [newTreasure] : [],
      mages: [],
      supplyIds: [],
    },
    seed: newTreasureResult.seed,
  }
}
