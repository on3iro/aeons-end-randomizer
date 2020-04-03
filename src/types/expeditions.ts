import { NemesisTier, TreasureLevel } from './data'
import { IMarketSetup, IBluePrint } from 'types'
import { Seed } from './index'

export type Variant = {
  id: string
  name: string
  configList: Array<BattleConfig>
}

export type BattleTreasure = { level?: TreasureLevel; hasTreasure: boolean }

export const variants: { [id: string]: Variant } = {
  DEFAULT: {
    id: 'DEFAULT',
    name: 'Default',
    configList: [
      {
        tier: 1,
        newUBNCards: { ids: [], addRandom: false },
        treasure: { level: 1, hasTreasure: true },
      },
      {
        tier: 2,
        newUBNCards: { ids: [], addRandom: true },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: 3,
        newUBNCards: { ids: [], addRandom: true },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: 4,
        newUBNCards: { ids: [], addRandom: true },
        treasure: { hasTreasure: false },
      },
    ],
  },
  SHORT: {
    id: 'SHORT',
    name: 'Short',
    configList: [
      {
        tier: 2,
        newUBNCards: { ids: [], addRandom: true },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: 3,
        newUBNCards: { ids: [], addRandom: true },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: 4,
        newUBNCards: { ids: [], addRandom: true },
        treasure: { hasTreasure: false },
      },
    ],
  },
  EXTENDED: {
    id: 'EXTENDED',
    name: 'Extended',
    configList: [
      {
        tier: 1,
        newUBNCards: { ids: [], addRandom: false },
        treasure: { hasTreasure: false },
      },
      {
        tier: 1,
        newUBNCards: { ids: [], addRandom: false },
        treasure: { level: 1, hasTreasure: true },
      },
      {
        tier: 2,
        newUBNCards: { ids: [], addRandom: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: 2,
        newUBNCards: { ids: [], addRandom: false },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: 3,
        newUBNCards: { ids: [], addRandom: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: 3,
        newUBNCards: { ids: [], addRandom: false },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: 4,
        newUBNCards: { ids: [], addRandom: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: 4,
        newUBNCards: { ids: [], addRandom: false },
        treasure: { hasTreasure: false },
      },
    ],
  },
}

// Automagically generate union type of variant ids from variants
// object
export const variantIds = Object.values(variants).map(val => val.id)
export type VariantId = typeof variantIds[number]

export type BattleStatus =
  | 'locked'
  | 'unlocked'
  | 'before_battle'
  | 'started'
  | 'won'
  | 'lost'
  | 'finished'

/*
 * @deprecated
 */
export type OldStyleBattle = {
  id: string
  expeditionId: string
  nemesisId?: string
  nemesisTier: NemesisTier
  treasure: BattleTreasure
  status: BattleStatus
  rewards?: { treasure: string[]; mage?: string; supplyIds: string[] }
  tries: number
}

export type SettingsSnapshot = {
  supplySetup: IMarketSetup
  usedExpansions: string[]
  availableCardIds: string[]
  availableMageIds: string[]
  availableNemesisIds: string[]
  availableTreasureIds: string[]
  availableUpgradedBasicNemesisCardIds: string[]
}

export type ExpeditionSeedState = Object | true
export type ExpeditionSeed = Seed & {
  supplyState: ExpeditionSeedState
  nemesisState: ExpeditionSeedState
}

/*
 * @deprecated
 */
export type OldStyleExpedition = {
  id: string
  name: string
  migrationVersion?: number
  score: number
  seed: ExpeditionSeed
  settingsSnapshot: SettingsSnapshot
  barracks: {
    mageIds: string[]
    supplyIds: string[]
    treasureIds: string[]
  }
  upgradedBasicNemesisCards: string[]
  banished: string[]
  battles: OldStyleBattle[]
  variantId: string
  bigPocketVariant: boolean
  finished: boolean
}

export type OnLoss = 'skip'

export type Rewards = {
  treasure: {
    ids: Array<string | { random: true; level: 1 | 2 | 3 }>
  }
  mage: {
    ids: Array<string | { random: true }>
  }
  supply: {
    ids: Array<string | IBluePrint>
    bigPocket: boolean
  }
}

export type BattleConfig = {
  tier: 1 | 2 | 3 | 4
  nemesisId?: string
  newUBNCards: { ids: []; addRandom: boolean }
  specialRules?: string
  lossRewards?: Rewards[]
  winRewards?: Rewards
  treasure: BattleTreasure
  onLoss?: OnLoss
}

export type Battle = {
  id: string
  type: 'battle'
  expeditionId: string
  nemesisId?: string
  battleConfig: BattleConfig
  status: BattleStatus
  rewards?: { treasure: string[]; mage?: string; supplyIds: string[] }
  tries: number
}

export type Narrative = {
  id: string
  type: 'narrative'
  text: string
  descisions: string[]
}

export type RewardBranch = {
  id: string
  type: 'reward'
  rewards: Rewards
}

export type BranchConfig = {
  nextBranchId?: string | { [key: number]: string }
}

export type Branch = BranchConfig & (Battle | Narrative | RewardBranch)

export type Expedition = {
  id: string
  name: string
  migrationVersion?: number
  score: number
  seed: ExpeditionSeed
  settingsSnapshot: SettingsSnapshot
  barracks: {
    mageIds: string[]
    supplyIds: string[]
    treasureIds: string[]
  }
  upgradedBasicNemesisCards: string[]
  banished: string[]
  sequence: {
    firstBattleId: string
    branches: { [id: string]: Branch }
  }
  variantId: string
  bigPocketVariant: boolean
  finished: boolean
}

export type Expeditions = {
  [id: string]: Expedition
}
