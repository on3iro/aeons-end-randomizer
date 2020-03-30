import { generateBattles } from '../generateBattles'
import * as types from 'types'

describe('generateBattles', () => {
  const config1: types.VariantConfig = {
    tier: { tier: 1, isNewTier: false },
    treasure: { level: 1, hasTreasure: true },
  }
  const config2: types.VariantConfig = {
    tier: { tier: 2, isNewTier: true },
    treasure: { level: 2, hasTreasure: true },
  }
  const config3: types.VariantConfig = {
    tier: { tier: 3, isNewTier: true },
    treasure: { level: 3, hasTreasure: true },
  }
  const config4: types.VariantConfig = {
    tier: { tier: 4, isNewTier: true },
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
        id: expect.any(String),
        nemesisTier: config1.tier,
        treasure: config1.treasure,
        expeditionId: 'someExpedition',
        status: 'unlocked',
        tries: 0,
      },
      {
        id: expect.any(String),
        nemesisTier: config2.tier,
        treasure: config2.treasure,
        expeditionId: 'someExpedition',
        status: 'locked',
        tries: 0,
      },
      {
        id: expect.any(String),
        nemesisTier: config3.tier,
        treasure: config3.treasure,
        expeditionId: 'someExpedition',
        status: 'locked',
        tries: 0,
      },
      {
        id: expect.any(String),
        nemesisTier: config4.tier,
        treasure: config4.treasure,
        expeditionId: 'someExpedition',
        status: 'locked',
        tries: 0,
      },
    ])
  })
})
