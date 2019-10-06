import * as Data from './data'

export type Expeditions = Array<Expedition>

export type Expedition = {
  id: string
  name: string
}

export type Battle = {
  id: number
  nemesis: Data.ICreature
  nemesisTier: 1 | 2 | 3 | 4
  status: 'locked' | 'unlocked'
  triesToWin: number
}

// ToDo: complete mode model
type DefaultMode = {
  id: 'default'
  expeditionLength: 4
}

type ShortMode = {
  id: 'short'
  expeditionLength: 3
}
type ExtendedMode = {
  id: 'extended'
  expeditionLength: 8
}

type ExpeditionMode = DefaultMode | ShortMode | ExtendedMode

export type ExpeditionFull = {
  id: string
  name: string
  score: number
  barracks: {
    mages: Data.Mage[]
    supply: Data.ICard[]
    treasures: Data.Treasure[]
  }
  banished: string[]
  battles: Battle[]
  mode: ExpeditionMode
  bigPocketMode: boolean
}
