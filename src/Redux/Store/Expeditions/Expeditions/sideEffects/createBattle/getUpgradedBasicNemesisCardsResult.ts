import * as types from 'types'

import { rollNewUpgradedNemesisCards } from './rollNewUpgradedNemesisCards'

export const getUpgradedBasicNemesisCardsResult = (
  nemesisTier: types.NemesisTier,
  availableUpgradedBasicNemesisCards: types.UpgradedBasicNemesisCard[],
  previousUpgradedBasicNemesisCards: string[],
  getEntity: types.SeededEntityGetter,
  seed: types.Seed
) => {
  return nemesisTier.isNewTier
    ? rollNewUpgradedNemesisCards(
        availableUpgradedBasicNemesisCards,
        previousUpgradedBasicNemesisCards,
        nemesisTier.tier,
        getEntity,
        seed
      )
    : { result: previousUpgradedBasicNemesisCards, seed }
}
