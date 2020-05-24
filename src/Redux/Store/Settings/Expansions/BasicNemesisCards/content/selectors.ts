import { BasicNemesisCardsContentStateSlice } from './types'

const getContent = (state: BasicNemesisCardsContentStateSlice) =>
  state.Settings.Expansions.BasicNemesisCards.content

export const selectors = {
  getContent,
}
