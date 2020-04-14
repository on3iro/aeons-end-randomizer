import { createSelector } from 'reselect'

import AERData from 'aer-data'

import { SelectedExpansionsStateSlice } from './types'
import { allExpansionsAreSelected } from './helpers'

/////////
// ALL //
/////////

const getSelectedExpansionsState = (state: SelectedExpansionsStateSlice) =>
  state.Settings.Expansions.SelectedExpansions

const getExpansionId = (_: unknown, id: string) => id

const getExpansionIds = (
  _: unknown,
  { expansionIds }: { expansionIds: string[] }
) => expansionIds

const getExpansionsByIdList = createSelector(
  [getSelectedExpansionsState, getExpansionIds],
  ({ expansions }, ids) => ids.map(id => expansions[id])
)

const getExpansionNamesByIdList = createSelector(
  [getExpansionsByIdList],
  expansions => expansions.map(e => e.name)
)

//////////////
// SELECTED //
//////////////

const getSelectedExpansionsArray = createSelector(
  [getSelectedExpansionsState],
  state => state.expansionIds.filter(id => state.expansions[id].selected)
)

const getAllExpansionsSelected = createSelector(
  [getSelectedExpansionsState],
  state => allExpansionsAreSelected(state.expansions)
)

const getExpansionById = createSelector(
  [getSelectedExpansionsState, getExpansionId],
  ({ expansions }, id) => expansions[id]
)

const getHasStandaloneExpansion = createSelector(
  [getSelectedExpansionsArray],
  selectedExpansions =>
    selectedExpansions.some(
      expansion => AERData.data[expansion].type === 'standalone'
    )
)

const getStandaloneExpansionIds = createSelector(
  [getSelectedExpansionsState],
  state =>
    state.expansionIds.filter(id => state.expansions[id].type === 'standalone')
)
const getMiniExpansionIds = createSelector(
  [getSelectedExpansionsState],
  state => state.expansionIds.filter(id => state.expansions[id].type === 'mini')
)
const getPromoIds = createSelector([getSelectedExpansionsState], state =>
  state.expansionIds
    .filter(id => state.expansions[id].type === 'promo')
    .sort((a, b) => {
      const promoA = state.expansions[a].name
      const promoB = state.expansions[b].name

      if (promoA < promoB) {
        return -1
      }

      if (promoA > promoB) {
        return 1
      }

      return 0
    })
)

const getStandaloneExpansions = createSelector(
  [getSelectedExpansionsState, getStandaloneExpansionIds],
  (state, ids) => ids.map(id => state.expansions[id])
)
const getMiniExpansions = createSelector(
  [getSelectedExpansionsState, getMiniExpansionIds],
  (state, ids) => ids.map(id => state.expansions[id])
)
const getPromos = createSelector(
  [getSelectedExpansionsState, getPromoIds],
  (state, ids) => ids.map(id => state.expansions[id])
)

export const selectors = {
  getSelectedExpansionsState,
  getSelectedExpansionsArray,
  getAllExpansionsSelected,
  getHasStandaloneExpansion,
  getStandaloneExpansionIds,
  getMiniExpansionIds,
  getPromoIds,
  getStandaloneExpansions,
  getMiniExpansions,
  getPromos,
  getExpansionById,
  getExpansionsByIdList,
  getExpansionNamesByIdList,
}
