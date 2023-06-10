import { State } from '../types'

import { actions } from '../actions'

import { getRandomBasicNemesisCardList } from './helpers'

export const createDeck = (
  state: State,
  action: ReturnType<typeof actions.createBasicNemesisCardDeck>
) => {
  const { availableCards, playerCount, seed } = action.payload

  const newState = getRandomBasicNemesisCardList(
    availableCards,
    playerCount,
    seed
  )

  return {
    ...state,
    Tier1: newState.Tier1,
    Tier2: newState.Tier2,
    Tier3: newState.Tier3,
  }
}
