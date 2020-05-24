import { SelectedExpansionsStateSlice } from './types'
import { createSelector } from 'reselect'

const getSelected = (state: SelectedExpansionsStateSlice) =>
  state.Settings.Expansions.Expansions.selected

const getId = (_: unknown, props: { expansionId: string }) => props.expansionId

const getIsSelected = createSelector([getSelected, getId], (selectedIds, id) =>
  selectedIds.includes(id)
)

export const selectors = {
  getSelected,
  getIsSelected,
}
