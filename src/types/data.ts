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

export type Nemesis = ICreature & {
  health: number
  additionalInfo: string
  difficulty: number
  expeditionRating: 1 | 2 | 3 | 4
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

export type Treasure = {
  id: string
  expansion: string
  name: string
  level: 1 | 2 | 3
  subtype?: CardType
  effect: string
}

export type Treasures = {
  [id: string]: Treasure
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
  upgradedBasicNemesisCards: UpgradedBasicNemesisCards
  expansionIds: string[]
  nemesisIds: string[]
  mageIds: string[]
  cardIds: string[]
  treasureIds: string[]
  upgradedBasicNemesisCardIds: string[]
}
