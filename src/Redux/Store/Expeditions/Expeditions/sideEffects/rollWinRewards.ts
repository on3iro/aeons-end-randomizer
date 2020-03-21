import { RootState, selectors } from 'Redux/Store'
import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'

import * as types from 'types'

import { rollNewEntity } from './helpers'

const rollTreasureIdsByLevel = (
  state: RootState,
  battle: types.Battle,
  getEntity: types.SeededEntityGetter = getRandomEntity,
  seed: types.Seed
) => {
  const treasureIdsByTier =
    battle.treasure.hasTreasure && battle.treasure.level
      ? selectors.getStillAvailableTreasureIdsByLevel(state, {
          treasureLevel: battle.treasure.level,
          expeditionId: battle.expeditionId,
        })
      : []

  const amountOfTreasures = battle.treasure.level === 2 ? 3 : 5

  const newTreasures =
    treasureIdsByTier.length > 0
      ? createIdList(
          treasureIdsByTier,
          createArrayWithDefaultValues(amountOfTreasures, 'EMPTY'),
          getEntity,
          seed
        )
      : { result: [], seed }

  return newTreasures
}

const rollSupplyRewards = (
  state: RootState,
  expeditionId: string,
  seed: types.Seed
) => {
  const gemIds = selectors.getStillAvailableGemIds(state, {
    expeditionId,
  })
  const relicIds = selectors.getStillAvailableRelicIds(state, {
    expeditionId,
  })
  const spellIds = selectors.getStillAvailableSpellIds(state, {
    expeditionId,
  })

  // We pack the values into arrays to make it possible to get empty values
  // which are not null below
  const newGemResult =
    gemIds.length > 0
      ? rollNewEntity(gemIds, getRandomEntity, seed)
      : { result: undefined, seed }
  const newGem = newGemResult.result ? [newGemResult.result] : []

  const newRelicResult =
    relicIds.length > 0
      ? rollNewEntity(relicIds, getRandomEntity, newGemResult.seed)
      : { result: undefined, seed: newGemResult.seed }
  const newRelic = newRelicResult.result ? [newRelicResult.result] : []

  const newSpellResult =
    spellIds.length > 0
      ? rollNewEntity(spellIds, getRandomEntity, newRelicResult.seed)
      : { result: undefined, seed: newRelicResult.seed }
  const newSpell = newSpellResult.result ? [newSpellResult.result] : []

  return {
    result: [...newGem, ...newRelic, ...newSpell],
    seed: newSpellResult.seed,
  }
}

export const rollWinRewards = (
  getState: () => RootState,
  battle: types.Battle
) => {
  const state = getState()

  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId: battle.expeditionId }
  )

  const seed = {
    seed: expedition.seed.seed,
    state: expedition.seed.supplyState,
  }

  const newTreasuresResult = rollTreasureIdsByLevel(
    state,
    battle,
    getRandomEntity,
    seed
  )

  const newTreasures = newTreasuresResult.result

  const supplyRewardsResult = rollSupplyRewards(
    state,
    battle.expeditionId,
    newTreasuresResult.seed
  )
  const supplyRewards = supplyRewardsResult.result

  const updatedBattle = {
    ...battle,
    rewards: {
      treasure: newTreasures,
      supplyIds: supplyRewards,
      mage: undefined, // we explicitely overwrite the mage reward from earlier losses
    },
  }
  return {
    battle: updatedBattle,
    seed: supplyRewardsResult.seed,
  }
}
