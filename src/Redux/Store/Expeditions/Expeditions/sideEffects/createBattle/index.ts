import { selectors } from 'Redux/Store'
import * as types from 'aer-types/types'

import { getRandomEntity, GetStateFn } from 'Redux/helpers'

import { rollNemesisId } from './rollNemesisId'
import { getStillAvailableNemesisIds } from './getStillAvailableNemesisIds'
import { getUpgradedBasicNemesisCardsResult } from './getUpgradedBasicNemesisCardsResult'

export const generateResult = (
  battle: types.Battle,
  nemesisId: string | undefined,
  upgradedBasicNemesisCardIds: string[],
  nemesisSeedState?: Object
): {
  battle: types.Battle
  upgradedBasicNemesisCardIds: string[]
  nemesisSeedState: types.ExpeditionSeedState
} => {
  return {
    battle: {
      ...battle,
      nemesisId,
      status: 'before_battle',
    },
    upgradedBasicNemesisCardIds,
    // If no seed state is provided, we set it to 'true', so that
    // the seed generator creates a seed the next time it runs and so that we
    // do not get any errors further down the line
    nemesisSeedState: nemesisSeedState || true,
  }
}

export const createBattle = (
  getState: GetStateFn,
  battle: types.Battle,
  getEntity: types.SeededEntityGetter = getRandomEntity
): {
  battle: types.Battle
  upgradedBasicNemesisCardIds: string[]
  nemesisSeedState: types.ExpeditionSeedState
} => {
  const state = getState()

  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId: battle.expeditionId }
  )

  const availableNemeses = selectors.getAvailableNemesisForExpeditionId(state, {
    expeditionId: expedition.id,
  })
  const previousNemesisIds = selectors.Expeditions.Expeditions.getPreviousNemesesByExpeditiionId(
    state,
    { expeditionId: expedition.id }
  )

  const stillAvailableNemesisIds = getStillAvailableNemesisIds(
    availableNemeses,
    previousNemesisIds,
    battle.config.tier
  )

  const nemesisIdResult = battle.config.nemesisId
    ? {
        result: battle.config.nemesisId,
        seed: {
          seed: expedition.seed.seed,
          state: expedition.seed.nemesisState,
        },
      }
    : rollNemesisId(stillAvailableNemesisIds, (availableEntities) =>
        getEntity(availableEntities, {
          seed: expedition.seed.seed,
          state: expedition.seed.nemesisState,
        })
      )

  // FIXME Should probably be composed into another "getStillAvailable" selector
  const previousUpgradedBasicNemesisCards = expedition.upgradedBasicNemesisCards
  const availableUpgradedBasicNemesisCards = selectors.getAvailableUpgradedBasicNemesisCardsForExpeditionId(
    state,
    {
      expeditionId: battle.expeditionId,
    }
  )

  const upgradedBasicNemesisCardIdsResult = getUpgradedBasicNemesisCardsResult(
    battle.config,
    availableUpgradedBasicNemesisCards,
    previousUpgradedBasicNemesisCards,
    getEntity,
    nemesisIdResult.seed
  )

  return generateResult(
    battle,
    nemesisIdResult.result,
    upgradedBasicNemesisCardIdsResult.result,
    upgradedBasicNemesisCardIdsResult.seed.state
  )
}
