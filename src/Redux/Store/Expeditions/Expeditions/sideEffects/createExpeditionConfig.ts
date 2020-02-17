import shortid from 'shortid'

import { byCost } from 'helpers'
import { RootState, selectors } from 'Redux/Store'

import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
  createSupply,
} from 'Redux/helpers'
import * as types from 'types'

import { BaseConfig } from '../types'
import { createSettingsSnapshot } from './createSettingsSnapshot'

const createSupplyIds = (
  state: RootState,
  cardIds: string[],
  supplySetup: types.IMarketSetup,
  seed: string
) => {
  const availableCards = selectors.Settings.Expansions.SelectedCards.getCardsByIdList(
    state,
    { cardIds }
  )

  const { gems, relics, spells } = createSupply(
    availableCards,
    supplySetup.tiles,
    seed
  )
  const gemsByCost = gems.result.sort(byCost)
  const relicsByCost = relics.result.sort(byCost)
  const spellsByCost = spells.result.sort(byCost)

  return [...gemsByCost, ...relicsByCost, ...spellsByCost].map(card => card.id)
}

const createTreasureIds = (
  state: RootState,
  treasureIds: string[],
  variantId: string,
  seed: string
) => {
  const variant = selectors.Expeditions.Variants.getVariantById(state, {
    variantId,
  })

  // TODO someday we probably should extend the type so that we have a treasreBeforeFight and treasureAfterFight property
  const firstBattleConfig = variant.configList[0]
  const startsWithTreasure =
    firstBattleConfig.tier.tier > 1 && firstBattleConfig.treasure.hasTreasure

  const availableLevel1TreasureIds = selectors.Settings.Expansions.getTreasureIdsByLevelMappedFromIds(
    state,
    { treasureLevel: 1, treasureIds }
  )

  return startsWithTreasure
    ? createIdList(
        availableLevel1TreasureIds,
        createArrayWithDefaultValues(5, 'EMPTY'),
        availableEntities => getRandomEntity(availableEntities, seed)
      ).result
    : []
}

export const generateBattles = (
  state: RootState,
  variantId: string,
  expeditionId: string
) => {
  const variant = selectors.Expeditions.Variants.getVariantById(state, {
    variantId,
  })

  const battles = variant.configList.map(
    (config, index): types.Battle => {
      const isFirst = index === 0

      return {
        id: shortid.generate(),
        nemesisTier: config.tier,
        treasure: config.treasure,
        expeditionId,
        status: isFirst ? 'unlocked' : 'locked',
        tries: 0,
      }
    }
  )

  return battles
}

export const createExpeditionConfig = (
  getState: () => RootState,
  { variantId, name, bigPocketVariant, marketId }: BaseConfig
): types.Expedition => {
  const state = getState()

  /////////////////////////
  // Basic configuration //
  /////////////////////////

  const expeditionId = shortid.generate()
  const seed = expeditionId
  const settingsSnapshot = createSettingsSnapshot(state, marketId)

  ///////////////////////////
  // Content randomziation //
  ///////////////////////////

  // Mages
  const mageIds = createIdList(
    settingsSnapshot.availableMageIds,
    createArrayWithDefaultValues(4, 'EMPTY'),
    availableEntities => getRandomEntity(availableEntities, seed)
  ).result

  // Supply
  const supplyIds = createSupplyIds(
    state,
    settingsSnapshot.availableCardIds,
    settingsSnapshot.supplySetup,
    seed
  )

  // Treasures
  const treasureIds = createTreasureIds(
    state,
    settingsSnapshot.availableTreasureIds,
    variantId,
    seed
  )

  // Battles
  const battles = generateBattles(state, variantId, expeditionId)

  ////////////////
  // Expedition //
  ////////////////

  return {
    id: expeditionId,
    name: name,
    score: 0,
    seed,
    settingsSnapshot,
    barracks: {
      mageIds,
      supplyIds,
      treasureIds,
    },
    upgradedBasicNemesisCards: [],
    banished: [],
    variantId,
    bigPocketVariant: bigPocketVariant,
    battles,
    finished: false,
  }
}
