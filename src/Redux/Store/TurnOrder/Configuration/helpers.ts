import config from 'config'
import * as types from 'types'

const adjustSetup = (
  mode: types.Mode,
  setup: types.ITurnOrderSetup
): types.ITurnOrderSetup => {
  switch (mode) {
    case 'Maelstrom': {
      return {
        id: setup.id,
        name: setup.name,
        turnOrderCards: setup.turnOrderCards.map(card => {
          return card.id === 'nemesis-1' || card.id === 'blitz'
            ? config.TURNORDERCARDS['maelstrom']
            : card
        }),
      }
    }

    case 'Blitz': {
      return {
        id: setup.id,
        name: setup.name,
        turnOrderCards: setup.turnOrderCards.map(card => {
          return card.id === 'nemesis-1' || card.id === 'maelstrom'
            ? config.TURNORDERCARDS['blitz']
            : card
        }),
      }
    }

    case 'Blitz + Maelstrom': {
      return {
        id: setup.id,
        name: setup.name,
        turnOrderCards: setup.turnOrderCards.map(card => {
          if (card.id === 'nemesis-1') {
            return config.TURNORDERCARDS['blitz']
          }

          if (card.id === 'nemesis-2') {
            return config.TURNORDERCARDS['maelstrom']
          }

          return card
        }),
      }
    }

    case 'Default':
    default: {
      return setup
    }
  }
}

export { adjustSetup }
