import * as types from 'aer-types/types'

import { rollNewUpgradedNemesisCards } from './rollNewUpgradedNemesisCards'

export const getUpgradedBasicNemesisCardsResult = (
  config: types.BattleConfig,
  availableUpgradedBasicNemesisCards: types.UpgradedBasicNemesisCard[],
  previousUpgradedBasicNemesisCards: string[],
  getEntity: types.SeededEntityGetter,
  seed: types.Seed
) => {
  if (config.newUBNCards.type === 'regular') {
    return config.newUBNCards.addRandom
      ? rollNewUpgradedNemesisCards(
          availableUpgradedBasicNemesisCards,
          previousUpgradedBasicNemesisCards,
          config.tier,
          getEntity,
          seed
        )
      : { result: previousUpgradedBasicNemesisCards, seed }
  } else if (config.newUBNCards.type === 'custom') {
    return {
      result: [...previousUpgradedBasicNemesisCards, ...config.newUBNCards.ids],
      seed,
    }
  }

  return { result: previousUpgradedBasicNemesisCards, seed }
}
