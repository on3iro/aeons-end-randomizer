import * as types from 'types'

import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'

export const rollNewEntity = (
  list: string[],
  getEntity: types.SeededEntityGetter = getRandomEntity
): string =>
  createIdList(list, createArrayWithDefaultValues(1, 'EMPTY'), getEntity)
    .result[0]
