import * as types from 'aer-types/types'
import { handleMage } from '../handleMage'

describe('handleMage', () => {
  it('should contain empty array, if no result could be created', () => {
    const result = handleMage({ id: 'someBattle' } as types.Battle, [], {
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

  it('should contain mageId', () => {
    const result = handleMage({ id: 'someBattle' } as types.Battle, ['mage1'], {
      seed: 'test',
    })

    expect(result).toEqual({
      id: 'someBattle',
      rewards: {
        treasure: [],
        mages: ['mage1'],
        supplyIds: [],
      },
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })
})
