import { NemesisTier } from '../../../types'
import { generateBattles, createBattle } from './helpers'

describe('generateBattles', () => {
  it('should generate inital battles correctly for normal expedition', () => {
    const tier1 = { tier: 1, isNewTier: false }
    const tier2 = { tier: 2, isNewTier: true }
    const tier3 = { tier: 3, isNewTier: true }
    const tier4 = { tier: 4, isNewTier: true }
    const variant = {
      id: 'DEFAULT',
      name: 'Default',
      tierList: [tier1, tier2, tier3, tier4] as NemesisTier[],
    }

    expect(generateBattles(variant, '1')).toMatchObject([
      {
        nemesisTier: tier1,
        expeditionId: '1',
        status: 'unlocked',
        tries: 0,
      },
      {
        nemesisTier: tier2,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: tier3,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: tier4,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
    ])
  })

  it('should generate inital battles correctly for short expedition', () => {
    const tier2 = { tier: 2, isNewTier: true }
    const tier3 = { tier: 3, isNewTier: true }
    const tier4 = { tier: 4, isNewTier: true }
    const variant = {
      id: 'SHORT',
      name: 'Short',
      tierList: [tier2, tier3, tier4] as NemesisTier[],
    }

    expect(generateBattles(variant, '1')).toMatchObject([
      {
        nemesisTier: tier2,
        expeditionId: '1',
        status: 'unlocked',
        tries: 0,
      },
      {
        nemesisTier: tier3,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: tier4,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
    ])
  })

  it('should generate inital battles correctly for extended expedition', () => {
    const tier11 = { tier: 1, isNewTier: false }
    const tier12 = { tier: 1, isNewTier: false }
    const tier21 = { tier: 2, isNewTier: true }
    const tier22 = { tier: 2, isNewTier: false }
    const tier31 = { tier: 3, isNewTier: true }
    const tier32 = { tier: 3, isNewTier: false }
    const tier41 = { tier: 4, isNewTier: true }
    const tier42 = { tier: 4, isNewTier: false }
    const variant = {
      id: 'EXTENDED',
      name: 'Extended',
      tierList: [
        tier11,
        tier12,
        tier21,
        tier22,
        tier31,
        tier32,
        tier41,
        tier42,
      ] as NemesisTier[],
    }

    expect(generateBattles(variant, '1')).toMatchObject([
      {
        nemesisTier: tier11,
        expeditionId: '1',
        status: 'unlocked',
        tries: 0,
      },
      {
        nemesisTier: tier12,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: tier21,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: tier22,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: tier31,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: tier32,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: tier41,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
      {
        nemesisTier: tier42,
        expeditionId: '1',
        status: 'locked',
        tries: 0,
      },
    ])
  })
})
