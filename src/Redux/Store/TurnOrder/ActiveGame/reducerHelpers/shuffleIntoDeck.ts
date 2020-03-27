import { shuffleDeck } from 'Redux/helpers'

import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const shuffleIntoDeck = (
  state: State,
  action: ReturnType<typeof actions.shuffleIntoDeck>
) => {
  const cardId = action.payload
  const cardToShuffle = state.discard.find(card => card.id === cardId)

  if (!cardToShuffle) return state

  const newDeck = [...state.deck, cardToShuffle]
  // FIXME shuffling should happen inside the action not the reducer!!!
  const shuffledDeck = shuffleDeck(newDeck)

  const newState = {
    ...state,
    deck: shuffledDeck,
    discard: state.discard.filter(card => card.id !== cardId),
  }

  return newStateWithDBWrite(newState)
}
