import { CardsContentStateSlice } from './types'

const getContent = (state: CardsContentStateSlice) =>
  state.Settings.Expansions.Cards.content

const getCardById = (state: CardsContentStateSlice, props: { id: string }) =>
  state.Settings.Expansions.Cards.content.ENG[props.id]

export const selectors = {
  getContent,
  getCardById,
}
