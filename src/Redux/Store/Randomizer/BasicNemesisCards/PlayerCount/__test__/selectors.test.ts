import { PlayerCountStateSlice } from '../types'
import { selectors } from '../selectors'

const mockPlayerCount: PlayerCountStateSlice = {
  Randomizer: {
    BasicNemesisCards: {
      PlayerCount: 2,
    },
  },
}

describe('Randomizer | BasicNemesisCards | PlayerCount | selectors', () => {
  test('getCount()', () => {
    const result = selectors.getCount(mockPlayerCount)

    expect(result).toBe(2)
  })
})
