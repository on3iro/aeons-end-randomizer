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

export const MODES = ['Default', 'Maelstrom', 'Blitz'] as const
export type Mode = typeof MODES[number] // automatically creates union from tuple
