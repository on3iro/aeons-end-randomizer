import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'

export const rollNewEntity = (
  list: string[],
  getEntity: <E>(list: Array<E>) => E = getRandomEntity
): string =>
  createIdList(list, createArrayWithDefaultValues(1, 'EMPTY'), getEntity)
    .result[0]
