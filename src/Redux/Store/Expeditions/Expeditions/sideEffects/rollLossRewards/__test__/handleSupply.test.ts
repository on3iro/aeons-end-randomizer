import * as types from 'aer-types/types'
import { handleSupply } from '../handleSupply'

describe('handleSupply', () => {
  it('should contain empty supplyIds array, if no result could be created', () => {
    const result = handleSupply({ id: 'someBattle' } as types.Battle, [], {
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

  it('should contain supplyId', () => {
    const result = handleSupply(
      { id: 'someBattle' } as types.Battle,
      ['supply1'],
      { seed: 'test' }
    )

    expect(result).toEqual({
      id: 'someBattle',
      rewards: {
        treasure: [],
        mages: [],
        supplyIds: ['supply1'],
      },
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })
})
