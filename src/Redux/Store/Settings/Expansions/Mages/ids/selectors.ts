import { MageIdsStateSlice } from './types'

const getIds = (state: MageIdsStateSlice) => state.Settings.Expansions.Mages.ids

export const selectors = {
  getIds,
}
