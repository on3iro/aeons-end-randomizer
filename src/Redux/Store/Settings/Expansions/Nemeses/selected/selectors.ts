import { SelectedNemesesStateSlice } from './types'
import { createSelector } from 'reselect'

const getSelected = (state: SelectedNemesesStateSlice) =>
  state.Settings.Expansions.Nemeses.selected

const getId = (_: unknown, props: { id: string }) => props.id

const getIsSelected = createSelector([getSelected, getId], (selectedIds, id) =>
  selectedIds.includes(id)
)

export const selectors = {
  getSelected,
  getIsSelected,
}
