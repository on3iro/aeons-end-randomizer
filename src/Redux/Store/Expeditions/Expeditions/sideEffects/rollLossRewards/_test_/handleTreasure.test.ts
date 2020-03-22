import * as types from 'types'
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
        mage: undefined,
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
        mage: undefined,
        supplyIds: [],
      },
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })
})
