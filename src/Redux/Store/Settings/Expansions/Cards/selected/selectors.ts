import { SelectedCardsStateSlice } from './types'
import { createSelector } from 'reselect'

const getSelected = (state: SelectedCardsStateSlice) =>
  state.Settings.Expansions.Cards.selected

const getId = (_: unknown, props: { cardId: string }) => props.cardId

const getIsSelected = createSelector([getSelected, getId], (selectedIds, id) =>
  selectedIds.includes(id)
)

export const selectors = {
  getSelected,
  getIsSelected,
}
