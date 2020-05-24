import { UpgradedBasicNemesisCardIdsStateSlice } from './types'

const getIds = (state: UpgradedBasicNemesisCardIdsStateSlice) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards.ids

export const selectors = {
  getIds,
}
