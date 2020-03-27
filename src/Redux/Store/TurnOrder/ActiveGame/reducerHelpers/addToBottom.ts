import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const addToBottom = (
  state: State,
  action: ReturnType<typeof actions.addToBottom>
) => {
  const cardId = action.payload
  const cardToAdd = state.discard.find(card => card.id === cardId)

  if (!cardToAdd) return state

  const newState = {
    ...state,
    deck: [cardToAdd, ...state.deck],
    discard: state.discard.filter(card => card.id !== cardId),
  }

  return newStateWithDBWrite(newState)
}
