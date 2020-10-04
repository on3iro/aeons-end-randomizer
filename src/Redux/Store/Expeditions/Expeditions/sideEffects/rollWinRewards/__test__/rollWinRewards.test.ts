import * as types from 'aer-types/types'

import * as rollSupplyRewardsModule from '../rollSupplyRewards'
import * as rollTreasureIdsByLevelModule from '../rollTreasureIdsByLevel'

import { getTreasureAmount, createWinRewards } from '../index'
import { ExpeditionsStateSlice } from '../../../types'
import { CardsContentStateSlice } from 'Redux/Store/Settings/Expansions/Cards/content'
import { TreasureContentStateSlice } from 'Redux/Store/Settings/Expansions/Treasures/content'
import { TreasureIdsStateSlice } from 'Redux/Store/Settings/Expansions/Treasures/ids'
import { SelectedLanguagesStateSlice } from 'Redux/Store/Settings/Expansions/Languages'
import { MagesContentStateSlice } from 'Redux/Store/Settings/Expansions/Mages/content'

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

  const getExampleState = (): ExpeditionsStateSlice &
    CardsContentStateSlice &
    TreasureContentStateSlice &
    TreasureIdsStateSlice &
    MagesContentStateSlice &
    SelectedLanguagesStateSlice => ({
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
        Languages: {
          ExpansionA: 'ENG',
        },
        Mages: {
          content: {
            ENG: {},
            PL: {},
            FR: {},
          },
        },
        Treasures: {
          content: {
            ENG: {
              t1: {
                id: 't1',
                name: 'something',
                effect: 'something',
                level: 2,
                expansion: 'ExpansionA',
              },
            },
            PL: {},
            FR: {},
          },
          ids: ['t1'],
        },
        Cards: {
          content: {
            ENG: {
              gem1: {
                type: 'Gem',
                id: 'gem1',
                name: 'gem1',
                cost: 3,
                effect: 'something',
                keywords: [],
                expansion: 'ExpansionA',
              },
              gem2: {
                type: 'Gem',
                id: 'gem2',
                name: 'gem2',
                cost: 3,
                effect: 'something',
                keywords: [],
                expansion: 'ExpansionA',
              },
              relic1: {
                type: 'Relic',
                name: 'relic1',
                cost: 3,
                effect: 'something',
                keywords: [],
                id: 'relic1',
                expansion: 'ExpansionA',
              },
              spell1: {
                type: 'Spell',
                id: 'spell1',
                name: 'spell1',
                cost: 3,
                effect: 'something',
                keywords: [],
                expansion: 'ExpansionA',
              },
            },
            PL: {},
            FR: {},
          },
        },
      },
    },
  })

  it('should produce correct result', () => {
    const inputBattle = {
      id: 'someBattle',
      type: 'battle',
      expeditionId: 'expedition1',
      config: {
        tier: 1,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: {
          hasTreasure: true,
          level: 2,
        },
      },
      status: 'started',
      tries: 1,
    } as types.Battle

    const result = createWinRewards(getExampleState, inputBattle)

    expect(result.battle).toEqual({
      ...inputBattle,
      rewards: {
        treasure: ['t1'],
        supplyIds: ['spell1'],
        mages: [],
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

    createWinRewards(getExampleState, {
      id: 'someBattle',
      expeditionId: 'expedition1',
      config: {
        treasure: {
          hasTreasure: true,
          level: 2,
        },
      },
    } as types.Battle)

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
