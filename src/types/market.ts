import * as Data from './data'

export type MarketType = 'official' | 'custom'
export const THRESHOLD_OPERATIONS = ['<', '>', '=', '<=', '>='] // Note: should not be a const, because we want to treat it as regular list
export const SUPPLY_OPERATIONS = [
  ...THRESHOLD_OPERATIONS,
  'ANY',
  'OR',
  'NoOp',
] as const
export type Operation = typeof SUPPLY_OPERATIONS[number]

export interface IBluePrint {
  id?: string // the optional id is only used for blueprints used inside custom setups
  type: Data.CardType
  operation: Operation
  threshold?: number
  values?: Array<number>
}

export interface IEmptyBluePrint extends IBluePrint {
  type: 'EMPTY'
  operation: 'NoOp'
}
export type Slot = IBluePrint | IEmptyBluePrint

export type MarketTile = {
  id: string
  type: Data.CardType
  expansion?: string
  name?: string
  cost?: number
  operation: Operation
  threshold?: number
  values?: Array<number>
}

export type IMarketSetup = Readonly<{
  id: string
  name: string
  type: MarketType
  default?: boolean
  active: boolean
  tiles: Array<Slot>
  isDirty?: boolean // Flag to mark new/edited items
  isNew?: boolean // Flag to mark if an item has already been actively saved
}>

export type MarketSetups = {
  setups: { [id: string]: IMarketSetup }
  ids: string[]
}

export const isCard = (card: Data.ICard | Slot): card is Data.ICard => {
  if (!card) return false
  return (card as Data.ICard).name !== undefined
}
