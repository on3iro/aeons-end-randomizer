import { generate } from 'shortid'

import { selectors, RootState } from 'Redux/Store'

import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'
import * as types from 'types'

import { BaseConfig } from '../../types'
import { createSettingsSnapshot } from '../createSettingsSnapshot'

import { createSupplyIds } from './createSupplyIds'
import { createTreasureIds } from './createTreasureIds'
import { generateBattles } from './generateBattles'

export const createExpeditionConfig = (
  getState: () => RootState,
  {
    variantId,
    name,
    bigPocketVariant,
    marketId,
    existingSettingsSnapshot,
    seedValue,
  }: BaseConfig
): types.Expedition => {
  const state = getState()

  /////////////////////////
  // Basic configuration //
  /////////////////////////

  const expeditionId = generate()
  const seed = {
    seed: seedValue || expeditionId,
  }
  const settingsSnapshot = createSettingsSnapshot(
    state,
    existingSettingsSnapshot,
    marketId
  )

  ///////////////////////////
  // Content randomziation //
  ///////////////////////////

  // Mages

  const mageIdsResult = createIdList(
    settingsSnapshot.availableMageIds,
    createArrayWithDefaultValues(4, 'EMPTY'),
    getRandomEntity,
    seed
  )

  const mageIds = mageIdsResult.result

  const availableCards = selectors.Settings.Expansions.SelectedCards.getCardsByIdList(
    state,
    { cardIds: settingsSnapshot.availableCardIds }
  )

  // Supply

  const supplyIdsResult = createSupplyIds(
    availableCards,
    settingsSnapshot.supplySetup,
    mageIdsResult.seed
  )

  const supplyIds = supplyIdsResult.result

  // Treasures

  const variant = selectors.Expeditions.Variants.getVariantById(state, {
    variantId,
  })

  const availableLevel1TreasureIds = selectors.Settings.Expansions.getTreasureIdsByLevelMappedFromIds(
    state,
    {
      treasureLevel: 1,
      treasureIds: settingsSnapshot.availableTreasureIds,
    }
  )

  const treasureIdsResult = createTreasureIds(
    variant.configList[0],
    availableLevel1TreasureIds,
    supplyIdsResult.seed
  )

  const treasureIds = treasureIdsResult.result

  // Battles

  const battles = generateBattles(variant, expeditionId)

  ////////////////
  // Expedition //
  ////////////////

  const newSeed = {
    seed: treasureIdsResult.seed.seed,
    supplyState: treasureIdsResult.seed.state || true,
    // this means that as soon as nemesis and nemesis cards are getting rolled
    // state will be used
    nemesisState: true,
  }

  return {
    id: expeditionId,
    name: name,
    score: 0,
    seed: newSeed,
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
