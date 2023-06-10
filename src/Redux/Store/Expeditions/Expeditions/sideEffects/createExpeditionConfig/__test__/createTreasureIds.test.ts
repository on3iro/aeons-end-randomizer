import * as types from 'aer-types/types'
import { createTreasureIds } from '../createTreasureIds'

describe('createTreasureIds()', () => {
  it('should return an empty result with input seed, if expedition does not start with treasure (tier === 1)', () => {
    const result = createTreasureIds(
      {
        tier: 1,
        newUBNCards: { ids: [], addRandom: false },
        treasure: { level: 1, hasTreasure: true },
      } as types.BattleConfig,
      ['t1', 't2', 't3'],
      { seed: 'test', state: true }
    )

    expect(result).toEqual({
      result: [],
      seed: { seed: 'test', state: true },
    })
  })

  it('should return an empty result with input seed, if expedition does not start with treasure (hasTreasure === false)', () => {
    const result = createTreasureIds(
      {
        tier: 2,
        newUBNCards: { ids: [], addRandom: false },
        treasure: { level: 1, hasTreasure: false },
      } as types.BattleConfig,
      ['t1', 't2', 't3'],
      { seed: 'test', state: true }
    )

    expect(result).toEqual({
      result: [],
      seed: { seed: 'test', state: true },
    })
  })

  it('should return valid result', () => {
    const result = createTreasureIds(
      {
        tier: 2,
        newUBNCards: { ids: [], addRandom: false },
        treasure: { level: 1, hasTreasure: true },
      } as types.BattleConfig,
      ['t1', 't2', 't3'],
      { seed: 'test', state: true }
    )

    expect(result).toEqual({
      availableEntities: expect.any(Array),
      result: ['t3', 't1', 't2'],
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })
})
