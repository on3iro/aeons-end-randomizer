import { createSupplyIds } from '../createSupplyIds'
import * as types from 'aer-types/types'

describe('createSupplyIds()', () => {
  it('should produce correct result', () => {
    const cards: (types.ICard & { selected: boolean })[] = [
      {
        type: 'Gem',
        expansion: 'AE',
        name: 'Diamond Cluster',
        id: 'DiamondCluster',
        cost: 4,
        effect:
          '\n        <p>\n          Gain 2 <span class="aether">&AElig;</span>.<br/>\n          If this is the second time you have played Diamond Cluster this turn \n          gain an additional 2 <span class="aether">&AElig;</span>.\n        </p>\n      ',
        keywords: [],
        selected: true,
      },
      {
        type: 'Spell',
        expansion: 'AE',
        name: 'Chaos Arc',
        id: 'ChaosArc',
        cost: 6,
        effect:
          '\n      <p>\n      <b>Cast:</b> Deal 3 damage.<br/>\n      Deal 2 additional damage for each prepped spell in an adjacent breach.\n        </p>\n        ',
        keywords: [],
        selected: true,
      },
      {
        type: 'Relic',
        expansion: 'AE',
        name: 'Unstable Prism',
        id: 'UnstablePrism',
        cost: 3,
        effect:
          '\n      <p>\n        Play a gem in hand twice and destroy it.\n        <span class="or">OR</span>\n        Gain 2 <span class="aether">&AElig;</span>.\n      </p>\n        ',
        keywords: [],
        selected: true,
      },
    ]

    const supplySetup: types.IMarketSetup = {
      id: 'xSv4XFmY',
      name: '2',
      type: 'custom',
      active: true,
      tiles: [
        {
          id: 'QSNpPlHv',
          type: 'Relic',
          operation: 'ANY',
        },
      ],
      isDirty: false,
      isNew: false,
    }

    const result = createSupplyIds(cards, supplySetup, {
      seed: 'test',
      state: true,
    })

    expect(result).toEqual({
      result: ['UnstablePrism'],
      seed: { seed: 'test', state: expect.any(Object) },
    })
  })
})
