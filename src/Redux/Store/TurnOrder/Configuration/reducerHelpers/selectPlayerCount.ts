import config from 'config'

import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const selectPlayerCount = (
  state: State,
  action: ReturnType<typeof actions.selectPlayerCount>
) => {
  const playerCount = config.TURNORDERSETUPS[action.payload]

  if (!playerCount) return state

  const newState = {
    ...state,
    SelectedPlayerCount: config.TURNORDERSETUPS[action.payload],
    SelectedSetup: config.TURNORDERSETUPS[action.payload].variations['default'],
  }

  return newStateWithDBWrite(newState)
}
