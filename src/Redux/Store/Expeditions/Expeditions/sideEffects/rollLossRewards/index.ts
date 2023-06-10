import { selectors } from 'Redux/Store'

import * as types from 'aer-types/types'

import {
  RewardType,
  BattleRewardsResult,
  ExpeditionsStateSlice,
} from '../../types'
import { handleMage } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollLossRewards/handleMage'
import { handleTreasure } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollLossRewards/handleTreasure'
import { handleSupply } from 'Redux/Store/Expeditions/Expeditions/sideEffects/rollLossRewards/handleSupply'
import { TreasureIdsStateSlice } from 'Redux/Store/Settings/Expansions/Treasures/ids'
import { TreasureContentStateSlice } from 'Redux/Store/Settings/Expansions/Treasures/content'
import { MagesContentStateSlice } from 'Redux/Store/Settings/Expansions/Mages/content'
import { handleCustomRewards } from '../helpers'
import { CardsContentStateSlice } from 'Redux/Store/Settings/Expansions/Cards/content'
import { SelectedLanguagesStateSlice } from 'Redux/Store/Settings/Expansions/Languages'
import { GetStateFn } from 'Redux/helpers'

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

const rollLossRewards = (
  getState: () => ExpeditionsStateSlice &
    CardsContentStateSlice &
    TreasureContentStateSlice &
    TreasureIdsStateSlice &
    MagesContentStateSlice &
    SelectedLanguagesStateSlice,
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

  const mageIds = expedition.uniqueMageNames
    ? selectors.getStillAvailableMageWithUniqueNameIds(state, { expeditionId })
    : selectors.getStillAvailableMageIds(state, { expeditionId })

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

// TODO add tests
const handleRewardsFromConfig = (
  getState: () => ExpeditionsStateSlice &
    CardsContentStateSlice &
    TreasureContentStateSlice &
    TreasureIdsStateSlice &
    MagesContentStateSlice &
    SelectedLanguagesStateSlice,
  battle: types.Battle,
  rewardsConfig?: types.RewardsConfig,
  rewardType?: RewardType
) => {
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

  const rewardTypeMissing = rewardsConfig?.type === 'regular' && !rewardType

  if (!rewardsConfig || rewardTypeMissing) {
    // If no config is left we simply return empty rewards

    return {
      ...battle,
      rewards: {
        treasure: [],
        mages: [],
        supplyIds: [],
      },
      seed,
    }
  }

  if (rewardsConfig.type === 'regular' && rewardType) {
    return rollLossRewards(getState, battle, rewardType)
  } else if (rewardsConfig.type === 'custom') {
    return {
      ...battle,
      ...handleCustomRewards(state, rewardsConfig, expedition),
    }
  }

  // default (should never happen)
  return {
    ...battle,
    rewards: {
      treasure: [],
      mages: [],
      supplyIds: [],
    },
    seed,
  }
}

export const createLossRewards = (
  getState: GetStateFn,
  battle: types.Battle,
  rewardType: RewardType
): BattleRewardsResult => {
  // RewardsConfig is used
  const tryIndex = battle.tries - 1
  const rewardsConfig =
    battle.config.lossRewards && battle.config.lossRewards !== 'skip'
      ? battle.config.lossRewards[tryIndex]
      : undefined

  if (rewardsConfig) {
    return handleRewardsFromConfig(getState, battle, rewardsConfig, rewardType)
  } else {
    // regular case
    return rollLossRewards(getState, battle, rewardType)
  }
}
