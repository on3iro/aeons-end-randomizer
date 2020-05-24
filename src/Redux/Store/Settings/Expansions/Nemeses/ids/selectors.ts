import { NemesisIdsStateSlice } from './types'

const getIds = (state: NemesisIdsStateSlice) =>
  state.Settings.Expansions.Nemeses.ids

export const selectors = {
  getIds,
}
