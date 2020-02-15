import { generateBattles } from '../createExpeditionConfig'
import { initialState } from 'Redux/Store/'

describe('generateBattles', () => {
  it('should generate inital battles correctly for normal expedition', () => {
    const config1 = {
      tier: { tier: 1, isNewTier: false },
      treasure: { level: 1, hasTreasure: true },
    }
    const config2 = {
      tier: { tier: 2, isNewTier: true },
      treasure: { level: 2, hasTreasure: true },
    }
    const config3 = {
      tier: { tier: 3, isNewTier: true },
      treasure: { level: 3, hasTreasure: true },
    }
    const config4 = {
      tier: { tier: 4, isNewTier: true },
      treasure: { hasTreasure: false },
    }

    expect(generateBattles(initialState, 'DEFAULT', '1')).toMatchObject([
      {
        nemesisTier: config1.tier,
        treasure: config1.treasure,
        expeditionId: '1',
        status: 'unlocked',
        tries: 0,
      },
      {
        nemesisTier: config2.tier,
        treasure: config2.treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: config3.tier,
        treasure: config3.treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: config4.tier,
        treasure: config4.treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
    ])
  })

  it('should generate inital battles correctly for short expedition', () => {
    const config2 = {
      tier: { tier: 2, isNewTier: true },
      treasure: { level: 2, hasTreasure: true },
    }
    const config3 = {
      tier: { tier: 3, isNewTier: true },
      treasure: { level: 3, hasTreasure: true },
    }
    const config4 = {
      tier: { tier: 4, isNewTier: true },
      treasure: { hasTreasure: false },
    }

    expect(generateBattles(initialState, 'SHORT', '1')).toMatchObject([
      {
        nemesisTier: config2.tier,
        treasure: config2.treasure,
        expeditionId: '1',
        status: 'unlocked',
        tries: 0,
      },
      {
        nemesisTier: config3.tier,
        treasure: config3.treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: config4.tier,
        treasure: config4.treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
    ])
  })

  it('should generate inital battles correctly for extended expedition', () => {
    const configList = [
      {
        tier: { tier: 1, isNewTier: false },
        treasure: { hasTreasure: false },
      },
      {
        tier: { tier: 1, isNewTier: false },
        treasure: { level: 1, hasTreasure: true },
      },
      {
        tier: { tier: 2, isNewTier: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: { tier: 2, isNewTier: false },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: { tier: 3, isNewTier: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: { tier: 3, isNewTier: false },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: { tier: 4, isNewTier: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: { tier: 4, isNewTier: false },
        treasure: { hasTreasure: false },
      },
    ]

    expect(generateBattles(initialState, 'EXTENDED', '1')).toMatchObject([
      {
        nemesisTier: configList[0].tier,
        treasure: configList[0].treasure,
        expeditionId: '1',
        status: 'unlocked',
        tries: 0,
      },
      {
        nemesisTier: configList[1].tier,
        treasure: configList[1].treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: configList[2].tier,
        treasure: configList[2].treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: configList[3].tier,
        treasure: configList[3].treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: configList[4].tier,
        treasure: configList[4].treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: configList[5].tier,
        treasure: configList[5].treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: configList[6].tier,
        treasure: configList[6].treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: configList[7].tier,
        treasure: configList[7].treasure,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
    ])
  })
})
