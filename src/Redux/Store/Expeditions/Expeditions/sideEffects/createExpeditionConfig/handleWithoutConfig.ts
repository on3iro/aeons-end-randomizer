import { generate } from 'shortid'

import { selectors, RootState } from 'Redux/Store'
import { BaseConfig } from '../../types'

import { createSettingsSnapshot } from '../createSettingsSnapshot'

import { createSupplyIds } from './createSupplyIds'
import { createTreasureIds } from './createTreasureIds'
import { generateBattles } from './generateBattles'
import { getLatestMigrationVersion } from 'Redux/Store/Expeditions/Expeditions/migrations'

import {
  createArrayWithDefaultValues,
  createIdList,
  createUniqueNameMageList,
  getRandomEntity,
} from 'Redux/helpers'

export const handleWithoutConfig = (
  { variantId, name, bigPocketVariant, uniqueMageNames, marketId, seedValue }: BaseConfig,
  state: RootState
) => {
  /////////////////////////
  // Basic configuration //
  /////////////////////////

  const expeditionId = generate()

  const seed = {
    seed: seedValue || expeditionId,
  }

  const settingsSnapshot = createSettingsSnapshot(state, undefined, marketId)

  ///////////////////////////
  // Content randomziation //
  ///////////////////////////

  // Mages
  let mageIdsResult, mageIds
  if (uniqueMageNames) {
    const magesResult = createUniqueNameMageList(
      selectors.Settings.Expansions.getSelectedMagesForSelectedExpansions(state),
      createArrayWithDefaultValues(4, 'EMPTY'),
      getRandomEntity,
      seed
    )
    mageIds = magesResult.result.map((mage) => mage.id)
    mageIdsResult = {result: mageIds, seed: magesResult.seed}
  } else {
    mageIdsResult = createIdList(
      settingsSnapshot.availableMageIds,
      createArrayWithDefaultValues(4, 'EMPTY'),
      getRandomEntity,
      seed
    )
    mageIds = mageIdsResult.result
  }

  // Supply
  const availableCards = selectors.Settings.Expansions.Cards.getCardsByIdList(
    state,
    { cardIds: settingsSnapshot.availableCardIds }
  )

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

  const treasureIdsResult = variant
    ? createTreasureIds(
        variant.configList[0],
        availableLevel1TreasureIds,
        supplyIdsResult.seed
      )
    : { result: [], seed: supplyIdsResult.seed } // should technically never happen

  const treasureIds = treasureIdsResult.result

  /////////////
  // Battles //
  /////////////

  const battles = variant ? generateBattles(variant, expeditionId) : []

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
    bigPocketVariant: bigPocketVariant,
    uniqueMageNames: uniqueMageNames || false,
    sequence: {
      firstBranchId: battles[0].id,
      branches: battles.reduce((acc, battle) => {
        return {
          ...acc,
          [battle.id]: battle,
        }
      }, {}),
    },
    migrationVersion: getLatestMigrationVersion(),
    finished: false,
  }
}
