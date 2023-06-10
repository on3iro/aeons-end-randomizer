import * as types from 'aer-types/types'
import { convertExpeditionToConfig } from '../convertExpeditionToConfig'

describe('convertToConfig()', () => {
  const expedition: types.Expedition = {
    id: 'T7MjVDVfP',
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
      usedExpansions: ['AE', 'BS'],
    },
    barracks: {
      mageIds: ['Inco', 'Nym', 'YanMagda', 'Adelheim'],
      supplyIds: [
        'VriswoodAmber',
        'ScoriaSlag',
        'BanishingTopaz',
        'ConclaveScroll',
        'ReflectiveConduit',
        'Ignite',
        'ForceAmplifier',
        'PyrotechnicSurge',
        'Fulminate',
      ],
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
          expeditionId: 'T7MjVDVfP',
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
          expeditionId: 'T7MjVDVfP',
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
          expeditionId: 'T7MjVDVfP',
          status: 'locked',
        },
        PVFuOBCY4n: {
          id: 'PVFuOBCY4n',
          type: 'narrative',
          config: {
            text: 'Something happens',
            descisions: false,
          },
          expeditionId: 'T7MjVDVfP',
          status: 'locked',
        },
      },
    },
    migrationVersion: 2020030401,
    finished: false,
  }

  it('should correctly convert expedition', () => {
    const result = convertExpeditionToConfig(expedition)

    const { usedExpansions, ...settingsSnapshotConfig } =
      expedition.settingsSnapshot

    const expected: types.ExpeditionConfig = {
      name: 'Test',
      seedConfig: 'TEST',
      settingsSnapshotConfig,
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

    expect(result).toEqual(expected)
  })
})
