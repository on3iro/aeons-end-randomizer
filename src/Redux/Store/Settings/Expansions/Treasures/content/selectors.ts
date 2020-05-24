import { TreasureContentStateSlice } from './types'

const getContent = (state: TreasureContentStateSlice) =>
  state.Settings.Expansions.Treasures.content

const getById = (state: TreasureContentStateSlice, props: { id: string }) =>
  state.Settings.Expansions.Treasures.content.ENG[props.id]

export const selectors = {
  getContent,
  getById,
}
