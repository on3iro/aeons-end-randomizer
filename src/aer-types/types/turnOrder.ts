export type Player =
  | 'Player 1'
  | 'Player 2'
  | 'Player 3'
  | 'Player 4'
  | 'Player 1 (alternate)'
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
  alternate?: boolean
  display?: boolean
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

export const MODES = [
  'Default',
  'Maelstrom',
  'Blitz',
  'Blitz + Maelstrom',
] as const
export type Mode = typeof MODES[number] // automatically creates union from tuple

export const PLAYER_COUNT_IDS = [
  'onePlayer',
  'twoPlayers',
  'threePlayers',
  'fourPlayers',
] as const
export type PlayerCountId = typeof PLAYER_COUNT_IDS[number]

export const TURNORDER_SETUP_VARIATION_IDS = [
  'default',
  '4toc',
  '34alternating',
  'wildToken',
  'splitPlayers',
] as const
export type TurnorderSetupVariationId = typeof TURNORDER_SETUP_VARIATION_IDS[number]
