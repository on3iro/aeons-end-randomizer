import { getRandomMinionAmount } from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/reducerHelpers/helpers'

describe('getRandomMinionAmount()', () => {
  it('should get a random number between 1 and 2', () => {
    const result = getRandomMinionAmount()

    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThan(3)
  })

  it('should get a random number between 0 and 1', () => {
    const result = getRandomMinionAmount(0, 2)

    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThan(2)
  })
})
