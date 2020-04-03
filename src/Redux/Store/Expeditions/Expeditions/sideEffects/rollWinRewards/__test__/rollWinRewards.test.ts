import * as types from 'types'

import * as rollSupplyRewardsModule from '../rollSupplyRewards'
import * as rollTreasureIdsByLevelModule from '../rollTreasureIdsByLevel'

import { getTreasureAmount, rollWinRewards } from '../index'

describe('getTreasureAmount()', () => {
  it('should return 3 if treasureLevel equals 2', () => {
    expect(getTreasureAmount(2)).toBe(3)
  })

  it('should return 5 if treasureLevel does not equal 2 or is undefined', () => {
    expect(getTreasureAmount(1)).toBe(5)
    expect(getTreasureAmount(undefined)).toBe(5)
  })
})

describe('rollWinRewards()', () => {
  const inputSeed = { seed: 'test', supplyState: true, nemesisState: true }

  const getExampleState = () => ({
    Expeditions: {
      Expeditions: {
        expeditions: {
          expedition1: {
            id: 'expedition1',
            settingsSnapshot: {
              availableCardIds: ['spell1', 'gem2'],
              availableTreasureIds: ['t1'],
            },
            seed: inputSeed,
            barracks: {
              mageIds: ['mage1'],
              supplyIds: ['gem1'],
              treasureIds: ['t2'],
            },
            banished: ['gem2'],
          } as types.Expedition,
        },
      },
    },
    Settings: {
      Expansions: {
        Treasures: {
          treasures: {
            t1: {
              id: 't1',
              level: 2,
              selected: true,
            } as types.Treasure & { selected: boolean },
          },
          treasureIds: ['t1'],
        },
        SelectedCards: {
          cards: {
            gem1: {
              type: 'Gem',
              id: 'gem1',
              selected: true,
            } as types.ICard & { selected: boolean },
            gem2: {
              type: 'Gem',
              id: 'gem2',
              selected: true,
            } as types.ICard & { selected: boolean },
            relic1: {
              type: 'Relic',
              id: 'relic1',
              selected: true,
            } as types.ICard & { selected: boolean },
            spell1: {
              type: 'Spell',
              id: 'spell1',
              selected: true,
            } as types.ICard & { selected: boolean },
          },
        },
      },
    },
  })

  it('should produce correct result', () => {
    const inputBattle = {
      id: 'someBattle',
      expeditionId: 'expedition1',
      treasure: {
        hasTreasure: true,
        level: 2,
      },
    } as types.OldStyleBattle

    const result = rollWinRewards(getExampleState, inputBattle)

    expect(result.battle).toEqual({
      ...inputBattle,
      rewards: {
        treasure: ['t1'],
        supplyIds: ['spell1'],
        mage: undefined,
      },
    })
  })

  it('should use intermediate seed states', () => {
    const rollSupplySpy = jest.spyOn(
      rollSupplyRewardsModule,
      'rollSupplyRewards'
    )
    const rollTreasuresSpy = jest.spyOn(
      rollTreasureIdsByLevelModule,
      'rollTreasureIdsByLevel'
    )

    rollWinRewards(getExampleState, {
      id: 'someBattle',
      expeditionId: 'expedition1',
      treasure: {
        hasTreasure: true,
        level: 2,
      },
    } as types.OldStyleBattle)

    expect(rollTreasuresSpy).toHaveBeenCalledWith(
      ['t1'],
      3,
      expect.any(Function),
      { seed: inputSeed.seed, state: inputSeed.supplyState }
    )

    expect(rollSupplySpy).toHaveBeenCalledWith(
      [],
      [],
      ['spell1'],
      rollTreasuresSpy.mock.results[0].value.seed
    )

    rollSupplySpy.mockRestore()
    rollTreasuresSpy.mockRestore()
  })
})
