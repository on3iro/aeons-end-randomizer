import * as types from 'aer-types/types'
import { createSelector } from 'reselect'

import { ExpeditionsStateSlice, ExpeditionIdsStateSlice } from './types'

const getExpeditions = (state: ExpeditionsStateSlice) =>
  state.Expeditions.Expeditions.expeditions

const getExpeditionIds = (state: ExpeditionIdsStateSlice) =>
  state.Expeditions.Expeditions.expeditionIds

const getExpeditionId = (_: unknown, props: { expeditionId: string }) =>
  props.expeditionId

const getBranchId = (_: unknown, props: { branchId: string }) => props.branchId

const getChoiceIndex = (_: unknown, props: { choiceIndex: number }) =>
  props.choiceIndex

const getExpeditionList = createSelector(
  [getExpeditionIds, getExpeditions],
  (ids, expeditions) => ids.map((id) => expeditions[id])
)

const getExpeditionById = createSelector(
  [getExpeditions, getExpeditionId],
  (expeditions, id) => expeditions[id]
)

const getExpeditionIsFinished = createSelector(
  [getExpeditionById],
  (expedition) => expedition.finished
)

const getSettingsSnapshotByExpeditionId = createSelector(
  [getExpeditionById],
  (expedition) => expedition.settingsSnapshot
)

const getHasNextBranch = createSelector(
  [getExpeditionById, getBranchId],
  (expedition, branchId) => {
    return !!expedition.sequence.branches[branchId].nextBranchId
  }
)

const getNextBranch = createSelector(
  [getExpeditionById, getBranchId, getChoiceIndex],
  (expedition, branchId, choiceIndex) => {
    const nextBranchId = expedition.sequence.branches[branchId].nextBranchId

    if (typeof nextBranchId === 'string') {
      return expedition.sequence.branches[nextBranchId]
    } else if (typeof nextBranchId === 'object' && !!choiceIndex) {
      // This is the case if we have multiple descisions each leading to a
      // different branch id
      const id = nextBranchId[choiceIndex]
      return expedition.sequence.branches[id]
    }

    return null
  }
)

const getSupplyByExpeditionId = createSelector(
  [getExpeditionById],
  (expedition) => expedition.barracks.supplyIds
)

const getBanishedByExpeditionId = createSelector(
  [getExpeditionById],
  (expedition) => expedition.banished
)

const getMagesByExpeditionId = createSelector(
  [getExpeditionById],
  (expedition) => expedition.barracks.mageIds
)

const getBranchIdListByExpeditionId = createSelector(
  [getExpeditionById],
  (expedition) => Object.keys(expedition.sequence.branches)
)

const getBranchListByExpeditionId = createSelector(
  [getExpeditionById, getBranchIdListByExpeditionId],
  (expedition, branchIds) =>
    branchIds.map((id) => expedition.sequence.branches[id])
)

const getPreviousNemesesByExpeditionId = createSelector(
  [getBranchListByExpeditionId],
  (branches) =>
    branches
      .filter(
        (branch: types.Branch): branch is types.Battle =>
          branch.type === 'battle'
      )
      .reduce((acc: string[], battle: types.Battle) => {
        if (battle.nemesisId) {
          return [...acc, battle.nemesisId]
        }

        return acc
      }, [])
)

const getBarracksTreasureIdsByExpeditionId = createSelector(
  [getExpeditionById],
  (expedition) => expedition.barracks.treasureIds
)

export const selectors = {
  getExpeditions,
  getExpeditionIds,
  getExpeditionList,
  getExpeditionById,
  getNextBattle: getNextBranch,
  getSupplyByExpeditionId,
  getBanishedByExpeditionId,
  getMagesByExpeditionId,
  getExpeditionIsFinished,
  getHasNextBranch,
  getSettingsSnapshotByExpeditionId,
  getPreviousNemesesByExpeditiionId: getPreviousNemesesByExpeditionId,
  getBarracksTreasureIdsByExpeditionId,
}
