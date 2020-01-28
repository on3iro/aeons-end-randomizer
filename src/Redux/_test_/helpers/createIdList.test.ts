import { createIdList, createArrayWithDefaultValues } from '../../helpers'

const getFirst = (available: any[]) => available[0]

describe('createIdList()', () => {
  test.each([
    [
      ['1', '2', '3', '4'],
      createArrayWithDefaultValues(1, 'EMPTY'),
      getFirst,
      {
        availableEntities: ['2', '3', '4'],
        result: ['1'],
      },
    ],
    [
      ['1', '2', '3', '4'],
      createArrayWithDefaultValues(3, 'EMPTY'),
      getFirst,
      {
        availableEntities: ['4'],
        result: ['1', '2', '3'],
      },
    ],
    [
      ['1', '2', '3', '4'],
      createArrayWithDefaultValues(4, 'EMPTY'),
      getFirst,
      {
        availableEntities: [],
        result: ['1', '2', '3', '4'],
      },
    ],
    [
      ['1', '2', '3'],
      createArrayWithDefaultValues(4, 'EMPTY'),
      getFirst,
      {
        availableEntities: [],
        result: ['1', '2', '3'],
      },
    ],
  ])(
    'createIdList(%o, %o, %o)',
    (availableEntities, slots, entityGetter, expected) => {
      expect(createIdList(availableEntities, slots, entityGetter)).toEqual(
        expected
      )
    }
  )
})
