import * as Data from './data'

export type Variant = {
  id: string
  name: string
  startingTier: number
  tierIncrement: number
  numberOfBattles: number
}

export const variants = {
  DEFAULT: {
    id: 'DEFAULT',
    name: 'Default',
    startingTier: 1,
    tierIncrement: 1,
    numberOfBattles: 4,
  },
  SHORT: {
    id: 'SHORT',
    name: 'Short',
    startingTier: 2,
    tierIncrement: 1,
    numberOfBattles: 3,
  },
  EXTENDED: {
    id: 'EXTENDED',
    name: 'Extended',
    startingTier: 1,
    tierIncrement: 2,
    numberOfBattles: 8,
  },
}

// Automagically generate union type of variant ids from variants
// object
export const variantIds = Object.values(variants).map(val => val.id)
export type VariantId = typeof variantIds[number]

export type Battle = {
  id: number
  nemesisId: string
  nemesisTier: 1 | 2 | 3 | 4
  status: 'locked' | 'unlocked'
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
  upgradedBasicNemesisCards: Data.UpgradedBasicNemesisCard[]
  banished: string[]
  battles: Battle[]
  variantId: string
  bigPocketVariant: boolean
}

export type Expeditions = {
  [id: string]: Expedition
}
