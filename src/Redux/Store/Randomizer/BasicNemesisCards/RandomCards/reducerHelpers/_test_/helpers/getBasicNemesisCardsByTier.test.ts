import * as types from 'types'

import { getBasicNemesisCardsByTier } from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/reducerHelpers/helpers'

describe('getBasicNemesisCardsByTier()', () => {
  it('should return only correct cards', () => {
    const cards = [
      { tier: 1 },
      { tier: 2 },
      { tier: 3 },
      { tier: 1 },
    ] as types.BasicNemesisCard[]

    expect(getBasicNemesisCardsByTier(cards, 1)).toEqual([
      { tier: 1 },
      { tier: 1 },
    ])
  })
})
