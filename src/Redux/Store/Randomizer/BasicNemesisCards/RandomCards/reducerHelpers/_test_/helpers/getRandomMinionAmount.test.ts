import * as types from 'types'

import { getRandomMinionAmount } from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/reducerHelpers/helpers'

describe('getRandomMinionAmount()', () => {
  it('should get a random number between 0 and 2', () => {
    const result = getRandomMinionAmount(3, { seed: 'test' })

    expect(result).toMatchSnapshot()
  })

  it('should get a random number between 0 and 1', () => {
    const result = getRandomMinionAmount(2, { seed: 'test' })

    expect(result).toMatchSnapshot()
  })
})
