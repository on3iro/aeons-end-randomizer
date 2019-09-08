//////////
// DATA //
//////////

export interface ICreature {
  expansion: string
  name: string
  id: string
}

export const CARD_TYPES = ['Gem', 'Relic', 'Spell', 'EMPTY'] as const
export type CardType = typeof CARD_TYPES[number]

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

export type Expansion = {
  id: string
  name: string
  type: ExpansionType
}

export type Expansions = {
  [id: string]: Expansion
}

export type Nemeses = {
  [id: string]: ICreature
}

export type Mages = {
  [id: string]: ICreature
}

export type Cards = {
  [id: string]: ICard
}

export type NormalizedData = {
  expansions: Expansions
  nemeses: Nemeses
  mages: Mages
  cards: Cards
  expansionIds: string[]
  nemesisIds: string[]
  mageIds: string[]
  cardIds: string[]
}

////////////
// Market //
////////////

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
  isDirty?: boolean // Flag to mark new/edited items
  isNew?: boolean // Flag to mark if an item has already been actively saved
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
  if (!card) return false
  return (card as ICard).name !== undefined
}

export const MODES = ['Default', 'Maelstrom', 'Blitz'] as const
export type Mode = typeof MODES[number] // automatically creates union from tuple
