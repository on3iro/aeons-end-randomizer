import { MagesCountStateSlice, selectors } from '..'

const mockMagesCount: MagesCountStateSlice = {
  Randomizer: {
    Mages: {
      Count: 2,
    },
  },
}

describe('Randomizer | Mages | Count | selectors', () => {
  test('getCount()', () => {
    const result = selectors.getCount(mockMagesCount)

    expect(result).toBe(2)
  })
})
