import { BasicNemesisCardIdsStateSlice } from './types'

const getIds = (state: BasicNemesisCardIdsStateSlice) =>
  state.Settings.Expansions.BasicNemesisCards.ids

export const selectors = {
  getIds,
}
