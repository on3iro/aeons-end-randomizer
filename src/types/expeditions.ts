import { NemesisTier, TreasureLevel } from './data'
import { IMarketSetup } from 'types'

export type Variant = {
  id: string
  name: string
  configList: Array<{
    tier: NemesisTier
    treasure: BattleTreasure
  }>
}

export type BattleTreasure = { level?: TreasureLevel; hasTreasure: boolean }

export const variants: { [id: string]: Variant } = {
  DEFAULT: {
    id: 'DEFAULT',
    name: 'Default',
    configList: [
      {
        tier: { tier: 1, isNewTier: false },
        treasure: { level: 1, hasTreasure: true },
      },
      {
        tier: { tier: 2, isNewTier: true },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: { tier: 3, isNewTier: true },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: { tier: 4, isNewTier: true },
        treasure: { hasTreasure: false },
      },
    ],
  },
  SHORT: {
    id: 'SHORT',
    name: 'Short',
    configList: [
      {
        tier: { tier: 2, isNewTier: true },
        treasure: { level: 2, hasTreasure: true },
      },
      {
        tier: { tier: 3, isNewTier: true },
        treasure: { level: 3, hasTreasure: true },
      },
      {
        tier: { tier: 4, isNewTier: true },
        treasure: { hasTreasure: false },
      },
    ],
  },
  EXTENDED: {
    id: 'EXTENDED',
    name: 'Extended',
    configList: [
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

export type Battle = {
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
  availableCardIds: string[]
  availableMageIds: string[]
  availableNemesisIds: string[]
  availableTreasureIds: string[]
  availableUpgradedBasicNemesisCardIds: string[]
  // TODO add basicNemesisIds
}

export type Expedition = {
  id: string
  name: string
  score: number
  seed?: string
  settingsSnapshot?: SettingsSnapshot
  barracks: {
    mageIds: string[]
    supplyIds: string[]
    treasureIds: string[]
  }
  upgradedBasicNemesisCards: string[]
  banished: string[]
  battles: Battle[]
  variantId: string
  bigPocketVariant: boolean
  finished: boolean
}

export type Expeditions = {
  [id: string]: Expedition
}
