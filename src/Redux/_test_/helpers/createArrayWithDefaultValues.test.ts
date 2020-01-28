import { createArrayWithDefaultValues } from '../../helpers'

describe('createArrayWithDefaultValues()', () => {
  test.each([
    [1, 'noop', ['noop']],
    [2, { foo: 'bar' }, [{ foo: 'bar' }, { foo: 'bar' }]],
    [3, 'EMPTY', ['EMPTY', 'EMPTY', 'EMPTY']],
  ])('createArrayWithDefaultValues(%d, %o)', (size, defaultValue, expected) => {
    expect(createArrayWithDefaultValues(size, defaultValue)).toEqual(expected)
  })
})
