import { SelectedBannersStateSlice } from './types'
import { createSelector } from 'reselect'

const getSelected = (state: SelectedBannersStateSlice) =>
  state.Settings.Expansions.Banners.selected

const getId = (_: unknown, props: { id: string }) =>
  props.id

const getIsSelected = createSelector([getSelected, getId], (selectedIds, id) =>
  selectedIds.includes(id)
)

export const selectors = {
  getSelected,
  getIsSelected,
}
