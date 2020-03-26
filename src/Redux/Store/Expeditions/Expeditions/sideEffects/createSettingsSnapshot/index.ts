import { RootState, selectors } from 'Redux/Store'
import * as types from 'types'

import { determineUsedExpansions } from './determineUsedExpansions'

export const createSettingsSnapshot = (
  state: RootState,
  existingSettingsSnapshot?: types.SettingsSnapshot,
  marketId: string = 'DEFAULT'
): types.SettingsSnapshot => {
  const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()

  const existingSupply: {
    [id: string]: types.IMarketSetup
  } =
    existingSettingsSnapshot && existingSettingsSnapshot.supplySetup
      ? {
          [existingSettingsSnapshot.supplySetup.id]:
            existingSettingsSnapshot.supplySetup,
        }
      : {}

  const allSupplySetups = {
    ...getCustomAndPredefined(state),
    ...existingSupply,
  }

  const supplySetup = allSupplySetups[marketId]

  if (existingSettingsSnapshot) {
    const usedExpansions = determineUsedExpansions(
      state,
      existingSettingsSnapshot
    )

    return {
      ...existingSettingsSnapshot,
      usedExpansions,
      supplySetup,
    }
  } else {
    const availableCardIds = selectors.Settings.Expansions.getSelectedCardIdsForSelectedExpansions(
      state
    )
    const availableMageIds = selectors.Settings.Expansions.getSelectedMageIdsForSelectedExpansions(
      state
    )
    const availableNemesisIds = selectors.Settings.Expansions.getSelectedNemesisIdsForSelectedExpansions(
      state
    )
    const availableTreasureIds = selectors.Settings.Expansions.getSelectedTreasureIdsForSelectedExpansions(
      state
    )
    const availableUpgradedBasicNemesisCardIds = selectors.Settings.Expansions.getSelectedUpgradedBasicNemesisCardIdsForSelectedExpansions(
      state
    )

    const baseSnapshot = {
      supplySetup,
      availableCardIds,
      availableMageIds,
      availableNemesisIds,
      availableTreasureIds,
      availableUpgradedBasicNemesisCardIds,
    }

    const usedExpansions = determineUsedExpansions(state, baseSnapshot)

    return {
      ...baseSnapshot,
      usedExpansions,
    }
  }
}
