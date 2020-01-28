import { createSlotList } from '../../helpers'

describe('createSlotList()', () => {
  test.each([
    [1, [{ type: 'EMPTY', operation: 'NoOp' }]],
    [
      2,
      [
        { type: 'EMPTY', operation: 'NoOp' },
        { type: 'EMPTY', operation: 'NoOp' },
      ],
    ],
    [
      3,
      [
        { type: 'EMPTY', operation: 'NoOp' },
        { type: 'EMPTY', operation: 'NoOp' },
        { type: 'EMPTY', operation: 'NoOp' },
      ],
    ],
  ])('createSlotList(%i)', (a, expected) => {
    expect(createSlotList(a)).toEqual(expected)
  })
})
