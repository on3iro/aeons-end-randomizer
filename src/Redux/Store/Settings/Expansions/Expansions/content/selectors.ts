import { ExpansionContentStateSlice } from './types'

const getContent = (state: ExpansionContentStateSlice) =>
  state.Settings.Expansions.Expansions.content

const getExpansionById = (
  state: ExpansionContentStateSlice,
  props: { expansionId: string }
) => state.Settings.Expansions.Expansions.content.ENG[props.expansionId]

export const selectors = {
  getContent,
  getExpansionById,
}
