import * as types from 'types'

import { getRandomEntity } from 'Redux/helpers'
import { rollNewEntity } from '../helpers'

export const handleSupply = (
  battle: types.Battle,
  supplyIds: string[],
  seed: types.Seed
) => {
  const newSupplyItemResult = rollNewEntity(supplyIds, getRandomEntity, seed)
  const newSupplyItemId = newSupplyItemResult.result

  return {
    ...battle,
    rewards: {
      treasure: [],
      mage: undefined,
      supplyIds: newSupplyItemId ? [newSupplyItemId] : [],
    },
    seed: newSupplyItemResult.seed,
  }
}
