import { MagesContentStateSlice } from './types'

const getContent = (state: MagesContentStateSlice) =>
  state.Settings.Expansions.Mages.content

const getById = (state: MagesContentStateSlice, props: { id: string }) =>
  state.Settings.Expansions.Mages.content.ENG[props.id]

export const selectors = {
  getContent,
  getMageById: getById,
}
