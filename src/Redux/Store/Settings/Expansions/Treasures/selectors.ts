import { createSelector } from 'reselect'

import * as types from 'aer-types'

import { TreasuresStateSlice, TreasureIdsStateSlice } from './types'

/////////
// ALL //
/////////

const getTreasures = (state: TreasuresStateSlice) =>
  state.Settings.Expansions.Treasures.treasures

const getTreasureIds = (state: TreasureIdsStateSlice) =>
  state.Settings.Expansions.Treasures.treasureIds

const getTreasureLevel = (
  _: unknown,
  props: { treasureLevel: types.TreasureLevel }
) => props.treasureLevel

const getExpansionId = (_: unknown, id: string) => id
const getIdList = (_: unknown, props: { treasureIds: string[] }) =>
  props.treasureIds

const getTreasureIdsByTreasureLevel = createSelector(
  [getTreasures, getTreasureIds, getTreasureLevel],
  (treasures, ids, level) =>
    ids
      .map(id => treasures[id])
      .filter(treasure => treasure.level === level)
      .map(treasure => treasure.id)
)

const getTreasureIdsByExpansionId = createSelector(
  [getTreasures, getTreasureIds, getExpansionId],
  (treasures, treasureIds, expansionId) =>
    treasureIds.filter(
      treasureId => treasures[treasureId].expansion === expansionId
    )
)

const getTreasuresByExpansionId = createSelector(
  [getTreasures, getTreasureIdsByExpansionId],
  (treasures, treasureIds) =>
    treasureIds.map(treasureId => treasures[treasureId])
)

const getTreasureList = createSelector(
  [getTreasures, getTreasureIds],
  (treasures, treasureIds) => treasureIds.map(id => treasures[id])
)

const getTreasureListByLevel = createSelector(
  [getTreasures, getTreasureIdsByTreasureLevel],
  (treasures, treasureIds) => treasureIds.map(id => treasures[id])
)

const getTreasureListFromIdList = createSelector(
  [getTreasures, getIdList],
  (treasures, ids) => ids.map(id => treasures[id])
)

//////////////
// SELECTED //
//////////////

const getSelectedTreasureIds = createSelector(
  [getTreasures, getTreasureIds],
  (treasures, ids) => ids.filter(id => treasures[id].selected)
)

const getSelectedTreasures = createSelector(
  [getTreasures, getSelectedTreasureIds],
  (treasures, ids) => ids.map(id => treasures[id])
)

const getSelectedTreasureIdsByTreasureLevel = createSelector(
  [getTreasures, getSelectedTreasureIds, getTreasureLevel],
  (treasures, ids, level) =>
    ids
      .map(id => treasures[id])
      .filter(treasure => treasure.level === level)
      .map(treasure => treasure.id)
)

const getSelectedTreasureListByLevel = createSelector(
  [getTreasures, getSelectedTreasureIdsByTreasureLevel],
  (treasures, treasureIds) => treasureIds.map(id => treasures[id])
)

export const selectors = {
  getTreasures,
  getTreasureIds,
  getTreasureIdsByExpansionId,
  getTreasuresByExpansionId,
  getTreasureIdsByTreasureLevel,
  getTreasureList,
  getTreasureListByLevel,
  getTreasureListFromIdList,
  getSelectedTreasures,
  getSelectedTreasureIdsByTreasureLevel,
  getSelectedTreasureListByLevel,
}
