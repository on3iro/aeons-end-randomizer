import * as Data from './data'
export declare type MarketType = 'official' | 'custom'
export declare const THRESHOLD_OPERATIONS: string[]
export declare const SUPPLY_OPERATIONS: readonly string[]
export declare type Operation = typeof SUPPLY_OPERATIONS[number]
export interface IBluePrint {
  id?: string | number
  type: Data.CardType
  operation: Operation
  threshold?: number
  values?: Array<number>
}
export interface IEmptyBluePrint extends IBluePrint {
  type: 'EMPTY'
  operation: 'NoOp'
}
export declare type Slot = IBluePrint | IEmptyBluePrint
export declare type MarketTile = {
  id: string
  type: Data.CardType
  expansion?: string
  name?: string
  cost?: number
  operation: Operation
  threshold?: number
  values?: Array<number>
}
export declare type IMarketSetup = Readonly<{
  id: string
  name: string
  type: MarketType
  default?: boolean
  active: boolean
  tiles: Array<Slot>
  isDirty?: boolean
  isNew?: boolean
}>
export declare type MarketSetups = {
  setups: {
    [id: string]: IMarketSetup
  }
  ids: string[]
}
export declare const isCard: (
  card: Data.ICard | IBluePrint | IEmptyBluePrint
) => card is Data.ICard
//# sourceMappingURL=market.d.ts.map
