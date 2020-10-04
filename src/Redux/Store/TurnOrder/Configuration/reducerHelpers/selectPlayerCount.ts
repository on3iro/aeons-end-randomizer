import AERData from 'aer-data/src/index'

import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const selectPlayerCount = (
  state: State,
  action: ReturnType<typeof actions.selectPlayerCount>
) => {
  const playerCount = AERData.turnordersetups[action.payload]

  if (!playerCount) return state

  const newState = {
    ...state,
    SelectedPlayerCount: AERData.turnordersetups[action.payload],
    SelectedSetup:
      AERData.turnordersetups[action.payload].variations['default'],
  }

  return newStateWithDBWrite(newState)
}
