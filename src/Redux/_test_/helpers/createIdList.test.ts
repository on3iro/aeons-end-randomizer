import { createIdList, createArrayWithDefaultValues } from '../../helpers'
import { getRandomEntity } from 'Redux/helpers'

describe('createIdList()', () => {
  test.each([
    [['1', '2', '3', '4'], createArrayWithDefaultValues(1, 'EMPTY')],
    [['1', '2', '3', '4'], createArrayWithDefaultValues(3, 'EMPTY')],
    [['1', '2', '3', '4'], createArrayWithDefaultValues(4, 'EMPTY')],
    [['1', '2', '3'], createArrayWithDefaultValues(4, 'EMPTY')],
  ])('createIdList(%o, %o, %o)', (availableEntities, slots) => {
    expect(
      createIdList(availableEntities, slots, getRandomEntity, { seed: 'test' })
    ).toMatchSnapshot()
  })
})
