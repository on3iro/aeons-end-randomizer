import { selectors } from 'Redux/Store'
import { getRandomEntity } from 'Redux/helpers'

import * as types from 'types'

import { rollTreasureIdsByLevel } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollWinRewards/rollTreasureIdsByLevel'
import { rollSupplyRewards } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollWinRewards/rollSupplyRewards'

import { ExpeditionsStateSlice } from '../../types'
import {
  TreasuresStateSlice,
  TreasureIdsStateSlice,
} from 'Redux/Store/Settings/Expansions/Treasures'
import { SelectedCardsLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedCards'

export const getTreasureAmount = (treasureLevel?: types.TreasureLevel) => {
  return treasureLevel === 2 ? 3 : 5
}
export const rollWinRewards = (
  getState: () => ExpeditionsStateSlice &
    TreasuresStateSlice &
    TreasureIdsStateSlice &
    SelectedCardsLookupStateSlice,
  battle: types.Battle
) => {
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
