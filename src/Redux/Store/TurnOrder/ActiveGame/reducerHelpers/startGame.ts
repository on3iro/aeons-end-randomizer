import { newStateWithDBWrite } from '../helpers'
import { actions } from '../actions'

export const startGame = (action: ReturnType<typeof actions.startGame>) => {
  const adjustedDeck = action.payload.map(card => {
    // For each card which is supposed to be alternating
    // (only displayn every other round), we add a 'display' flag
    if (card.alternate) {
      return { ...card, display: true }
    }

    return card
  })

  return newStateWithDBWrite({
    started: true,
    deck: adjustedDeck,
    discard: [],
    round: 1,
  })
}
