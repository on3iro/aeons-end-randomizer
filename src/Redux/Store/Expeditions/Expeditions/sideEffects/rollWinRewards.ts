import { RootState, selectors } from 'Redux/Store'
import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'

import * as types from 'types'

import { rollNewEntity } from './helpers'

const getTreasureIdsByLevel = (
  state: RootState,
  battle: types.Battle,
  getEntity: <E>(list: Array<E>) => E
) => {
  const treasureIdsByTier =
    battle.treasure.hasTreasure && battle.treasure.level
      ? selectors.getNewTreasureIdsByLevel(state, {
          treasureLevel: battle.treasure.level,
          expeditionId: battle.expeditionId,
        })
      : []

  const newTreasures = createIdList(
    treasureIdsByTier,
    createArrayWithDefaultValues(5, 'EMPTY'),
    getEntity
  ).result

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
  const newGem = rollNewEntity(gemIds)
  const newRelic = rollNewEntity(relicIds)
  const newSpell = rollNewEntity(spellIds)

  return [newGem, newRelic, newSpell]
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

  const newTreasures = getTreasureIdsByLevel(state, battle, availableEntities =>
    getRandomEntity(availableEntities, expedition.seed)
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
