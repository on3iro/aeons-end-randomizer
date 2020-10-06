export declare type Player =
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
  | 'Thief Of Dreams Delirium'
export declare type TurnOrderCardType =
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
  | 'thief-of-dreams'
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
export declare const MODES: readonly [
  'Default',
  'Maelstrom',
  'Blitz',
  'Blitz + Maelstrom',
  'Thief Of Dreams'
]
export declare type Mode = typeof MODES[number]
export declare const PLAYER_COUNT_IDS: readonly [
  'onePlayer',
  'twoPlayers',
  'threePlayers',
  'fourPlayers'
]
export declare type PlayerCountId = typeof PLAYER_COUNT_IDS[number]
export declare const TURNORDER_SETUP_VARIATION_IDS: readonly [
  'default',
  '4toc',
  '34alternating',
  'wildToken',
  'splitPlayers'
]
export declare type TurnorderSetupVariationId = typeof TURNORDER_SETUP_VARIATION_IDS[number]
//# sourceMappingURL=turnOrder.d.ts.map
