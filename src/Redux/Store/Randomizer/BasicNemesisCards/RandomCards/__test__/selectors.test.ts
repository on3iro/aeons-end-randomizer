import { RandomCardsStateSlice } from '../types'
import { selectors } from '../selectors'

const mockBasicNemesisCards: RandomCardsStateSlice = {
  Randomizer: {
    BasicNemesisCards: {
      RandomCards: {
        Tier1: [{ id: 'AgonyField' }, { id: 'BladeStorm' }],
        Tier2: [{ id: 'Venomite' }],
        Tier3: [{ id: 'DoomAegis' }, { id: 'JaggedOne' }],
      },
    },
  },
}

describe('Randomizer | BasicNemesisCards | PlayerCount | selectors', () => {
  test('getBasicNemesisCards()', () => {
    const expected = {
      Tier1: [{ id: 'AgonyField' }, { id: 'BladeStorm' }],
      Tier2: [{ id: 'Venomite' }],
      Tier3: [{ id: 'DoomAegis' }, { id: 'JaggedOne' }],
    }

    const result = selectors.getBasicNemesisCards(mockBasicNemesisCards)

    expect(result).toEqual(expected)
  })
})
