import { BaseConfig } from '../../types'

import * as types from 'aer-types'
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
  }: BaseConfig & { expeditionConfig: types.ExpeditionConfig },
  state: RootState
) => {
  /////////////////////////
  // Basic configuration //
  /////////////////////////

  const baseExpedition = convertExpeditionFromConfig(
    {
      ...expeditionConfig,
      name,
      bigPocketVariantConfig: bigPocketVariant,
    },
    state
  )

  const seed = {
    seed: seedValue || baseExpedition.seed.seed,
  }

  // FIXME we could probably do a small optimization here,
  // because 'convertExpeditionFromConfig' already calculates the
  // 'usedExpansions' property. Technically we would only have to
  // check the market setup which was chosen
  const settingsSnapshot = {
    ...createSettingsSnapshot(
      state,
      expeditionConfig.settingsSnapshotConfig,
      marketId
    ),
    usedExpansions: baseExpedition.settingsSnapshot.usedExpansions,
  }

  ///////////////////////////
  // Content randomziation //
  ///////////////////////////

  // Mages
  const mageIdsResult =
    baseExpedition.barracks.mageIds.length > 0
      ? { result: baseExpedition.barracks.mageIds, seed: baseExpedition.seed }
      : createIdList(
          settingsSnapshot.availableMageIds,
          createArrayWithDefaultValues(4, 'EMPTY'),
          getRandomEntity,
          seed
        )

  const mageIds = mageIdsResult.result

  // Supply
  const supplyIdsResult = (() => {
    if (baseExpedition.barracks.supplyIds.length > 0) {
      return {
        result: baseExpedition.barracks.supplyIds,
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
    const { branches } = baseExpedition.sequence
    const firstBranch = branches[baseExpedition.sequence.firstBranchId]

    if (baseExpedition.barracks.treasureIds.length > 0) {
      return {
        result: baseExpedition.barracks.treasureIds,
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
    ...baseExpedition,
    seed: newSeed,
    settingsSnapshot,
    barracks: {
      mageIds,
      supplyIds,
      treasureIds,
    },
  }
}
