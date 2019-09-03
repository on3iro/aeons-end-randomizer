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

// FIXME As soon as we have implemented all respective data
// we should remove the optional '?' flags
export type ICard = {
  type: CardType
  expansion: string
  name: string
  id: string
  cost: number
  effect: string
  keywords: string[]
}

export type ExpansionType = 'standalone' | 'mini' | 'promo'

export type EntityType = 'nemeses' | 'mages' | 'cards'
export type Entity = ICard | ICreature

export type NemesisCardType = 'Power' | 'Minion' | 'Attack'

export type UpgradedBasicNemesisCard = {
  id: string
  name: string
  expansion: string
  tier: 1 | 2 | 3
  type: NemesisCardType
}

export interface IExpansion {
  id: string
  name: string
  type: ExpansionType
  nemeses: Array<Nemesis>
  mages: Array<Mage>
  cards: Array<ICard>
  treasures?: Array<Treasure>
  upgradedBasicNemesisCards?: Array<UpgradedBasicNemesisCard>
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

// FIXME As soon as we have implemented all respective data
// we should remove the optional '?' flags
// FIXME use this datatype throughout the whole app
export type Nemesis = ICreature & {
  health: number
  additionalInfo: string
  difficulty: number
  expeditionRating: 1 | 2 | 3 | 4
}

// FIXME As soon as we have implemented all respective data
// we should remove the optional '?' flags
// FIXME use this datatype throughout the whole app
export type Mage = ICreature & {
  uniqueStarters: ICard[]
  mageTitle: string | 'Custom'
  ability: string | 'Custom'
  complexityRating?: number // keep this optional
  numberOfCharges: number | 'Custom'
}

export type Nemeses = {
  [id: string]: Nemesis
}

export type Mages = {
  [id: string]: Mage
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

export type MarketTile = {
  id?: string
  type: CardType
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

/////////////////
// Expeditions //
/////////////////

export type Expeditions = Array<Expedition>

export type Expedition = {
  id: string
  name: string
}

export type Treasure = {
  id: string
  expansion: string
  name: string
  level: 1 | 2 | 3
  subtype?: CardType
  effect: string
}

export type Battle = {
  id: number
  nemesis: ICreature
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
    mages: Mage[]
    supply: ICard[]
    treasures: Treasure[]
  }
  banished: string[]
  battles: Battle[]
  mode: ExpeditionMode
  bigPocketMode: boolean
}

// Gamestates:
//  - new = tier 1 unlocked?
//  - tier won
//  - tier lost
//  - new tier
//  - repeat tier
