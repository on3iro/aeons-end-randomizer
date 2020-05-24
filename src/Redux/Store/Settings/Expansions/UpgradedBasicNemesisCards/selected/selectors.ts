import { SelectedUpgradedBasicNemesisCardsStateSlice } from './types'
import { createSelector } from 'reselect'

const getSelected = (state: SelectedUpgradedBasicNemesisCardsStateSlice) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards.selected

const getId = (_: unknown, props: { id: string }) => props.id

const getIsSelected = createSelector([getSelected, getId], (selectedIds, id) =>
  selectedIds.includes(id)
)

export const selectors = {
  getSelected,
  getIsSelected,
}
