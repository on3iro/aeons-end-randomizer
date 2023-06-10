import * as types from 'aer-types/types'

import { getUpgradedBasicNemesisIdsByBattleTier } from './getUpgradedBasicNemesisIdsByBattleTier'

export const rollNewUpgradedNemesisCards = (
  availableUpgradedBasicNemesisCards: {
    id: string
    tier: types.NemesisCardTier
  }[],
  previousUpgradedBasicNemesisCards: string[],
  nemesisTier: 1 | 2 | 3 | 4,
  getEntity: types.SeededEntityGetter,
  seed: types.Seed
) => {
  const upgradedCardsWithoutPreviousCards = availableUpgradedBasicNemesisCards.filter(
    (upgradedCard) =>
      !previousUpgradedBasicNemesisCards.includes(upgradedCard.id)
  )

  const tier1AvailableUpgradedNemesisIds = upgradedCardsWithoutPreviousCards
    .filter((card) => card.tier === 1)
    .map((card) => card.id)
  const tier2AvailableUpgradedNemesisIds = upgradedCardsWithoutPreviousCards
    .filter((card) => card.tier === 2)
    .map((card) => card.id)
  const tier3AvailableUpgradedNemesisIds = upgradedCardsWithoutPreviousCards
    .filter((card) => card.tier === 3)
    .map((card) => card.id)

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
