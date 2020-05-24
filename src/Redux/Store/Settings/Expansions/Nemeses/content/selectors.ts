import { NemesisContentStateSlice } from './types'

const getContent = (state: NemesisContentStateSlice) =>
  state.Settings.Expansions.Nemeses.content

const getById = (state: NemesisContentStateSlice, props: { id: string }) =>
  state.Settings.Expansions.Nemeses.content.ENG[props.id]

export const selectors = {
  getContent,
  getById,
}
