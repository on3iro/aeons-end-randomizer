import { createSelector } from 'reselect'

import {
  SupplySetupsStateSlice,
  PredefinedSupplySetupsStateSlice,
  PredefinedSupplySetupIdsStateSlice,
  CustomSupplySetupsStateSlice,
  CustomSupplySetupIdsStateSlice
} from './types'
import { allSetsAreSelected } from './helpers'

const getState = (state: SupplySetupsStateSlice) => state.Settings.SupplySetups

const getPredefinedSetups = (state: PredefinedSupplySetupsStateSlice) =>
  state.Settings.SupplySetups.Predefined.setups
const getPredefinedIds = (state: PredefinedSupplySetupIdsStateSlice) =>
  state.Settings.SupplySetups.Predefined.ids

const getCustomSetups = (state: CustomSupplySetupsStateSlice) =>
  state.Settings.SupplySetups.Custom.setups
const getCustomIds = (state: CustomSupplySetupIdsStateSlice) =>
  state.Settings.SupplySetups.Custom.ids

const getPredefinedList = createSelector(
  [getPredefinedIds, getPredefinedSetups],
  (ids, setups) => ids.map(id => setups[id]).filter(setup => !setup.default)
)

const getCustomList = createSelector(
  [getCustomIds, getCustomSetups],
  (ids, setups) => ids.map(id => setups[id]).filter(setup => !setup.default)
)

const getCustomAndPredefined = createSelector(
  [getPredefinedSetups, getCustomSetups],
  (predefined, custom) => ({ ...predefined, ...custom })
)

const getAllAsArray = createSelector(
  [getCustomAndPredefined],
  customAndPredefined => Object.values(customAndPredefined)
)

const makeGetCustomAndPredefined = () => getCustomAndPredefined

const getAllExceptDefaultSets = createSelector([getAllAsArray], allSets =>
  allSets.filter(set => !set.default)
)

const getActiveSetups = createSelector([getAllAsArray], allSets =>
  allSets.filter(setup => setup.active)
)

const getAllSetsSelected = createSelector([getState], state =>
  allSetsAreSelected(state)
)

export const selectors = {
  getActiveSetups,
  getAllAsArray,
  getAllExceptDefaultSets,
  getAllSetsSelected,
  getCustomAndPredefined,
  getCustomList,
  getPredefinedList,
  makeGetCustomAndPredefined,
}
