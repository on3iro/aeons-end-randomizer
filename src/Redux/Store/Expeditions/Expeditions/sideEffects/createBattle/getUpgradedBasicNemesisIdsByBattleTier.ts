import * as types from 'aer-types/types'

import {
  getRandomEntity,
  createIdList,
  createArrayWithDefaultValues,
} from 'Redux/helpers'

// Because we always add these cards to an existing array inside our expedition in our store,
// the count of newly added cards decreases by tier.
// If we ever have a variant, that starts higher than tier 2 we have to
// incorporate changes to roll the whole amount of cards per tier!
export const getUpgradedBasicNemesisIdsByBattleTier = ({
  availableTier1Ids,
  availableTier2Ids,
  availableTier3Ids,
  battleTier,
  getEntity = getRandomEntity,
  seed,
}: {
  availableTier1Ids: string[]
  availableTier2Ids: string[]
  availableTier3Ids: string[]
  battleTier: 1 | 2 | 3 | 4
  getEntity: types.SeededEntityGetter
  seed: types.Seed
}): { result: string[]; seed: types.Seed } => {
  switch (battleTier) {
    case 1: {
      return { result: [], seed } // No upgraded cards are added on tier 1
    }

    case 2: {
      const tier1IdsResult = createIdList(
        availableTier1Ids,
        createArrayWithDefaultValues(1, 'EMPTY'),
        (availableIds) => getEntity(availableIds, seed)
      )

      const tier2IdsResult = createIdList(
        availableTier2Ids,
        createArrayWithDefaultValues(3, 'EMPTY'),
        (availableIds) => getEntity(availableIds, tier1IdsResult.seed)
      )

      const tier3IdsResult = createIdList(
        availableTier3Ids,
        createArrayWithDefaultValues(3, 'EMPTY'),
        (availableIds) => getEntity(availableIds, tier2IdsResult.seed)
      )

      return {
        result: [
          ...tier1IdsResult.result,
          ...tier2IdsResult.result,
          ...tier3IdsResult.result,
        ],
        seed: tier3IdsResult.seed,
      }
    }

    case 3:
    case 4: {
      const tier1IdsResult = createIdList(
        availableTier1Ids,
        createArrayWithDefaultValues(1, 'EMPTY'),
        (availableIds) => getEntity(availableIds, seed)
      )

      const tier2IdsResult = createIdList(
        availableTier2Ids,
        createArrayWithDefaultValues(1, 'EMPTY'),
        (availableIds) => getEntity(availableIds, tier1IdsResult.seed)
      )

      const tier3IdsResult = createIdList(
        availableTier3Ids,
        createArrayWithDefaultValues(2, 'EMPTY'),
        (availableIds) => getEntity(availableIds, tier2IdsResult.seed)
      )

      return {
        result: [
          ...tier1IdsResult.result,
          ...tier2IdsResult.result,
          ...tier3IdsResult.result,
        ],
        seed: tier3IdsResult.seed,
      }
    }

    default: {
      return { result: [], seed } // Should never occur!
    }
  }
}
