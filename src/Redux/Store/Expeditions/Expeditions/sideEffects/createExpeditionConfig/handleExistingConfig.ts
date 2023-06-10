import { BaseConfig } from '../../types'

import * as types from 'aer-types/types'
import { RootState, selectors } from 'Redux/Store'

import { convertExpeditionFromConfig } from 'Redux/Store/Expeditions/Expeditions/helpers'
import { createSettingsSnapshot } from '../createSettingsSnapshot'

import { createSupplyIds } from './createSupplyIds'
import { createTreasureIds } from './createTreasureIds'
import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'

export const handleExistingConfig = (
  {
    name,
    bigPocketVariant,
    expeditionConfig,
    marketId,
    seedValue,
  }: BaseConfig & { expeditionConfig: types.ImportedExpeditionConfig },
  state: RootState
) => {
  /////////////////////////
  // Basic configuration //
  /////////////////////////

  const baseExpeditionFromConfig = convertExpeditionFromConfig({
    ...expeditionConfig,
    name,
    bigPocketVariantConfig: bigPocketVariant,
  })

  const seed = {
    seed: seedValue || baseExpeditionFromConfig.seed.seed,
  }

  const settingsSnapshot = createSettingsSnapshot(
    state,
    expeditionConfig,
    marketId
  )

  ///////////////////////////
  // Content randomziation //
  ///////////////////////////

  // Mages
  const amountOfAdditionalMages =
    baseExpeditionFromConfig.barracks.mageIds.length > 0
      ? 4 - baseExpeditionFromConfig.barracks.mageIds.length
      : 4

  const additionalMagesResult = createIdList(
    settingsSnapshot.availableMageIds,
    createArrayWithDefaultValues(amountOfAdditionalMages, 'EMPTY'),
    getRandomEntity,
    seed
  )

  const mageIdsResult = {
    result: [
      ...baseExpeditionFromConfig.barracks.mageIds,
      ...additionalMagesResult.result,
    ],
    seed: additionalMagesResult.seed,
  }

  const mageIds = mageIdsResult.result

  // Supply
  const supplyIdsResult = (() => {
    if (baseExpeditionFromConfig.barracks.supplyIds.length > 0) {
      return {
        result: baseExpeditionFromConfig.barracks.supplyIds,
        seed: mageIdsResult.seed,
      }
    } else {
      const availableCards = selectors.Settings.Expansions.Cards.getCardsByIdList(
        state,
        { cardIds: settingsSnapshot.availableCardIds }
      )

      return createSupplyIds(
        availableCards,
        settingsSnapshot.supplySetup,
        mageIdsResult.seed
      )
    }
  })()

  const supplyIds = supplyIdsResult.result

  // Treasures

  const availableLevel1TreasureIds = selectors.Settings.Expansions.getTreasureIdsByLevelMappedFromIds(
    state,
    {
      treasureLevel: 1,
      treasureIds: settingsSnapshot.availableTreasureIds,
    }
  )

  const treasureIdsResult = (() => {
    const { branches } = baseExpeditionFromConfig.sequence
    const firstBranch =
      branches[baseExpeditionFromConfig.sequence.firstBranchId]

    if (baseExpeditionFromConfig.barracks.treasureIds.length > 0) {
      return {
        result: baseExpeditionFromConfig.barracks.treasureIds,
        seed: supplyIdsResult.seed,
      }
    } else if (firstBranch.type === 'battle') {
      return createTreasureIds(
        firstBranch.config,
        availableLevel1TreasureIds,
        supplyIdsResult.seed
      )
    } else {
      return { result: [], seed: supplyIdsResult.seed } // should technically never happen
    }
  })()

  const treasureIds = treasureIdsResult.result

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
    ...baseExpeditionFromConfig,
    seed: newSeed,
    settingsSnapshot,
    barracks: {
      mageIds,
      supplyIds,
      treasureIds,
    },
  }
}
