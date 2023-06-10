import * as types from 'aer-types/types'

export const oldStyleExpedition: types.OldStyleExpedition = {
  id: 'OLD_STYLE',
  name: 'Oldstyle',
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
  battles: [
    {
      id: 'fHFX3VH99',
      nemesisTier: {
        tier: 1,
        isNewTier: false,
      },
      treasure: {
        level: 1,
        hasTreasure: true,
      },
      expeditionId: 'OLD_STYLE',
      status: 'finished',
      tries: 1,
      nemesisId: 'Bladius',
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
    {
      id: 'dmvgVnT3c',
      nemesisTier: {
        tier: 2,
        isNewTier: true,
      },
      treasure: {
        level: 2,
        hasTreasure: true,
      },
      expeditionId: 'OLD_STYLE',
      status: 'unlocked',
      tries: 0,
    },
    {
      id: 'olps4itk4',
      nemesisTier: {
        tier: 3,
        isNewTier: true,
      },
      treasure: {
        level: 3,
        hasTreasure: true,
      },
      expeditionId: 'OLD_STYLE',
      status: 'locked',
      tries: 0,
    },
    {
      id: 'y0gQDPjY5',
      nemesisTier: {
        tier: 4,
        isNewTier: true,
      },
      treasure: {
        hasTreasure: false,
      },
      expeditionId: 'OLD_STYLE',
      status: 'locked',
      tries: 0,
    },
  ],
  finished: false,
  migrationVersion: 2020030301,
}
