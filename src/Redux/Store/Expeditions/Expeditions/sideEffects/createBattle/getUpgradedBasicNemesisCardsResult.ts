import * as types from 'types'

import { rollNewUpgradedNemesisCards } from './rollNewUpgradedNemesisCards'

export const getUpgradedBasicNemesisCardsResult = (
  config: types.BattleConfig,
  availableUpgradedBasicNemesisCards: types.UpgradedBasicNemesisCard[],
  previousUpgradedBasicNemesisCards: string[],
  getEntity: types.SeededEntityGetter,
  seed: types.Seed
) => {
  return config.newUBNCards.addRandom
    ? rollNewUpgradedNemesisCards(
        availableUpgradedBasicNemesisCards,
        previousUpgradedBasicNemesisCards,
        config.tier,
        getEntity,
        seed
      )
    : { result: previousUpgradedBasicNemesisCards, seed }
}
