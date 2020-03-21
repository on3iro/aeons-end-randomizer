import { RootState, selectors } from 'Redux/Store'
import * as types from 'types'
import {
  getRandomEntity,
  createIdList,
  createArrayWithDefaultValues,
} from 'Redux/helpers'

// Because we always add these cards to an existing array inside our expedition in our store,
// the count of newly added cards decreases by tier.
// If we ever have a variant, that starts higher than tier 2 we have to
// incorporate changes to roll the whole amount of cards per tier!
export const getUpgradedBasicNemesisIdsByBattleTier = ({
  availableTier1Ids,
  availableTier2Ids,
  availableTier3Ids,
  battleTier,
  getEntity = getRandomEntity,
  seed,
}: {
  availableTier1Ids: string[]
  availableTier2Ids: string[]
  availableTier3Ids: string[]
  battleTier: 1 | 2 | 3 | 4
  getEntity: types.SeededEntityGetter
  seed: types.Seed
}): { result: string[]; seed: types.Seed } => {
  switch (battleTier) {
    case 1: {
      return { result: [], seed } // No upgraded cards are added on tier 1
    }

    case 2: {
      const tier1IdsResult = createIdList(
        availableTier1Ids,
        createArrayWithDefaultValues(1, 'EMPTY'),
        availableIds => getEntity(availableIds, seed)
      )

      const tier2IdsResult = createIdList(
        availableTier2Ids,
        createArrayWithDefaultValues(3, 'EMPTY'),
        availableIds => getEntity(availableIds, tier1IdsResult.seed)
      )

      const tier3IdsResult = createIdList(
        availableTier3Ids,
        createArrayWithDefaultValues(3, 'EMPTY'),
        availableIds => getEntity(availableIds, tier2IdsResult.seed)
      )

      return {
        result: [
          ...tier1IdsResult.result,
          ...tier2IdsResult.result,
          ...tier3IdsResult.result,
        ],
        seed: tier3IdsResult.seed,
      }
    }

    case 3:
    case 4: {
      const tier1IdsResult = createIdList(
        availableTier1Ids,
        createArrayWithDefaultValues(1, 'EMPTY'),
        availableIds => getEntity(availableIds, seed)
      )

      const tier2IdsResult = createIdList(
        availableTier2Ids,
        createArrayWithDefaultValues(1, 'EMPTY'),
        availableIds => getEntity(availableIds, tier1IdsResult.seed)
      )

      const tier3IdsResult = createIdList(
        availableTier3Ids,
        createArrayWithDefaultValues(2, 'EMPTY'),
        availableIds => getEntity(availableIds, tier2IdsResult.seed)
      )

      return {
        result: [
          ...tier1IdsResult.result,
          ...tier2IdsResult.result,
          ...tier3IdsResult.result,
        ],
        seed: tier3IdsResult.seed,
      }
    }

    default: {
      return { result: [], seed } // Should never occur!
    }
  }
}

export const rollNewUpgradedNemesisCards = (
  availableUpgradedBasicNemesisCards: types.UpgradedBasicNemesisCard[],
  previousUpgradedBasicNemesisCards: string[],
  nemesisTier: 1 | 2 | 3 | 4,
  getEntity: types.SeededEntityGetter,
  seed: types.Seed
) => {
  const upgradedCardsWithoutPreviousCards = availableUpgradedBasicNemesisCards.filter(
    upgradedCard => !previousUpgradedBasicNemesisCards.includes(upgradedCard.id)
  )

  const tier1AvailableUpgradedNemesisIds = upgradedCardsWithoutPreviousCards
    .filter(card => card.tier === 1)
    .map(card => card.id)
  const tier2AvailableUpgradedNemesisIds = upgradedCardsWithoutPreviousCards
    .filter(card => card.tier === 2)
    .map(card => card.id)
  const tier3AvailableUpgradedNemesisIds = upgradedCardsWithoutPreviousCards
    .filter(card => card.tier === 3)
    .map(card => card.id)

  const upgradedBasicNemesisCardIdsResult = getUpgradedBasicNemesisIdsByBattleTier(
    {
      battleTier: nemesisTier,
      availableTier1Ids: tier1AvailableUpgradedNemesisIds,
      availableTier2Ids: tier2AvailableUpgradedNemesisIds,
      availableTier3Ids: tier3AvailableUpgradedNemesisIds,
      getEntity,
      seed,
    }
  )

  return {
    result: [
      ...previousUpgradedBasicNemesisCards,
      ...upgradedBasicNemesisCardIdsResult.result,
    ],
    seed: upgradedBasicNemesisCardIdsResult.seed,
  }
}

export const rollNemesisId = (
  state: RootState,
  expedition: types.Expedition,
  battle: types.Battle,
  getEntity: types.SeededEntityGetter = getRandomEntity
): { result: string; seed: types.Seed } => {
  const availableNemeses = selectors.getAvailableNemesisForExpeditionId(state, {
    expeditionId: expedition.id,
  })
  const previousNemeses = selectors.Expeditions.Expeditions.getPreviousNemesesByExpeditiionId(
    state,
    { expeditionId: expedition.id }
  )

  const nemesisIds = availableNemeses
    .filter(nemesis => nemesis.expeditionRating === battle.nemesisTier.tier)
    .map(nemesis => nemesis.id)
    .filter(nemesisId => !previousNemeses.includes(nemesisId))

  const result = createIdList(
    nemesisIds,
    createArrayWithDefaultValues(1, 'EMPTY'),
    availableEntities => getEntity(availableEntities, expedition.seed)
  )

  return { result: result.result[0], seed: result.seed }
}

export const createBattle = (
  getState: () => RootState,
  battle: types.Battle,
  getEntity: types.SeededEntityGetter = getRandomEntity
) => {
  const state = getState()

  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId: battle.expeditionId }
  )

  const nemesisIdResult = rollNemesisId(
    state,
    expedition,
    battle,
    availableEntities =>
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

  const upgradedBasicNemesisCardIdsResult = battle.nemesisTier.isNewTier
    ? rollNewUpgradedNemesisCards(
        availableUpgradedBasicNemesisCards,
        previousUpgradedBasicNemesisCards,
        battle.nemesisTier.tier,
        getEntity,
        nemesisIdResult.seed
      )
    : { result: previousUpgradedBasicNemesisCards, seed: nemesisIdResult.seed }

  return {
    battle: {
      ...battle,
      nemesisId: nemesisIdResult.result,
      status: 'before_battle',
    },
    upgradedBasicNemesisCardIds: upgradedBasicNemesisCardIdsResult.result,
    nemesisSeedState: upgradedBasicNemesisCardIdsResult.seed.state || true,
  }
}
