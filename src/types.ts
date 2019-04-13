//////////
// UTIL //
//////////

type List = string | number | boolean | undefined | null | void | {}
export const tuple = <T extends List[]>(...args: T) => args

//////////
// DATA //
//////////

export interface ICreature {
  expansion: string
  name: string
  id: string
}

export type CardType = 'Gem' | 'Relic' | 'Spell' | 'EMPTY'

export interface ICard {
  type: CardType
  expansion: string
  name: string
  id: string
  cost: number
}

export type ExpansionType = 'standalone' | 'mini' | 'promo'

export type EntityType = 'nemeses' | 'mages' | 'cards'
export type Entity = ICard | ICreature

export interface IExpansion {
  id: string
  name: string
  type: ExpansionType
  nemeses: Array<ICreature>
  mages: Array<ICreature>
  cards: Array<ICard>
}

export interface IExpansionData {
  [key: string]: IExpansion
}

////////////
// Market //
////////////

export type MarketType = 'official' | 'custom'
export type Operation = '<' | '>' | '=' | '<=' | '>=' | 'ANY' | 'OR' | 'NoOp'

export interface IBluePrint {
  type: CardType
  operation: Operation
  threshold?: number
  values?: Array<number>
}

export interface IEmptyBluePrint extends IBluePrint {
  type: 'EMPTY'
  operation: 'NoOp'
}
export type Slot = IBluePrint | IEmptyBluePrint

export type IMarketSetup = Readonly<{
  id: string
  name: string
  type: MarketType
  default?: boolean
  active: boolean
  tiles: Array<Slot>
}>

export type IMarketSetups = Readonly<{ [key: string]: IMarketSetup }>

///////////////
// TurnOrder //
///////////////

export type Player =
  | 'Player 1'
  | 'Player 2'
  | 'Player 3'
  | 'Player 4'
  | 'Player 1/2'
  | 'Player 3/4'
  | 'Nemesis'
  | 'Wild'
  | 'Wild Token'
  | 'Maelstrom Assault'
  | 'Blitz'

export type TurnOrderCardType =
  | 'player1'
  | 'player2'
  | 'player3'
  | 'player4'
  | 'player12'
  | 'player34'
  | 'wild'
  | 'wild-token'
  | 'nemesis'
  | 'maelstrom'
  | 'blitz'

export interface ITurnOrderCard {
  id: string
  name: Player
  type: TurnOrderCardType
}

export interface ITurnOrderSetups {
  [key: string]: ITurnOrderPlayerCount
}

export interface ITurnOrderPlayerCount {
  id: string
  name: string
  variations: ITurnOrderVariations
}

export interface ITurnOrderVariations {
  [key: string]: ITurnOrderSetup
}

export interface ITurnOrderSetup {
  id: string
  name: string
  turnOrderCards: Array<ITurnOrderCard>
}

export const isCard = (card: ICard | Slot): card is ICard => {
  return (<ICard>card).name !== undefined
}

export const MODES = tuple('Default', 'Maelstrom', 'Blitz')
export type Mode = typeof MODES[number] // automatically creates union from tuple
