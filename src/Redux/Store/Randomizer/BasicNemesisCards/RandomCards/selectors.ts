import { RootState } from 'Redux/Store'

const getBasicNemesisCards = (state: RootState) =>
  state.Randomizer.BasicNemesisCards.RandomCards

export const selectors = {
  getBasicNemesisCards,
}
