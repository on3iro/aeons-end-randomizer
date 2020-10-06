export declare type OldStyleNemesisTier = {
  tier: 1 | 2 | 3 | 4
  isNewTier: boolean
}
export declare type PlayerCount = 1 | 2 | 3 | 4
export interface ICreature {
  expansion: string
  name: string
  id: string
}
export declare const CARD_TYPES: readonly [
  'ANY',
  'Gem',
  'Relic',
  'Spell',
  'EMPTY'
]
export declare type CardType = typeof CARD_TYPES[number]
export declare type ICard = {
  type: CardType
  expansion: string
  name: string
  id: string
  cost: number
  effect: string
  keywords: string[]
}
export declare type ExpansionType = 'standalone' | 'mini' | 'promo'
export declare type EntityType = 'nemeses' | 'mages' | 'cards'
export declare type Entity = ICard | ICreature
export declare type NemesisCardType = 'Power' | 'Minion' | 'Attack'
export declare type NemesisCardTier = 1 | 2 | 3
export declare type MinionCard = {
  type: 'Minion'
  hp: number
  shields?: number
}
export declare type PowerCard = {
  type: 'Power'
  power: number
}
export declare type AttackCard = {
  type: 'Attack'
}
export declare type BasicNemesisCard = {
  id: string
  name: string
  expansion: string
  tier: NemesisCardTier
  effect: string
} & (MinionCard | PowerCard | AttackCard)
export declare type UpgradedBasicNemesisCard = BasicNemesisCard & {
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
export declare type Expansion = {
  id: string
  name: string
  type: ExpansionType
}
export declare type Expansions = {
  [id: string]: Expansion
}
export declare type ExpeditionRating = 1 | 2 | 3 | 4
export declare type Nemesis = ICreature & {
  health: number
  additionalInfo: string
  difficulty: number
  expeditionRating: ExpeditionRating
}
export declare type Mage = ICreature & {
  uniqueStarters: ICard[]
  mageTitle: string | 'Custom'
  ability: string | 'Custom'
  complexityRating?: number
  numberOfCharges: number | 'Custom'
}
export declare type Nemeses = {
  [id: string]: Nemesis
}
export declare type Mages = {
  [id: string]: Mage
}
export declare type Cards = {
  [id: string]: ICard
}
export declare type TreasureLevel = 1 | 2 | 3
export declare type Treasure = {
  id: string
  expansion: string
  name: string
  level: TreasureLevel
  subtype?: CardType
  effect: string
}
export declare type Treasures = {
  [id: string]: Treasure
}
export declare type BasicNemesisCards = {
  [id: string]: BasicNemesisCard
}
export declare type UpgradedBasicNemesisCards = {
  [id: string]: UpgradedBasicNemesisCard
}
export declare type NormalizedData = {
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
//# sourceMappingURL=data.d.ts.map
