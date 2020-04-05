export type OldStyleNemesisTier = {
  tier: 1 | 2 | 3 | 4
  isNewTier: boolean
}

export type PlayerCount = 1 | 2 | 3 | 4

export interface ICreature {
  expansion: string
  name: string
  id: string
}

export const CARD_TYPES = ['Gem', 'Relic', 'Spell', 'EMPTY'] as const
export type CardType = typeof CARD_TYPES[number]

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
export type NemesisCardTier = 1 | 2 | 3

export type MinionCard = {
  type: 'Minion'
  hp: number
  shields?: number
}

export type PowerCard = {
  type: 'Power'
  power: number
}

export type AttackCard = {
  type: 'Attack'
}

export type BasicNemesisCard = {
  id: string
  name: string
  expansion: string
  tier: NemesisCardTier
  effect: string
  // TODO do we already want to add the other optional values from Wills spreadsheet?
} & (MinionCard | PowerCard | AttackCard)

// FIXME should also just be a BasicNemesisCard -> we need to adjust all occurences
// inside the app, as soon as we added the necessary information to our existing data set
export type UpgradedBasicNemesisCard = BasicNemesisCard & {
  upgraded: boolean
}

export interface IExpansion {
  id: string
  name: string
  type: ExpansionType
  nemeses: Array<Nemesis>
  mages: Array<Mage>
  cards: Array<ICard>
  treasures?: Array<Treasure>
  basicNemesisCards?: Array<BasicNemesisCard>
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

export type ExpeditionRating = 1 | 2 | 3 | 4

export type Nemesis = ICreature & {
  health: number
  additionalInfo: string
  difficulty: number
  expeditionRating: ExpeditionRating
}

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

export type TreasureLevel = 1 | 2 | 3

export type Treasure = {
  id: string
  expansion: string
  name: string
  level: TreasureLevel
  subtype?: CardType
  effect: string
}

export type Treasures = {
  [id: string]: Treasure
}

export type BasicNemesisCards = {
  [id: string]: BasicNemesisCard
}

export type UpgradedBasicNemesisCards = {
  [id: string]: UpgradedBasicNemesisCard
}

export type NormalizedData = {
  expansions: Expansions
  nemeses: Nemeses
  mages: Mages
  cards: Cards
  treasures: Treasures
  basicNemesisCards: BasicNemesisCards
  upgradedBasicNemesisCards: UpgradedBasicNemesisCards
  expansionIds: string[]
  nemesisIds: string[]
  mageIds: string[]
  cardIds: string[]
  treasureIds: string[]
  basicNemesisCardIds: string[]
  upgradedBasicNemesisCardIds: string[]
}
