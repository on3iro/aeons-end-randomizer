import * as types from 'aer-types/types'

import { drawPowersAndAttacks } from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/reducerHelpers/helpers'

const cards = [
  { id: 'card1', type: 'Minion' },
  { id: 'card2', type: 'Power' },
  { id: 'card3', type: 'Attack' },
  { id: 'card4', type: 'Power' },
  { id: 'card5', type: 'Minion' },
  { id: 'card6', type: 'Minion' },
] as types.BasicNemesisCard[]

describe('drawPowersAndAttacks()', () => {
  it('should return 1 power or attack card', () => {
    const expected = [{ id: 'card4' }]

    const result = drawPowersAndAttacks(cards, 1, { seed: 'test' })

    expect(result).toEqual(expected)
  })

  it('should return 3 power or attack cards', () => {
    const expected = [{ id: 'card4' }, { id: 'card2' }, { id: 'card3' }]

    const result = drawPowersAndAttacks(cards, 3, { seed: 'test' })

    expect(result).toEqual(expected)
  })
})
