import * as types from 'aer-types/types'

import { drawMinions } from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/reducerHelpers/helpers'

const cards = [
  { id: 'card1', type: 'Minion' },
  { id: 'card2', type: 'Power' },
  { id: 'card3', type: 'Attack' },
  { id: 'card4', type: 'Power' },
  { id: 'card5', type: 'Minion' },
  { id: 'card6', type: 'Minion' },
] as types.BasicNemesisCard[]

describe('drawMinions()', () => {
  it('should return 1 minion', () => {
    const expected = [{ id: 'card6' }]

    const result = drawMinions(cards, 1, { seed: 'test' })

    expect(result).toEqual(expected)
  })

  it('should return 3 minions', () => {
    const expected = [{ id: 'card6' }, { id: 'card1' }, { id: 'card5' }]

    const result = drawMinions(cards, 3, { seed: 'test' })

    expect(result).toEqual(expected)
  })
})
