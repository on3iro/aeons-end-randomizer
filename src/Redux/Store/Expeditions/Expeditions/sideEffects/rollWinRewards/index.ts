import { selectors } from 'Redux/Store'
import { getRandomEntity, GetStateFn } from 'Redux/helpers'

import * as types from 'aer-types/types'

import { rollTreasureIdsByLevel } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollWinRewards/rollTreasureIdsByLevel'
import { rollSupplyRewards } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollWinRewards/rollSupplyRewards'

import { handleCustomRewards, rollNewEntity } from '../helpers'

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
  const treasureLevel = battle.config.treasure.level

  const stillAvailableTreasureIds =
    battle.config.treasure.hasTreasure && treasureLevel
      ? selectors.getStillAvailableTreasureIdsByLevel(state, {
          treasureLevel,
          expeditionId,
        })
      : []

  const amountOfTreasures = getTreasureAmount(treasureLevel)

  const newTreasuresResult = rollTreasureIdsByLevel(
    stillAvailableTreasureIds,
    amountOfTreasures,
    getRandomEntity,
    seed
  )
  let nextSeed = newTreasuresResult.seed

  const newTreasures = newTreasuresResult.result
  if (treasureLevel === 4) {
    // You also get 2 level 1s, 1 level 2, and 2 level 3s.
    const level1s = rollTreasureIdsByLevel(
      selectors.getStillAvailableTreasureIdsByLevel(state, {treasureLevel: 1, expeditionId}),
      2,
      getRandomEntity,
      nextSeed
    )
    const level2s = rollTreasureIdsByLevel(
      selectors.getStillAvailableTreasureIdsByLevel(state, {treasureLevel: 2, expeditionId}),
      1,
      getRandomEntity,
      level1s.seed
    )
    const level3s = rollTreasureIdsByLevel(
      selectors.getStillAvailableTreasureIdsByLevel(state, {treasureLevel: 3, expeditionId}),
      2,
      getRandomEntity,
      level2s.seed
    )
    nextSeed = level3s.seed
    newTreasures.push(...level1s.result, ...level2s.result, ...level3s.result)
  }

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
    nextSeed
  )
  const supplyRewards = supplyRewardsResult.result
  nextSeed = supplyRewardsResult.seed
  const mages : string[] = []
  if (treasureLevel === 4) {
    // You get another gem, relic, spell, and mage with level 4 treasures.
    // Can't use getStillAvailableSpellIds again because we haven't updated the expedition state yet.
    const notJustGiven = (x: string) => !supplyRewards.includes(x)
    const moreSupplyRewards = rollSupplyRewards(
      gemIds.filter(notJustGiven),
      relicIds.filter(notJustGiven),
      spellIds.filter(notJustGiven),
      nextSeed
    )
    supplyRewards.push(...moreSupplyRewards.result)

    const mageIds = expedition.uniqueMageNames
      ? selectors.getStillAvailableMageWithUniqueNameIds(state, { expeditionId })
      : selectors.getStillAvailableMageIds(state, { expeditionId })
    const mageResult = rollNewEntity(mageIds, getRandomEntity, moreSupplyRewards.seed)
    mages.push(mageResult.result)
    nextSeed = mageResult.seed
  }

  const updatedBattle: types.Battle = {
    ...battle,
    rewards: {
      treasure: newTreasures,
      supplyIds: supplyRewards,
      mages
    },
  }
  return {
    battle: updatedBattle,
    seed: nextSeed,
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
