import * as types from 'types'

import { migrateToExpeditionDSL } from '../migrateToExpeditionDSL'
import { oldStyleExpedition } from './__fixtures__/oldStyleExpedition'
import { rootState } from '__fixtures__/rootState'

describe('migrateToExpeditionDSL()', () => {
  it('should map expedition to new dsl model', () => {
    const result = migrateToExpeditionDSL(rootState, oldStyleExpedition)

    const expected: types.Expedition = {
      id: 'OLD_STYLE',
      name: 'Oldstyle',
      migrationVersion: 2020030301,
      score: 6,
      seed: {
        seed: 'OLD_STYLE',
        supplyState: true,
        nemesisState: true,
      },
      settingsSnapshot: {
        supplySetup: {
          id: 'random',
          name: 'Random Setup (Default)',
          type: 'official',
          default: true,
          active: true,
          tiles: [
            {
              type: 'Gem',
              operation: 'ANY',
            },
            {
              type: 'Gem',
              operation: 'ANY',
            },
            {
              type: 'Gem',
              operation: 'ANY',
            },
            {
              type: 'Relic',
              operation: 'ANY',
            },
            {
              type: 'Relic',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
            {
              type: 'Spell',
              operation: 'ANY',
            },
          ],
        },
        availableCardIds: ['DiamondCluster', 'ChaosArc', 'Ignite'],
        availableMageIds: ['Adelheim', 'Brama', 'Jian'],
        availableNemesisIds: [
          'CarapaceQueen',
          'CrookedMask',
          'PrinceOfGluttons',
        ],
        availableTreasureIds: [
          'DezmodiasOblivionShard',
          'UlgimorsCoalFragment',
          'IndirasLoneOpal',
        ],
        availableUpgradedBasicNemesisCardIds: [
          'HissingAcid',
          'Wreck',
          'BaneCommander',
        ],
        usedExpansions: ['AE'],
      },
      barracks: {
        mageIds: ['Reeve', 'Zhana', 'Inco', 'Nym'],
        supplyIds: [
          'ArcingSilicate',
          'SearingRuby',
          'ObliviumResin',
          'BurningOpal',
          'RockLauncher',
          'WarpingHaze',
          'Fulminate',
          'PyroGeist',
          'Char',
        ],
        treasureIds: [
          'GexsShatteredGeode',
          'ReevesRavenShard',
          'XaxosPyre',
          'SparrowsAid',
          'XaxosFlare',
        ],
      },
      upgradedBasicNemesisCards: [],
      banished: ['VimDynamo', 'FocusingOrb', 'Tethered Darts'],
      variantId: 'DEFAULT',
      bigPocketVariant: false,
      finished: false,
      sequence: {
        firstBattleId: 'fHFX3VH99',
        branches: {
          fHFX3VH99: {
            id: 'fHFX3VH99',
            nextBranchId: 'dmvgVnT3c',
            type: 'battle',
            expeditionId: 'OLD_STYLE',
            nemesisId: 'Bladius',
            battleConfig: {
              tier: 1,
              newUBNCards: {
                ids: [],
                addRandom: false,
              },
              treasure: {
                level: 1,
                hasTreasure: true,
              },
            },
            status: 'finished',
            tries: 1,
            rewards: {
              treasure: [
                'GexsShatteredGeode',
                'ReevesRavenShard',
                'XaxosPyre',
                'SparrowsAid',
                'XaxosFlare',
              ],
              supplyIds: ['ObliviumResin', 'RockLauncher', 'Char'],
            },
          },
          dmvgVnT3c: {
            id: 'dmvgVnT3c',
            type: 'battle',
            expeditionId: 'OLD_STYLE',
            nextBranchId: 'olps4itk4',
            battleConfig: {
              tier: 2,
              newUBNCards: {
                ids: [],
                addRandom: true,
              },
              treasure: {
                level: 2,
                hasTreasure: true,
              },
            },
            status: 'unlocked',
            tries: 0,
          },
          olps4itk4: {
            id: 'olps4itk4',
            type: 'battle',
            expeditionId: 'OLD_STYLE',
            nextBranchId: 'y0gQDPjY5',
            battleConfig: {
              tier: 3,
              newUBNCards: {
                ids: [],
                addRandom: true,
              },
              treasure: {
                level: 3,
                hasTreasure: true,
              },
            },
            status: 'locked',
            tries: 0,
          },
          y0gQDPjY5: {
            id: 'y0gQDPjY5',
            type: 'battle',
            expeditionId: 'OLD_STYLE',
            battleConfig: {
              tier: 4,
              newUBNCards: {
                ids: [],
                addRandom: true,
              },
              treasure: {
                hasTreasure: false,
              },
            },
            status: 'locked',
            tries: 0,
          },
        },
      },
    }

    expect(result).toEqual(expected)
  })
})
