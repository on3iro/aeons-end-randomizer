import { BannerIdsStateSlice } from './types'

const getIds = (state: BannerIdsStateSlice) => state.Settings.Expansions.Banners.ids

export const selectors = {
  getIds,
}
