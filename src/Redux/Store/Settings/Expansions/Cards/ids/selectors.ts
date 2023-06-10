import { CardIdsStateSlice } from './types'

const getIds = (state: CardIdsStateSlice) => state.Settings.Expansions.Cards.ids

export const selectors = {
  getIds,
}
