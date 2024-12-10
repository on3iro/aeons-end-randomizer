import { FoeIdsStateSlice } from './types'

const getIds = (state: FoeIdsStateSlice) => state.Settings.Expansions.Foes.ids

export const selectors = {
  getIds,
}
