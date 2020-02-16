import { RootState } from 'Redux/Store'

const getCount = (state: RootState) =>
  state.Randomizer.BasicNemesisCards.PlayerCount

export const selectors = {
  getCount,
}
