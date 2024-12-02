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

export const setFriend = (
  state: State,
  action: ReturnType<typeof actions.setFriend>
) => {
  const newState = { ...state, Friend: action.payload }
  return newStateWithDBWrite(newState)
}

export const setFoe = (
  state: State,
  action: ReturnType<typeof actions.setFoe>
) => {
  const newState = { ...state, Foe: action.payload }
  return newStateWithDBWrite(newState)
}
