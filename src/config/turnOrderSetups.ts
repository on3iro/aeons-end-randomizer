import { ITurnOrderSetups, ITurnOrderCard } from './types'

export const CARDS: {[key: string]: ITurnOrderCard} = {
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
      CARDS["player1-1"],
      CARDS["player1-2"],
      CARDS["player1-3"],
      CARDS["nemesis-1"],
      CARDS["nemesis-2"],
    ]
  },
  'onePlayerFourToc': {
    id: 'onePlayerFourToc',
    name: '1 Player (4 toc)',
    turnOrderCards: [
      CARDS["player1-1"],
      CARDS["player1-2"],
      CARDS["player1-3"],
      CARDS["player1-4"],
      CARDS["nemesis-1"],
      CARDS["nemesis-2"],
    ]
  },
  'twoPlayers': {
    id: 'twoPlayers',
    name: '2 Players',
    turnOrderCards: [
      CARDS["player1-1"],
      CARDS["player1-2"],
      CARDS["player2-1"],
      CARDS["player2-2"],
      CARDS["nemesis-1"],
      CARDS["nemesis-2"],
    ]
  },
  'threePlayers': {
    id: 'threePlayers',
    name: '3 Players',
    turnOrderCards: [
      CARDS["player1-1"],
      CARDS["player2-1"],
      CARDS["player3-1"],
      CARDS["wild"],
      CARDS["nemesis-1"],
      CARDS["nemesis-2"],
    ]
  },
  'fourPlayers': {
    id: 'fourPlayers',
    name: '4 Players',
    turnOrderCards: [
      CARDS["player1-1"],
      CARDS["player2-1"],
      CARDS["player3-1"],
      CARDS["player4-1"],
      CARDS["nemesis-1"],
      CARDS["nemesis-2"],
    ]
  }
}
