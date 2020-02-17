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
  getEntity: <E>(list: Array<E>) => E
) => {
  const treasureIdsByTier =
    battle.treasure.hasTreasure && battle.treasure.level
      ? selectors.getStillAvailableTreasureIdsByLevel(state, {
          treasureLevel: battle.treasure.level,
          expeditionId: battle.expeditionId,
        })
      : []

  const newTreasures =
    treasureIdsByTier.length > 0
      ? createIdList(
          treasureIdsByTier,
          createArrayWithDefaultValues(5, 'EMPTY'),
          getEntity
        ).result
      : []

  return newTreasures
}

const rollSupplyRewards = (state: RootState, expeditionId: string) => {
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
  const newGem = gemIds.length > 0 ? [rollNewEntity(gemIds)] : []
  const newRelic = relicIds.length > 0 ? [rollNewEntity(relicIds)] : []
  const newSpell = spellIds.length > 0 ? [rollNewEntity(spellIds)] : []

  return [...newGem, ...newRelic, ...newSpell]
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

  const newTreasures = rollTreasureIdsByLevel(
    state,
    battle,
    availableEntities => getRandomEntity(availableEntities, expedition.seed)
  )

  const supplyRewards = rollSupplyRewards(state, battle.expeditionId)

  const updatedBattle = {
    ...battle,
    rewards: {
      treasure: newTreasures,
      supplyIds: supplyRewards,
      mage: undefined, // we explicitely overwrite the mage reward from earlier losses
    },
  }
  return { battle: updatedBattle }
}
