import * as types from 'aer-types/types'

import { handleRewardType } from '../index'

import * as handleSupplyModule from '../handleSupply'
import * as handleMageModule from '../handleMage'
import * as handleTreasureModule from '../handleTreasure'

describe('handleRewardType()', () => {
  it('should handle Gem', () => {
    const spy = jest.spyOn(handleSupplyModule, 'handleSupply')

    handleRewardType({
      rewardType: 'gem',
      battle: {} as types.Battle,
      seed: {} as types.Seed,
      mageIds: [],
      gemIds: [],
      relicIds: [],
      spellIds: [],
      treasure1Ids: [],
      treasure2Ids: [],
      treasure3Ids: [],
    })

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it('should handle Relic', () => {
    const spy = jest.spyOn(handleSupplyModule, 'handleSupply')

    handleRewardType({
      rewardType: 'relic',
      battle: {} as types.Battle,
      seed: {} as types.Seed,
      mageIds: [],
      gemIds: [],
      relicIds: [],
      spellIds: [],
      treasure1Ids: [],
      treasure2Ids: [],
      treasure3Ids: [],
    })

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it('should handle Spell', () => {
    const spy = jest.spyOn(handleSupplyModule, 'handleSupply')

    handleRewardType({
      rewardType: 'spell',
      battle: {} as types.Battle,
      seed: {} as types.Seed,
      mageIds: [],
      gemIds: [],
      relicIds: [],
      spellIds: [],
      treasure1Ids: [],
      treasure2Ids: [],
      treasure3Ids: [],
    })

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it('should handle Mage', () => {
    const spy = jest.spyOn(handleMageModule, 'handleMage')

    handleRewardType({
      rewardType: 'mage',
      battle: {} as types.Battle,
      seed: {} as types.Seed,
      mageIds: [],
      gemIds: [],
      relicIds: [],
      spellIds: [],
      treasure1Ids: [],
      treasure2Ids: [],
      treasure3Ids: [],
    })

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it('should handle Treasure lvl 1', () => {
    const spy = jest.spyOn(handleTreasureModule, 'handleTreasure')

    handleRewardType({
      rewardType: 'treasure1',
      battle: {} as types.Battle,
      seed: {} as types.Seed,
      mageIds: [],
      gemIds: [],
      relicIds: [],
      spellIds: [],
      treasure1Ids: [],
      treasure2Ids: [],
      treasure3Ids: [],
    })

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it('should handle Treasure lvl 2', () => {
    const spy = jest.spyOn(handleTreasureModule, 'handleTreasure')

    handleRewardType({
      rewardType: 'treasure2',
      battle: {} as types.Battle,
      seed: {} as types.Seed,
      mageIds: [],
      gemIds: [],
      relicIds: [],
      spellIds: [],
      treasure1Ids: [],
      treasure2Ids: [],
      treasure3Ids: [],
    })

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it('should handle Treasure lvl 3', () => {
    const spy = jest.spyOn(handleTreasureModule, 'handleTreasure')

    handleRewardType({
      rewardType: 'treasure3',
      battle: {} as types.Battle,
      seed: {} as types.Seed,
      mageIds: [],
      gemIds: [],
      relicIds: [],
      spellIds: [],
      treasure1Ids: [],
      treasure2Ids: [],
      treasure3Ids: [],
    })

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it('should handle default', () => {
    const result = handleRewardType({
      // @ts-ignore
      rewardType: 'ANYTHING_ELSE',
      battle: { id: 'someBattle' } as types.Battle,
      seed: { seed: 'test' } as types.Seed,
      mageIds: [],
      gemIds: [],
      relicIds: [],
      spellIds: [],
      treasure1Ids: [],
      treasure2Ids: [],
      treasure3Ids: [],
    })

    expect(result).toEqual({
      id: 'someBattle',
      seed: { seed: 'test' },
    })
  })
})
