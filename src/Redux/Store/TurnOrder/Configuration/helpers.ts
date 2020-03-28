import { loop, Cmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import config from 'config'
import * as types from 'types'

import { State } from './types'
import { TURNORDER_CONFIG_DB_KEY } from './constants'
import { actions } from './actions'

const newStateWithDBWrite = (newState: State) => {
  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [TURNORDER_CONFIG_DB_KEY, newState],
      successActionCreator: actions.setToDBSuccessful,
      failActionCreator: actions.setToDBFailed,
    })
  )
}

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

export { newStateWithDBWrite, adjustSetup }
