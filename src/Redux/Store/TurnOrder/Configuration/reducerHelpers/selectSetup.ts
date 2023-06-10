import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const selectSetup = (
  state: State,
  action: ReturnType<typeof actions.selectSetup>
) => {
  const setup = state.SelectedPlayerCount.variations[action.payload]

  if (!setup) return state

  const newState = {
    ...state,
    SelectedSetup: setup,
  }

  return newStateWithDBWrite(newState)
}
