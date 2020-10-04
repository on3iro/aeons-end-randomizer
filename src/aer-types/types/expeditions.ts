import { OldStyleNemesisTier, TreasureLevel } from './data'
import { IMarketSetup, IBluePrint } from './market'
import { Seed } from './index'

//////////
// Util //
//////////

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
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { level: 1, hasTreasure: true },
      },
      {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: 3,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: 4,
        newUBNCards: { type: 'regular', addRandom: true },
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
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: 3,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: 4,
        newUBNCards: { type: 'regular', addRandom: true },
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
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { hasTreasure: false },
      },
      {
        tier: 1,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { level: 1, hasTreasure: true },
      },
      {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: 2,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: 3,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: 3,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: 4,
        newUBNCards: { type: 'regular', addRandom: true },
        treasure: { hasTreasure: false },
      },
      {
        tier: 4,
        newUBNCards: { type: 'regular', addRandom: false },
        treasure: { hasTreasure: false },
      },
    ],
  },
}

// Automagically generate union type of variant ids from variants
// object
export const variantIds = Object.values(variants).map((val) => val.id)
export type VariantId = typeof variantIds[number]

export type Status = 'locked' | 'unlocked' | 'finished'

export type BattleStatus = Status | 'before_battle' | 'started' | 'won' | 'lost'

export type SettingsSnapshotConfig = {
  supplySetup: IMarketSetup
  availableCardIds: string[]
  availableMageIds: string[]
  availableNemesisIds: string[]
  availableTreasureIds: string[]
  availableUpgradedBasicNemesisCardIds: string[]
}

export type SettingsSnapshot = SettingsSnapshotConfig & {
  usedExpansions: string[]
}

export type ExpeditionSeedState = Object | true
export type ExpeditionSeed = Seed & {
  supplyState: ExpeditionSeedState
  nemesisState: ExpeditionSeedState
}

/*
 * @deprecated
 */
export type OldStyleBattle = {
  id: string
  expeditionId: string
  nemesisId?: string
  nemesisTier: OldStyleNemesisTier
  treasure: BattleTreasure
  status: BattleStatus
  rewards?: { treasure: string[]; mage?: string; supplyIds: string[] }
  tries: number
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

export type NextBranchId = string | { [key: number]: string }

export type Barracks = {
  mageIds: string[]
  supplyIds: string[]
  treasureIds: string[]
}

export type OnLoss = 'skip'

export type NemesisTier = 1 | 2 | 3 | 4

///////////////////
// Configuration //
///////////////////

export type TreasureRewardConfig = {
  ids: Array<string | { random: true; level: 1 | 2 | 3 }>
}

export type MageRewardConfig = {
  ids: Array<string | { random: true }>
}

export type SupplyRewardConfig = {
  ids: Array<string | IBluePrint>
  bigPocket?: boolean
}

export type RewardsConfig =
  | {
      type: 'custom'
      treasure?: TreasureRewardConfig
      mage?: MageRewardConfig
      supply?: SupplyRewardConfig
    }
  | { type: 'regular' }

export type BattleConfig = {
  tier: NemesisTier
  nemesisId?: string
  newUBNCards:
    | { ids: string[]; type: 'custom' }
    | { type: 'regular'; addRandom: boolean }
  specialRules?: string
  lossRewards?: RewardsConfig[]
  winRewards?: RewardsConfig
  treasure: BattleTreasure
  onLoss?: OnLoss
}

export type BattleBranch = {
  type: 'battle'
  config: BattleConfig
  nextBranchId?: string
}

export type NarrativeConfig = {
  text: string
  decisions: string[] | false
}

export type NarrativeBranch = {
  type: 'narrative'
  config: NarrativeConfig
  nextBranchId?: string[]
}

export type RewardBranch = {
  type: 'reward'
  config: RewardsConfig
  nextBranchId: string // mandatory
}

export type BranchConfig = BattleBranch | NarrativeBranch | RewardBranch

export type BranchesConfig = { [id: string]: BranchConfig }

export type SequenceConfig = {
  firstBranchId: string
  branches: BranchesConfig
}

export type ExpeditionConfig = {
  name: string
  seedConfig?: string
  sequenceConfig: SequenceConfig
  bigPocketVariantConfig: boolean
  initialBarracksConfig?: Barracks
  initialUBNCardsConfig?: string[]
  settingsSnapshotConfig: SettingsSnapshotConfig
}

////////////////
// Expedition //
////////////////

export type Rewards = {
  treasure: string[]
  mages: string[]
  supplyIds: string[]
}

export type Battle = BattleBranch & {
  id: string
  expeditionId: string
  nemesisId?: string
  status: BattleStatus
  // These are actual rewards which where rolled, not config
  rewards?: Rewards
  tries: number
}

export type Narrative = NarrativeBranch & {
  id: string
  status: Status
  expeditionId: string
}

export type Reward = RewardBranch & {
  id: string
  status: Status
  // These are actual rewards which where rolled, not config
  rewards?: Rewards
  expeditionId: string
}

export type Branch = Battle | Narrative | Reward

export type Branches = { [id: string]: Branch }

export type Sequence = {
  firstBranchId: string
  branches: Branches
}

export type Expedition = {
  id: string
  name: string
  bigPocketVariant: boolean
  score: number
  seed: ExpeditionSeed
  sequence: Sequence
  barracks: Barracks
  banished: string[]
  upgradedBasicNemesisCards: string[]
  settingsSnapshot: SettingsSnapshot
  finished: boolean
  migrationVersion?: number
  initialBarracksConfig?: Barracks
  initialUBNCardsConfig?: string[]
}

export type Expeditions = {
  [id: string]: Expedition
}
