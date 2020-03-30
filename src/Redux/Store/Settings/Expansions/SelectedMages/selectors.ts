import { createSelector } from 'reselect'

import { SelectedMagesStateSlice, SelectedMagesLookupStateSlice } from './types'

/////////
// ALL //
/////////

const getSelectedMagesState = (state: SelectedMagesStateSlice) =>
  state.Settings.Expansions.SelectedMages

const getExpansionId = (_: unknown, id: string) => id

const getSelectedMagesLookupObject = (state: SelectedMagesLookupStateSlice) =>
  state.Settings.Expansions.SelectedMages.mages

const getMageId = (_: unknown, { id }: { id: string }) => id

const getMageById = createSelector(
  [getSelectedMagesLookupObject, getMageId],
  (mageLookup, id) => mageLookup[id]
)

const getMageIdsArray = createSelector(
  [getSelectedMagesState],
  state => state.mageIds
)

const getMageIdsByExpansionId = createSelector(
  [getSelectedMagesState, getMageIdsArray, getExpansionId],
  (state, mageIds, expansionId) =>
    mageIds.filter(mageId => state.mages[mageId].expansion === expansionId)
)

const getMagesByExpansionId = createSelector(
  [getSelectedMagesState, getMageIdsByExpansionId],
  (state, mageIds) => mageIds.map(mageId => state.mages[mageId])
)

//////////////
// SELECTED //
//////////////

const getSelectedMagesIds = createSelector([getSelectedMagesState], state =>
  state.mageIds.filter(id => state.mages[id].selected)
)

const getSelectedMages = createSelector(
  [getSelectedMagesState, getSelectedMagesIds],
  (state, mageIds) => mageIds.map(mageId => state.mages[mageId])
)

export const selectors = {
  getSelectedMages,
  getSelectedMagesLookupObject,
  getSelectedMagesIds,
  getMagesByExpansionId,
  getMageById,
}
