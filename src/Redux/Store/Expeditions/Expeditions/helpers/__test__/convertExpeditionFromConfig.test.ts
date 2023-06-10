import shortidMock from 'shortid'

jest.mock('shortid', () => {
  return {
    generate: () => 'TEST_EXPEDITION_ID',
  }
})

import * as types from 'aer-types/types'
import { convertExpeditionFromConfig } from '../convertExpeditionFromConfig'
import { rootState } from '__fixtures__/rootState'

describe('convertFromConfig()', () => {
  const config: types.ExpeditionConfig = {
    name: 'Test',
    seedConfig: 'TEST',
    settingsSnapshotConfig: {
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
      availableCardIds: ['DiamondCluster', 'ChaosArc'],
      availableMageIds: ['Adelheim', 'Brama', 'Jian'],
      availableNemesisIds: ['CarapaceQueen', 'CrookedMask', 'PrinceOfGluttons'],
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
    },
    variantIdConfig: 'DEFAULT',
    bigPocketVariantConfig: false,
    uniqueMageNamesConfig: true,
    sequenceConfig: {
      firstBranchId: 'wLZW1WbKvj',
      branches: {
        wLZW1WbKvj: {
          type: 'battle',
          nextBranchId: 'yeGhjj6TEQ',
          config: {
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
        },
        yeGhjj6TEQ: {
          type: 'battle',
          nextBranchId: 'j0rHxtpU0_',
          config: {
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
        },
        j0rHxtpU0_: {
          type: 'reward',
          nextBranchId: 'PVFuOBCY4n',
          config: {
            treasure: {
              ids: ['GexsShatteredGeode', { random: true, level: 1 }],
            },
            mage: {
              ids: ['Claudia'],
            },
            supply: {
              ids: ['Jade'],
              bigPocket: true,
            },
          },
        },
        PVFuOBCY4n: {
          type: 'narrative',
          config: {
            text: 'Something happens',
            descisions: false,
          },
        },
      },
    },
  }

  it('should correctly convert expeditionConfig to expedition', () => {
    const result = convertExpeditionFromConfig(config, rootState)

    const expected: types.Expedition = {
      id: 'TEST_EXPEDITION_ID',
      name: 'Test',
      score: 0,
      seed: {
        seed: 'TEST',
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
        availableCardIds: ['DiamondCluster', 'ChaosArc'],
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
      },
      barracks: {
        mageIds: [],
        supplyIds: [],
        treasureIds: [],
      },
      upgradedBasicNemesisCards: [],
      banished: [],
      bigPocketVariant: false,
      uniqueMageNames: true,
      sequence: {
        firstBranchId: 'wLZW1WbKvj',
        branches: {
          wLZW1WbKvj: {
            id: 'wLZW1WbKvj',
            type: 'battle',
            nextBranchId: 'yeGhjj6TEQ',
            config: {
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
            expeditionId: 'TEST_EXPEDITION_ID',
            status: 'unlocked',
            tries: 0,
          },
          yeGhjj6TEQ: {
            id: 'yeGhjj6TEQ',
            type: 'battle',
            nextBranchId: 'j0rHxtpU0_',
            config: {
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
            expeditionId: 'TEST_EXPEDITION_ID',
            status: 'locked',
            tries: 0,
          },
          j0rHxtpU0_: {
            id: 'j0rHxtpU0_',
            type: 'reward',
            nextBranchId: 'PVFuOBCY4n',
            config: {
              treasure: {
                ids: ['GexsShatteredGeode', { random: true, level: 1 }],
              },
              mage: {
                ids: ['Claudia'],
              },
              supply: {
                ids: ['Jade'],
                bigPocket: true,
              },
            },
            expeditionId: 'TEST_EXPEDITION_ID',
            status: 'locked',
          },
          PVFuOBCY4n: {
            id: 'PVFuOBCY4n',
            type: 'narrative',
            config: {
              text: 'Something happens',
              descisions: false,
            },
            expeditionId: 'TEST_EXPEDITION_ID',
            status: 'locked',
          },
        },
      },
      migrationVersion: 2020030401,
      finished: false,
    }

    expect(result).toEqual(expected)
  })

  it.todo('should handle initial barracks')

  it.todo('should handle initial UBNcards')
})
