import { TreasureIdsStateSlice } from './types'

const getIds = (state: TreasureIdsStateSlice) =>
  state.Settings.Expansions.Treasures.ids

export const selectors = {
  getIds,
}
