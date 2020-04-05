import * as types from 'types'
import { handleMage } from '../handleMage'

describe('handleMage', () => {
  it('should contain undefined, if no result could be created', () => {
    const result = handleMage({ id: 'someBattle' } as types.Battle, [], {
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

  it('should contain mageId', () => {
    const result = handleMage({ id: 'someBattle' } as types.Battle, ['mage1'], {
      seed: 'test',
    })

    expect(result).toEqual({
      id: 'someBattle',
      rewards: {
        treasure: [],
        mage: 'mage1',
        supplyIds: [],
      },
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })
})
