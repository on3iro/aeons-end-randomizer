import * as types from 'aer-types/types'
import { handleBanner } from '../handleBanner'

describe('handleBanner', () => {
  it('should contain empty bannerIds array, if no result could be created', () => {
    const result = handleBanner({ id: 'someBattle' } as types.Battle, [], {
      seed: 'test',
    })

    expect(result).toEqual({
      id: 'someBattle',
      rewards: {
        treasure: [],
        mages: [],
        supplyIds: [],
        bannerIds: [],
      },
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })

  it('should contain bannerId', () => {
    const result = handleBanner(
      { id: 'someBattle' } as types.Battle,
      ['banner1'],
      { seed: 'test' }
    )

    expect(result).toEqual({
      id: 'someBattle',
      rewards: {
        treasure: [],
        mages: [],
        supplyIds: [],
        bannerIds: ['banner1'],
      },
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })
})
