import { byCost } from 'helpers'

import { createSupply } from 'Redux/helpers'
import * as types from 'aer-types/types'

export const createSupplyIds = (
  availableCards: types.ICard[],
  supplySetup: types.IMarketSetup,
  seed: types.Seed
) => {
  const { gems, relics, spells, seed: resultSeed } = createSupply(
    availableCards,
    supplySetup.tiles,
    seed
  )
  const gemsByCost = gems.sort(byCost)
  const relicsByCost = relics.sort(byCost)
  const spellsByCost = spells.sort(byCost)

  return {
    result: [...gemsByCost, ...relicsByCost, ...spellsByCost].map(
      (card) => card.id
    ),
    seed: resultSeed,
  }
}
