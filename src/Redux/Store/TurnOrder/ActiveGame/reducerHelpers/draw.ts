import { State } from '../types'
import { newStateWithDBWrite } from '../helpers'

export const draw = (state: State) => {
  const { deck } = state

  if (deck.length === 0) return state

  const cardDrawn = deck[deck.length - 1]

  // If the card we have drawn is an alternating card we do not show this
  // turn, we draw another card
  const additionalCard =
    cardDrawn.display === false ? deck[deck.length - 2] : undefined

  const newState = {
    ...state,
    deck: deck.filter(
      card => card.id !== cardDrawn.id && card.id !== additionalCard?.id
    ),
    discard: additionalCard
      ? [additionalCard, cardDrawn, ...state.discard]
      : [cardDrawn, ...state.discard],
  }

  return newStateWithDBWrite(newState)
}
