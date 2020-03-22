import { createSelector } from 'reselect'

import { ExpeditionsStateSlice, ExpeditionIdsStateSlice } from './types'

const getExpeditions = (state: ExpeditionsStateSlice) =>
  state.Expeditions.Expeditions.expeditions

const getExpeditionIds = (state: ExpeditionIdsStateSlice) =>
  state.Expeditions.Expeditions.expeditionIds

const getExpeditionId = (_: any, props: { expeditionId: string }) =>
  props.expeditionId

const getBattleId = (_: any, props: { battleId: string }) => props.battleId

const getExpeditionList = createSelector(
  [getExpeditionIds, getExpeditions],
  (ids, expeditions) => ids.map(id => expeditions[id])
)

const getExpeditionById = createSelector(
  [getExpeditions, getExpeditionId],
  (expeditions, id) => expeditions[id]
)

const getExpeditionIsFinished = createSelector(
  [getExpeditionById],
  expedition => expedition.finished
)

const getSettingsSnapshotByExpeditionId = createSelector(
  [getExpeditionById],
  expedition => expedition.settingsSnapshot
)

const getHasNextBattle = createSelector(
  [getExpeditionById, getBattleId],
  (expedition, battleId) => {
    const currentBattleIndex = expedition.battles.findIndex(
      battle => battle.id === battleId
    )

    return currentBattleIndex + 1 < expedition.battles.length
  }
)

const getNextBattle = createSelector(
  [getExpeditionById, getBattleId],
  (expedition, battleId) => {
    const currentBattleIndex = expedition.battles.findIndex(
      battle => battle.id === battleId
    )
    const hasNext = currentBattleIndex < expedition.battles.length

    if (hasNext) {
      return expedition.battles[currentBattleIndex + 1]
    }

    return null
  }
)

const getSupplyByExpeditionId = createSelector(
  [getExpeditionById],
  expedition => expedition.barracks.supplyIds
)

const getBanishedByExpeditionId = createSelector(
  [getExpeditionById],
  expedition => expedition.banished
)

const getMagesByExpeditionId = createSelector(
  [getExpeditionById],
  expedition => expedition.barracks.mageIds
)

const getPreviousNemesesByExpeditiionId = createSelector(
  [getExpeditionById],
  expedition =>
    expedition.battles.reduce((acc: string[], battle) => {
      if (battle.nemesisId) {
        return [...acc, battle.nemesisId]
      }

      return acc
    }, [])
)

const getBarracksTreasureIdsByExpeditionId = createSelector(
  [getExpeditionById],
  expedition => expedition.barracks.treasureIds
)

export const selectors = {
  getExpeditions,
  getExpeditionIds,
  getExpeditionList,
  getExpeditionById,
  getNextBattle,
  getSupplyByExpeditionId,
  getBanishedByExpeditionId,
  getMagesByExpeditionId,
  getExpeditionIsFinished,
  getHasNextBattle,
  getSettingsSnapshotByExpeditionId,
  getPreviousNemesesByExpeditiionId,
  getBarracksTreasureIdsByExpeditionId,
}
