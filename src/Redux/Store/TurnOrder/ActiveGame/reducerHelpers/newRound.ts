import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const newRound = (
  state: State,
  action: ReturnType<typeof actions.newRound>
) => {
  const adjustedDeck = action.payload.deck.map(card => {
    // We make sure we change the display of alternating cards
    // each round
    if (card.alternate) {
      return { ...card, display: !card.display }
    }

    return card
  })

  const newRoundCount = state.round + 1

  const newState = {
    ...state,
    deck: adjustedDeck,
    discard: [],
    round: newRoundCount,
  }

  return newStateWithDBWrite(newState)
}
