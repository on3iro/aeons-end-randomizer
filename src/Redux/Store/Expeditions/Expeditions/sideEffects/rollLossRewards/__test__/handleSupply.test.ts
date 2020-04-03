import * as types from 'types'
import { handleSupply } from '../handleSupply'

describe('handleSupply', () => {
  it('should contain empty supplyIds array, if no result could be created', () => {
    const result = handleSupply(
      { id: 'someBattle' } as types.OldStyleBattle,
      [],
      {
        seed: 'test',
      }
    )

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

  it('should contain supplyId', () => {
    const result = handleSupply(
      { id: 'someBattle' } as types.OldStyleBattle,
      ['supply1'],
      { seed: 'test' }
    )

    expect(result).toEqual({
      id: 'someBattle',
      rewards: {
        treasure: [],
        mage: undefined,
        supplyIds: ['supply1'],
      },
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })
})
