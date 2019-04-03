import { ITurnOrderSetups, ITurnOrderCard } from '../types'

export const TURNORDERCARDS: { [key: string]: ITurnOrderCard } = {
  'player1-1': { id: 'player1-1', name: 'Player 1', cssClass: 'player1' },
  'player1-2': { id: 'player1-2', name: 'Player 1', cssClass: 'player1' },
  'player1-3': { id: 'player1-3', name: 'Player 1', cssClass: 'player1' },
  'player1-4': { id: 'player1-4', name: 'Player 1', cssClass: 'player1' },

  'player2-1': { id: 'player2-1', name: 'Player 2', cssClass: 'player2' },
  'player2-2': { id: 'player2-2', name: 'Player 2', cssClass: 'player2' },

  'player3-1': { id: 'player3-1', name: 'Player 3', cssClass: 'player3' },
  'player4-1': { id: 'player4-1', name: 'Player 4', cssClass: 'player4' },

  'player12-1': { id: 'player12-1', name: 'Player 1/2', cssClass: 'player12' },
  'player12-2': { id: 'player12-2', name: 'Player 1/2', cssClass: 'player12' },
  'player34-1': { id: 'player34-1', name: 'Player 3/4', cssClass: 'player34' },
  'player34-2': { id: 'player34-2', name: 'Player 3/4', cssClass: 'player34' },

  wild: { id: 'wild', name: 'Wild', cssClass: 'wild' },
  wildToken: { id: 'wildToken', name: 'Wild Token', cssClass: 'wild-token' },

  'nemesis-1': { id: 'nemesis-1', name: 'Nemesis', cssClass: 'nemesis' },
  'nemesis-2': { id: 'nemesis-2', name: 'Nemesis', cssClass: 'nemesis' },

  maelstrom: {
    id: 'maelstrom',
    name: 'Maelstrom Assault',
    cssClass: 'maelstrom',
  },

  blitz: {
    id: 'blitz',
    name: 'Blitz',
    cssClass: 'blitz',
  },
}

export const TURNORDERSETUPS: ITurnOrderSetups = {
  'onePlayer': {
    id: 'onePlayer',
    name: '1',
    variations: {
      'default': {
        id: 'default',
        name: 'Default (3 ToC)',
        turnOrderCards: [
          TURNORDERCARDS['player1-1'],
          TURNORDERCARDS['player1-2'],
          TURNORDERCARDS['player1-3'],
          TURNORDERCARDS['nemesis-1'],
          TURNORDERCARDS['nemesis-2'],
        ]
      },
      '4toc': {
        id: '4toc',
        name: '4 ToC',
        turnOrderCards: [
          TURNORDERCARDS['player1-1'],
          TURNORDERCARDS['player1-2'],
          TURNORDERCARDS['player1-3'],
          TURNORDERCARDS['player1-4'],
          TURNORDERCARDS['nemesis-1'],
          TURNORDERCARDS['nemesis-2'],
        ]
      }
    }
  },
  'twoPlayers': {
    id: 'twoPlayers',
    name: '2',
    variations: {
      'default': {
        id: 'default',
        name: 'Default',
        turnOrderCards: [
          TURNORDERCARDS['player1-1'],
          TURNORDERCARDS['player1-2'],
          TURNORDERCARDS['player2-1'],
          TURNORDERCARDS['player2-2'],
          TURNORDERCARDS['nemesis-1'],
          TURNORDERCARDS['nemesis-2'],
        ]
      }
    }
  },
  'threePlayers': {
    id: 'threePlayers',
    name: '3',
    variations: {
      'default': {
        id: 'default',
        name: 'Default',
        turnOrderCards: [
          TURNORDERCARDS['player1-1'],
          TURNORDERCARDS['player2-1'],
          TURNORDERCARDS['player3-1'],
          TURNORDERCARDS['wild'],
          TURNORDERCARDS['nemesis-1'],
          TURNORDERCARDS['nemesis-2'],
        ]
      },
      'wildToken': {
        id: 'wildToken',
        name: 'Wild Token',
        turnOrderCards: [
          TURNORDERCARDS['player1-1'],
          TURNORDERCARDS['player2-1'],
          TURNORDERCARDS['player3-1'],
          TURNORDERCARDS['wildToken'],
          TURNORDERCARDS['nemesis-1'],
          TURNORDERCARDS['nemesis-2'],
        ]
      }
    }
  },
  'fourPlayers': {
    id: 'fourPlayers',
    name: '4',
    variations: {
      'default': {
        id: 'default',
        name: 'Default',
        turnOrderCards: [
          TURNORDERCARDS['player1-1'],
          TURNORDERCARDS['player2-1'],
          TURNORDERCARDS['player3-1'],
          TURNORDERCARDS['player4-1'],
          TURNORDERCARDS['nemesis-1'],
          TURNORDERCARDS['nemesis-2'],
        ]
      },
      'splitPlayers': {
        id: 'splitPlayers',
        name: 'Split Player Cards (1/2, 3/4)',
        turnOrderCards: [
          TURNORDERCARDS['player12-1'],
          TURNORDERCARDS['player12-2'],
          TURNORDERCARDS['player34-1'],
          TURNORDERCARDS['player34-2'],
          TURNORDERCARDS['nemesis-1'],
          TURNORDERCARDS['nemesis-2'],
        ]
      }
    }
  }
}
