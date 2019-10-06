import * as Data from './data'

export const modes = {
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

// Automagically generate union type of mode ids from modes
// object
export const modeIds = Object.values(modes).map(val => val.id)
export type ModeId = typeof modeIds[number]

export type Battle = {
  id: number
  nemesisId: string
  nemesisTier: 1 | 2 | 3 | 4
  status: 'locked' | 'unlocked'
  tries: number
}

export type ExpeditionMode = {
  id: string
  name: string
  startingTier: number
  tierIncrement: number
  numberOfBattles: number
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
  modeId: string
  bigPocketMode: boolean
}

export type Expeditions = {
  [id: string]: Expedition
}
