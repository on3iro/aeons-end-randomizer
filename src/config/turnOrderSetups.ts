import { ITurnOrderSetups, ITurnOrderCard } from '../types'

export const TURNORDERCARDS: {[key: string]: ITurnOrderCard} = {
  "player1-1": {id:"player1-1", name: 'Player 1', cssClass: 'player1'},
  "player1-2": {id:"player1-2", name: 'Player 1', cssClass: 'player1'},
  "player1-3": {id:"player1-3", name: 'Player 1', cssClass: 'player1'},
  "player1-4": {id:"player1-4", name: 'Player 1', cssClass: 'player1'},

  "player2-1": {id:"player2-1", name: 'Player 2', cssClass: 'player2'},
  "player2-2": {id:"player2-2", name: 'Player 2', cssClass: 'player2'},

  "player3-1": {id:"player3-1", name: 'Player 3', cssClass: 'player3'},
  "player4-1": {id:"player4-1", name: 'Player 4', cssClass: 'player4'},

  "wild": {id:"wild", name: 'Wild', cssClass: 'wild'},

  "nemesis-1": {id:"nemesis-1", name: 'Nemesis', cssClass: 'nemesis'},
  "nemesis-2": {id:"nemesis-2", name: 'Nemesis', cssClass: 'nemesis'},

  "maelstrom": {id:"maelstrom", name: 'Maelstrom Assault', cssClass: 'maelstrom'},
}

export const TURNORDERSETUPS: ITurnOrderSetups = {
  'onePlayerThreeToc': {
    id: 'onePlayerThreeToc',
    name: '1 Player (3 toc)',
    turnOrderCards: [
      TURNORDERCARDS["player1-1"],
      TURNORDERCARDS["player1-2"],
      TURNORDERCARDS["player1-3"],
      TURNORDERCARDS["nemesis-1"],
      TURNORDERCARDS["nemesis-2"],
    ]
  },
  'onePlayerFourToc': {
    id: 'onePlayerFourToc',
    name: '1 Player (4 toc)',
    turnOrderCards: [
      TURNORDERCARDS["player1-1"],
      TURNORDERCARDS["player1-2"],
      TURNORDERCARDS["player1-3"],
      TURNORDERCARDS["player1-4"],
      TURNORDERCARDS["nemesis-1"],
      TURNORDERCARDS["nemesis-2"],
    ]
  },
  'twoPlayers': {
    id: 'twoPlayers',
    name: '2 Players',
    turnOrderCards: [
      TURNORDERCARDS["player1-1"],
      TURNORDERCARDS["player1-2"],
      TURNORDERCARDS["player2-1"],
      TURNORDERCARDS["player2-2"],
      TURNORDERCARDS["nemesis-1"],
      TURNORDERCARDS["nemesis-2"],
    ]
  },
  'threePlayers': {
    id: 'threePlayers',
    name: '3 Players',
    turnOrderCards: [
      TURNORDERCARDS["player1-1"],
      TURNORDERCARDS["player2-1"],
      TURNORDERCARDS["player3-1"],
      TURNORDERCARDS["wild"],
      TURNORDERCARDS["nemesis-1"],
      TURNORDERCARDS["nemesis-2"],
    ]
  },
  'fourPlayers': {
    id: 'fourPlayers',
    name: '4 Players',
    turnOrderCards: [
      TURNORDERCARDS["player1-1"],
      TURNORDERCARDS["player2-1"],
      TURNORDERCARDS["player3-1"],
      TURNORDERCARDS["player4-1"],
      TURNORDERCARDS["nemesis-1"],
      TURNORDERCARDS["nemesis-2"],
    ]
  }
}
