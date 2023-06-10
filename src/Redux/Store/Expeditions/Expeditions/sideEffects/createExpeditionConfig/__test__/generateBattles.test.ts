import shortidMock from 'shortid'

jest.mock('shortid', () => {
  let count = 0

  return {
    generate: () => {
      const newId = `TEST_BATTLE_ID_${count}`
      count = count + 1
      return newId
    },
  }
})

import { generateBattles } from '../generateBattles'
import * as types from 'aer-types/types'

describe('generateBattles', () => {
  afterAll(() => {
    jest.restoreAllMocks()
  })

  const config1: types.BattleConfig = {
    tier: 1,
    newUBNCards: { ids: [], type: 'custom' },
    treasure: { level: 1, hasTreasure: true },
  }
  const config2: types.BattleConfig = {
    tier: 2,
    newUBNCards: { type: 'regular', addRandom: true },
    treasure: { level: 2, hasTreasure: true },
  }
  const config3: types.BattleConfig = {
    tier: 3,
    newUBNCards: { type: 'regular', addRandom: true },
    treasure: { level: 3, hasTreasure: true },
  }
  const config4: types.BattleConfig = {
    tier: 4,
    newUBNCards: { type: 'regular', addRandom: true },
    treasure: { hasTreasure: false },
  }

  const variant: types.Variant = {
    id: 'test',
    name: 'test',
    configList: [config1, config2, config3, config4],
  }

  it('should generate battles correctly from valid config list', () => {
    const result = generateBattles(variant, 'someExpedition')

    expect(result).toEqual([
      {
        id: 'TEST_BATTLE_ID_0',
        type: 'battle',
        nextBranchId: 'TEST_BATTLE_ID_1',
        config: config1,
        expeditionId: 'someExpedition',
        status: 'unlocked',
        tries: 0,
      },
      {
        id: 'TEST_BATTLE_ID_1',
        type: 'battle',
        nextBranchId: 'TEST_BATTLE_ID_2',
        config: config2,
        expeditionId: 'someExpedition',
        status: 'locked',
        tries: 0,
      },
      {
        id: 'TEST_BATTLE_ID_2',
        nextBranchId: 'TEST_BATTLE_ID_3',
        type: 'battle',
        config: config3,
        expeditionId: 'someExpedition',
        status: 'locked',
        tries: 0,
      },
      {
        id: 'TEST_BATTLE_ID_3',
        nextBranchId: undefined,
        type: 'battle',
        config: config4,
        expeditionId: 'someExpedition',
        status: 'locked',
        tries: 0,
      },
    ])
  })
})
