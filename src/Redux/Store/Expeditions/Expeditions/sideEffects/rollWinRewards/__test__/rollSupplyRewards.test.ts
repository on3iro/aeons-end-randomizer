import { rollNewEntity } from '../../helpers'

import { rollSupplyRewards } from '../rollSupplyRewards'

describe('rollSupplyRewards()', () => {
  test('result should be empty, if no ids are provided', () => {
    const inputSeed = { seed: 'test', state: true }

    const result = rollSupplyRewards([], [], [], inputSeed)

    expect(result.result).toEqual([])
  })

  test('result should contain two ids if one available is empty', () => {
    const inputSeed = { seed: 'test', state: true }

    expect(rollSupplyRewards([], ['a'], ['b'], inputSeed).result).toEqual([
      'a',
      'b',
    ])

    expect(rollSupplyRewards(['a'], [], ['b'], inputSeed).result).toEqual([
      'a',
      'b',
    ])

    expect(rollSupplyRewards(['a'], ['b'], [], inputSeed).result).toEqual([
      'a',
      'b',
    ])
  })

  test('intermediate seed states should be passed between calls to rollNewEntity', () => {
    const inputSeed = { seed: 'test', state: true }

    const mockRollNewEntity = jest.fn(rollNewEntity)

    const result = rollSupplyRewards(
      ['a'],
      ['b'],
      ['c'],
      inputSeed,
      mockRollNewEntity
    )

    // Result
    expect(result.result).toEqual(['a', 'b', 'c'])

    // Seeds
    const mockCalls = mockRollNewEntity.mock.calls
    const mockResults = mockRollNewEntity.mock.results

    expect(mockCalls[0]).toEqual([
      expect.any(Array),
      expect.any(Function),
      inputSeed,
    ])

    expect(mockCalls[1]).toEqual([
      expect.any(Array),
      expect.any(Function),
      mockResults[0].value.seed,
    ])

    expect(mockCalls[2]).toEqual([
      expect.any(Array),
      expect.any(Function),
      mockResults[1].value.seed,
    ])

    expect(result.seed).toEqual(mockResults[2].value.seed)
  })
})
