import { createSelector } from 'reselect'

import {
  SelectedNemesesStateSlice,
  SelectedNemesesLookupStateSlice,
} from './types'

/////////
// ALL //
/////////

const getSelectedNemesesState = (state: SelectedNemesesStateSlice) =>
  state.Settings.Expansions.SelectedNemeses

const getSelectedNemesesLookupObject = (
  state: SelectedNemesesLookupStateSlice
) => state.Settings.Expansions.SelectedNemeses.nemeses

const getExpansionId = (_: unknown, id: string) => id

const getNemesisId = (_: unknown, { id }: { id: string }) => id

const getNemesisById = createSelector(
  [getSelectedNemesesLookupObject, getNemesisId],
  (nemesesLookup, id) => nemesesLookup[id]
)

const getNemesisIdsArray = createSelector(
  [getSelectedNemesesState],
  state => state.nemesisIds
)

const getNemesisIdsByExpansionId = createSelector(
  [getSelectedNemesesState, getNemesisIdsArray, getExpansionId],
  (state, nemesisIds, expansionId) =>
    nemesisIds.filter(
      nemesisId => state.nemeses[nemesisId].expansion === expansionId
    )
)

const getNemesesByExpansionId = createSelector(
  [getSelectedNemesesState, getNemesisIdsByExpansionId],
  (state, nemesisIds) => nemesisIds.map(nemesisId => state.nemeses[nemesisId])
)

//////////////
// SELECTED //
//////////////

const getSelectedNemesesIds = createSelector([getSelectedNemesesState], state =>
  state.nemesisIds.filter(id => state.nemeses[id].selected)
)

const getSelectedNemeses = createSelector(
  [getSelectedNemesesState, getSelectedNemesesIds],
  (state, nemesisIds) => nemesisIds.map(nemesisId => state.nemeses[nemesisId])
)

export const selectors = {
  getSelectedNemesesState,
  getSelectedNemesesLookupObject,
  getSelectedNemeses,
  getNemesesByExpansionId,
  getNemesisById,
}
