import { OldStyleNemesisTier, TreasureLevel } from './data'
import { IMarketSetup, IBluePrint } from './market'
import { Seed } from './index'
export declare type Variant = {
  id: string
  name: string
  configList: Array<BattleConfig>
}
export declare type BattleTreasure = {
  level?: TreasureLevel
  hasTreasure: boolean
}
export declare const variants: {
  [id: string]: Variant
}
export declare const variantIds: string[]
export declare type VariantId = typeof variantIds[number]
export declare type Status = 'locked' | 'unlocked' | 'finished'
export declare type BattleStatus =
  | Status
  | 'before_battle'
  | 'started'
  | 'won'
  | 'lost'
export declare type SettingsSnapshotConfig = {
  supplySetup: IMarketSetup
  availableCardIds: string[]
  availableMageIds: string[]
  availableNemesisIds: string[]
  availableTreasureIds: string[]
  availableUpgradedBasicNemesisCardIds: string[]
}
export declare type SettingsSnapshot = SettingsSnapshotConfig & {
  usedExpansions: string[]
}
export declare type ExpeditionSeedState = Object | true
export declare type ExpeditionSeed = Seed & {
  supplyState: ExpeditionSeedState
  nemesisState: ExpeditionSeedState
}
export declare type OldStyleBattle = {
  id: string
  expeditionId: string
  nemesisId?: string
  nemesisTier: OldStyleNemesisTier
  treasure: BattleTreasure
  status: BattleStatus
  rewards?: {
    treasure: string[]
    mage?: string
    supplyIds: string[]
  }
  tries: number
}
export declare type OldStyleExpedition = {
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
export declare type NextBranchId =
  | string
  | {
      [key: number]: string
    }
export declare type Barracks = {
  mageIds: string[]
  supplyIds: string[]
  treasureIds: string[]
}
export declare type OnLoss = 'skip'
export declare type NemesisTier = 1 | 2 | 3 | 4
export declare type TreasureRewardConfig = {
  ids: Array<
    | string
    | {
        random: true
        level: 1 | 2 | 3
      }
  >
}
export declare type MageRewardConfig = {
  ids: Array<
    | string
    | {
        random: true
      }
  >
}
export declare type SupplyRewardConfig = {
  ids: Array<string | IBluePrint>
  bigPocket?: boolean
}
export declare type RewardsConfig =
  | {
      type: 'custom'
      treasure?: TreasureRewardConfig
      mage?: MageRewardConfig
      supply?: SupplyRewardConfig
    }
  | {
      type: 'regular'
    }
export declare type BattleConfig = {
  tier: NemesisTier
  nemesisId?: string
  newUBNCards:
    | {
        ids: string[]
        type: 'custom'
      }
    | {
        type: 'regular'
        addRandom: boolean
      }
  specialRules?: string
  lossRewards?: RewardsConfig[]
  winRewards?: RewardsConfig
  treasure: BattleTreasure
  onLoss?: OnLoss
}
export declare type BattleBranch = {
  type: 'battle'
  config: BattleConfig
  nextBranchId?: string
}
export declare type NarrativeConfig = {
  text: string
  decisions: string[] | false
}
export declare type NarrativeBranch = {
  type: 'narrative'
  config: NarrativeConfig
  nextBranchId?: string[]
}
export declare type RewardBranch = {
  type: 'reward'
  config: RewardsConfig
  nextBranchId: string
}
export declare type BranchConfig = BattleBranch | NarrativeBranch | RewardBranch
export declare type BranchesConfig = {
  [id: string]: BranchConfig
}
export declare type SequenceConfig = {
  firstBranchId: string
  branches: BranchesConfig
}
export declare type ExpeditionConfig = {
  name: string
  seedConfig?: string
  sequenceConfig: SequenceConfig
  bigPocketVariantConfig: boolean
  initialBarracksConfig?: Barracks
  initialUBNCardsConfig?: string[]
  settingsSnapshotConfig: SettingsSnapshotConfig
}
export declare type Rewards = {
  treasure: string[]
  mages: string[]
  supplyIds: string[]
}
export declare type Battle = BattleBranch & {
  id: string
  expeditionId: string
  nemesisId?: string
  status: BattleStatus
  rewards?: Rewards
  tries: number
}
export declare type Narrative = NarrativeBranch & {
  id: string
  status: Status
  expeditionId: string
}
export declare type Reward = RewardBranch & {
  id: string
  status: Status
  rewards?: Rewards
  expeditionId: string
}
export declare type Branch = Battle | Narrative | Reward
export declare type Branches = {
  [id: string]: Branch
}
export declare type Sequence = {
  firstBranchId: string
  branches: Branches
}
export declare type Expedition = {
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
export declare type Expeditions = {
  [id: string]: Expedition
}
//# sourceMappingURL=expeditions.d.ts.map
