import * as types from 'aer-types/types'

import { getBasicNemesisCardsByTier } from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/reducerHelpers/helpers'

const cards = [
  { tier: 1 },
  { tier: 2 },
  { tier: 3 },
  { tier: 1 },
] as types.BasicNemesisCard[]

describe('getBasicNemesisCardsByTier()', () => {
  it('should return only correct cards', () => {
    const expected = [{ tier: 1 }, { tier: 1 }]

    const result = getBasicNemesisCardsByTier(cards, 1)

    expect(result).toEqual(expected)
  })
})
