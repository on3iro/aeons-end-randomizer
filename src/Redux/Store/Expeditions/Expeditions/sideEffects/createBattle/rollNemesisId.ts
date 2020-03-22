import * as types from 'types'

import {
  getRandomEntity,
  createIdList,
  createArrayWithDefaultValues,
} from 'Redux/helpers'

export const rollNemesisId = (
  nemesisIds: string[],
  getEntity: types.SeededEntityGetter = getRandomEntity
): { result: string; seed: types.Seed } => {
  const result = createIdList(
    nemesisIds,
    createArrayWithDefaultValues(1, 'EMPTY'),
    getEntity
  )

  return { result: result.result[0], seed: result.seed }
}
