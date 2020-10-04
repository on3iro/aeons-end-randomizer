import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'
import * as types from 'aer-types/types'

export const createTreasureIds = (
  firstBattleConfig: types.BattleConfig,
  availableLevel1TreasureIds: string[],
  seed: types.Seed
) => {
  const startsWithTreasure =
    firstBattleConfig.tier > 1 && firstBattleConfig.treasure.hasTreasure

  return startsWithTreasure
    ? createIdList(
        availableLevel1TreasureIds,
        createArrayWithDefaultValues(5, 'EMPTY'),
        getRandomEntity,
        seed
      )
    : { result: [], seed }
}
