import * as types from 'types'

import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'

export const rollNewEntity = (
  list: string[],
  getEntity: types.SeededEntityGetter = getRandomEntity,
  seed?: types.Seed
): { result: string; seed: types.Seed } => {
  const idList = createIdList(
    list,
    createArrayWithDefaultValues(1, 'EMPTY'),
    getEntity,
    seed
  )
  return {
    result: idList.result[0],
    seed: idList.seed,
  }
}
