import { getOperationString } from '../../helpers'

describe('getOperationString()', () => {
  test.each([
    ['<', undefined, 3, '< 3'],
    ['>', undefined, 3, '> 3'],
    ['=', undefined, 3, '= 3'],
    ['<=', undefined, 3, '<= 3'],
    ['>=', undefined, 3, '>= 3'],
    ['ANY', [1, 2, 3], 3, 'ANY'],
    ['ANY', undefined, undefined, 'ANY'],
    ['NoOp', undefined, undefined, ''],
    ['OR', [1, 2, 3], undefined, '1/2/3'],
    ['OR', [2, 3], undefined, '2/3'],
  ])(
    'getOperationString(%s, %o, %i)',
    (operation, values, threshold, expected) => {
      expect(getOperationString(operation, values, threshold)).toBe(expected)
    }
  )
})
