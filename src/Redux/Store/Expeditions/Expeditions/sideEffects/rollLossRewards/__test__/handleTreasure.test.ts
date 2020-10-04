import * as types from 'aer-types/types'
import { handleTreasure } from '../handleTreasure'

describe('handleTreasure', () => {
  it('should contain empty treasureIds array, if no result could be created', () => {
    const result = handleTreasure({ id: 'someBattle' } as types.Battle, [], {
      seed: 'test',
    })

    expect(result).toEqual({
      id: 'someBattle',
      rewards: {
        treasure: [],
        mages: [],
        supplyIds: [],
      },
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })

  it('should contain treasureId', () => {
    const result = handleTreasure(
      { id: 'someBattle' } as types.Battle,
      ['treasure1'],
      { seed: 'test' }
    )

    expect(result).toEqual({
      id: 'someBattle',
      rewards: {
        treasure: ['treasure1'],
        mages: [],
        supplyIds: [],
      },
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })
})
