import { NemesisTier } from './data'

export type Variant = {
  id: string
  name: string
  tierList: NemesisTier[]
}

export const variants: { [id: string]: Variant } = {
  DEFAULT: {
    id: 'DEFAULT',
    name: 'Default',
    tierList: [
      { tier: 1, isNewTier: false },
      { tier: 2, isNewTier: true },
      { tier: 3, isNewTier: true },
      { tier: 4, isNewTier: true },
    ],
  },
  SHORT: {
    id: 'SHORT',
    name: 'Short',
    tierList: [
      { tier: 2, isNewTier: true },
      { tier: 3, isNewTier: true },
      { tier: 4, isNewTier: true },
    ],
  },
  EXTENDED: {
    id: 'EXTENDED',
    name: 'Extended',
    tierList: [
      { tier: 1, isNewTier: false },
      { tier: 1, isNewTier: false },
      { tier: 2, isNewTier: true },
      { tier: 2, isNewTier: false },
      { tier: 3, isNewTier: true },
      { tier: 3, isNewTier: false },
      { tier: 4, isNewTier: true },
      { tier: 4, isNewTier: false },
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
  status: BattleStatus
  tries: number
}

export type Expedition = {
  id: string
  name: string
  score: number
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
}

export type Expeditions = {
  [id: string]: Expedition
}
