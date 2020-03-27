import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const addToTop = (
  state: State,
  action: ReturnType<typeof actions.addToTop>
) => {
  const cardId = action.payload
  const cardToAdd = state.discard.find(card => card.id === cardId)

  if (!cardToAdd) return state

  const newState = {
    ...state,
    deck: [...state.deck, cardToAdd],
    discard: state.discard.filter(card => card.id !== cardId),
  }

  return newStateWithDBWrite(newState)
}
