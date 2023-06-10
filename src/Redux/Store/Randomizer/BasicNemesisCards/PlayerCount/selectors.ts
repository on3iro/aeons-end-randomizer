import { PlayerCountStateSlice } from './types'

const getCount = (state: PlayerCountStateSlice) =>
  state.Randomizer.BasicNemesisCards.PlayerCount

export const selectors = {
  getCount,
}
