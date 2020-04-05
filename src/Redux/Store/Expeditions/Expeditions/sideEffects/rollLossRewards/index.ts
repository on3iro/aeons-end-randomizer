import { selectors } from 'Redux/Store'

import * as types from 'types'

import {
  RewardType,
  BattleRewardsResult,
  ExpeditionsStateSlice,
} from '../../types'
import { handleMage } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollLossRewards/handleMage'
import { handleTreasure } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollLossRewards/handleTreasure'
import { handleSupply } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollLossRewards/handleSupply'
import { SelectedCardsLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedCards'
import {
  TreasuresStateSlice,
  TreasureIdsStateSlice,
} from 'Redux/Store/Settings/Expansions/Treasures'
import { SelectedMagesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedMages'

export const handleRewardType = ({
  rewardType,
  battle,
  seed,
  mageIds,
  gemIds,
  relicIds,
  spellIds,
  treasure1Ids,
  treasure2Ids,
  treasure3Ids,
}: {
  rewardType: RewardType
  battle: types.Battle
  seed: types.Seed
  mageIds: string[]
  gemIds: string[]
  relicIds: string[]
  spellIds: string[]
  treasure1Ids: string[]
  treasure2Ids: string[]
  treasure3Ids: string[]
}) => {
  switch (rewardType) {
    case 'mage': {
      return handleMage(battle, mageIds, seed)
    }

    case 'gem': {
      return handleSupply(battle, gemIds, seed)
    }

    case 'relic': {
      return handleSupply(battle, relicIds, seed)
    }

    case 'spell': {
      return handleSupply(battle, spellIds, seed)
    }

    case 'treasure1': {
      return handleTreasure(battle, treasure1Ids, seed)
    }

    case 'treasure2': {
      return handleTreasure(battle, treasure2Ids, seed)
    }

    case 'treasure3': {
      return handleTreasure(battle, treasure3Ids, seed)
    }

    default: {
      return { ...battle, seed }
    }
  }
}

export const rollLossRewards = (
  getState: () => ExpeditionsStateSlice &
    SelectedCardsLookupStateSlice &
    TreasuresStateSlice &
    TreasureIdsStateSlice &
    SelectedMagesLookupStateSlice,
  battle: types.Battle,
  rewardType: RewardType
): BattleRewardsResult => {
  const state = getState()

  const expeditionId = battle.expeditionId
  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId }
  )
  const seed = {
    seed: expedition.seed.seed,
    state: expedition.seed.supplyState,
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

  const treasure1Ids = selectors.getStillAvailableTreasureIdsByLevel(state, {
    treasureLevel: 1,
    expeditionId,
  })
  const treasure2Ids = selectors.getStillAvailableTreasureIdsByLevel(state, {
    treasureLevel: 2,
    expeditionId,
  })
  const treasure3Ids = selectors.getStillAvailableTreasureIdsByLevel(state, {
    treasureLevel: 3,
    expeditionId,
  })

  const mageIds = selectors.getStillAvailableMageIds(state, { expeditionId })

  return handleRewardType({
    rewardType,
    battle,
    seed,
    mageIds,
    gemIds,
    relicIds,
    spellIds,
    treasure1Ids,
    treasure2Ids,
    treasure3Ids,
  })
}
