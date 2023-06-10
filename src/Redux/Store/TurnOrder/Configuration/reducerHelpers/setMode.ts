import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const setMode = (
  state: State,
  action: ReturnType<typeof actions.setMode>
) => {
  const newState = { ...state, Mode: action.payload }
  return newStateWithDBWrite(newState)
}
