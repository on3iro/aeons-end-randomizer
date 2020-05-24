import { ExpansionIdsStateSlice } from './types'

const getIds = (state: ExpansionIdsStateSlice) =>
  state.Settings.Expansions.Expansions.ids

export const selectors = {
  getIds,
}
