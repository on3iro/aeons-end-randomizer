import { RootState, selectors } from 'Redux/Store'
import { getRandomEntity } from 'Redux/helpers'

import * as types from 'types'

import { RewardType, BattleRewardsResult } from '../types'
import { rollNewEntity } from './helpers'

export const rollLossRewards = (
  getState: () => RootState,
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

  switch (rewardType) {
    case 'mage': {
      const newMageResult = rollNewEntity(mageIds, getRandomEntity, seed)
      const newMage = newMageResult.result

      return {
        ...battle,
        rewards: {
          treasure: [],
          mage: newMage ?? undefined,
          supplyIds: [],
        },
        seed: newMageResult.seed,
      }
    }

    case 'gem': {
      const newGemResult = rollNewEntity(gemIds, getRandomEntity, seed)
      const newGem = newGemResult.result

      return {
        ...battle,
        rewards: {
          treasure: [],
          mage: undefined,
          supplyIds: newGem ? [newGem] : [],
        },
        seed: newGemResult.seed,
      }
    }

    case 'relic': {
      const newRelicResult = rollNewEntity(relicIds, getRandomEntity, seed)
      const newRelic = newRelicResult.result

      return {
        ...battle,
        rewards: {
          treasure: [],
          mage: undefined,
          supplyIds: newRelic ? [newRelic] : [],
        },
        seed: newRelicResult.seed,
      }
    }

    case 'spell': {
      const newSpellResult = rollNewEntity(spellIds, getRandomEntity, seed)
      const newSpell = newSpellResult.result

      return {
        ...battle,
        rewards: {
          treasure: [],
          mage: undefined,
          supplyIds: newSpell ? [newSpell] : [],
        },
        seed: newSpellResult.seed,
      }
    }

    case 'treasure1': {
      const newTreasureResult = rollNewEntity(
        treasure1Ids,
        getRandomEntity,
        seed
      )
      const newTreasure = newTreasureResult.result

      return {
        ...battle,
        rewards: {
          treasure: newTreasure ? [newTreasure] : [],
          mage: undefined,
          supplyIds: [],
        },
        seed: newTreasureResult.seed,
      }
    }

    case 'treasure2': {
      const newTreasureResult = rollNewEntity(
        treasure2Ids,
        getRandomEntity,
        seed
      )
      const newTreasure = newTreasureResult.result

      return {
        ...battle,
        rewards: {
          treasure: newTreasure ? [newTreasure] : [],
          mage: undefined,
          supplyIds: [],
        },
        seed: newTreasureResult.seed,
      }
    }

    case 'treasure3': {
      const newTreasureResult = rollNewEntity(
        treasure3Ids,
        getRandomEntity,
        seed
      )
      const newTreasure = newTreasureResult.result

      return {
        ...battle,
        rewards: {
          treasure: newTreasure ? [newTreasure] : [],
          mage: undefined,
          supplyIds: [],
        },
        seed: newTreasureResult.seed,
      }
    }

    default: {
      return { ...battle, seed }
    }
  }
}
