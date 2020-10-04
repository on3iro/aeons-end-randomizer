import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'

import * as types from 'aer-types/types'

export const rollTreasureIdsByLevel = (
  stillAvailableTreasureIds: string[],
  amountOfTreasures: number,
  getEntity: types.SeededEntityGetter = getRandomEntity,
  seed: types.Seed
) => {
  const newTreasures =
    stillAvailableTreasureIds.length > 0
      ? createIdList(
          stillAvailableTreasureIds,
          createArrayWithDefaultValues(amountOfTreasures, 'EMPTY'),
          getEntity,
          seed
        )
      : { result: [], seed }

  return newTreasures
}
