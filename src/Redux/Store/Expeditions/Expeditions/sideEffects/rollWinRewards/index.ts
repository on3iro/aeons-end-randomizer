import { selectors } from 'Redux/Store'
import { getRandomEntity, GetStateFn } from 'Redux/helpers'

import * as types from 'aer-types/types'

import { rollTreasureIdsByLevel } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollWinRewards/rollTreasureIdsByLevel'
import { rollSupplyRewards } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollWinRewards/rollSupplyRewards'

import { handleCustomRewards } from '../helpers'

export const getTreasureAmount = (treasureLevel?: types.TreasureLevel) => {
  return treasureLevel === 2 ? 3 : 5
}

export const rollWinRewards = (
  getState: GetStateFn,
  battle: types.Battle
): { battle: types.Battle; seed: types.Seed } => {
  const state = getState()

  const { expeditionId } = battle

  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId }
  )

  const seed = {
    seed: expedition.seed.seed,
    state: expedition.seed.supplyState,
  }

  const stillAvailableTreasureIds =
    battle.config.treasure.hasTreasure && battle.config.treasure.level
      ? selectors.getStillAvailableTreasureIdsByLevel(state, {
          treasureLevel: battle.config.treasure.level,
          expeditionId,
        })
      : []

  const treasureLevel = battle.config.treasure.level
  const amountOfTreasures = getTreasureAmount(treasureLevel)

  const newTreasuresResult = rollTreasureIdsByLevel(
    stillAvailableTreasureIds,
    amountOfTreasures,
    getRandomEntity,
    seed
  )

  const newTreasures = newTreasuresResult.result

  const gemIds = selectors.getStillAvailableGemIds(state, {
    expeditionId,
  })
  const relicIds = selectors.getStillAvailableRelicIds(state, {
    expeditionId,
  })
  const spellIds = selectors.getStillAvailableSpellIds(state, {
    expeditionId,
  })

  const supplyRewardsResult = rollSupplyRewards(
    gemIds,
    relicIds,
    spellIds,
    newTreasuresResult.seed
  )
  const supplyRewards = supplyRewardsResult.result

  const updatedBattle: types.Battle = {
    ...battle,
    rewards: {
      treasure: newTreasures,
      supplyIds: supplyRewards,
      mages: [], // we explicitely overwrite the mage reward from earlier losses
    },
  }
  return {
    battle: updatedBattle,
    seed: supplyRewardsResult.seed,
  }
}

const handleRewardsFromConfig = (
  getState: GetStateFn,
  battle: types.Battle,
  rewardsConfig: types.RewardsConfig
): { battle: types.Battle; seed: types.Seed } => {
  const state = getState()

  const expeditionId = battle.expeditionId
  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId }
  )

  if (rewardsConfig.type === 'regular') {
    return rollWinRewards(getState, battle)
  } else {
    const result = handleCustomRewards(state, rewardsConfig, expedition)

    const updatedBattle = {
      ...battle,
      ...result,
    }

    const seed = result.seed
    return {
      battle: updatedBattle,
      seed,
    }
  }
}

// TODO add tests
export const createWinRewards = (
  getState: GetStateFn,
  battle: types.Battle
): { battle: types.Battle; seed: types.Seed } => {
  const rewardsConfig = battle.config.winRewards

  if (rewardsConfig && rewardsConfig !== 'skip') {
    return handleRewardsFromConfig(getState, battle, rewardsConfig)
  } else {
    // regular case
    return rollWinRewards(getState, battle)
  }
}
