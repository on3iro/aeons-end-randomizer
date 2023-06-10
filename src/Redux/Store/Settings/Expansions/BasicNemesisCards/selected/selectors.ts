import { SelectedBasicNemesisCardsStateSlice } from './types'
import { createSelector } from 'reselect'

const getSelected = (state: SelectedBasicNemesisCardsStateSlice) =>
  state.Settings.Expansions.BasicNemesisCards.selected

const getId = (_: unknown, props: { basicNemesisCardId: string }) =>
  props.basicNemesisCardId

const getIsSelected = createSelector([getSelected, getId], (selectedIds, id) =>
  selectedIds.includes(id)
)

export const selectors = {
  getSelected,
  getIsSelected,
}
