import { RandomCardsStateSlice } from './types'

const getBasicNemesisCards = (state: RandomCardsStateSlice) =>
  state.Randomizer.BasicNemesisCards.RandomCards

export const selectors = {
  getBasicNemesisCards,
}
