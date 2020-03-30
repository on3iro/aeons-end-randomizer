import { rollNemesisId } from '../rollNemesisId'
import { getRandomEntity } from 'Redux/helpers'

describe('rollNemesisId()', () => {
  it('should return 1 new id, if nemesisIds is not empty', () => {
    const result = rollNemesisId(['a', 'b'])

    expect(typeof result.result).toBe('string')
  })

  it('should handle empty nemesisIds by returning undefined', () => {
    const result = rollNemesisId([])

    expect(result.result).toBe(undefined)
  })

  test('result seed state should not be input seed state', () => {
    const inputSeed = { seed: 'test', state: true }
    const result = rollNemesisId(['a', 'b'], availableEntities =>
      getRandomEntity(availableEntities, inputSeed)
    )

    expect(result.seed.seed).toBe(inputSeed.seed)
    expect(result.seed.state).not.toEqual(inputSeed.state)
  })
})
