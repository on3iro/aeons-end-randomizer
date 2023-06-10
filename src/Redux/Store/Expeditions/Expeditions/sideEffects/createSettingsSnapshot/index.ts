import { RootState, selectors } from 'Redux/Store'
import * as types from 'aer-types/types'

import { handleExistingSettingsSnapshot } from 'Redux/Store/Expeditions/Expeditions/sideEffects/createSettingsSnapshot/handleExistingSettingsSnapshot'
import { handleNewSettingsSnapshot } from 'Redux/Store/Expeditions/Expeditions/sideEffects/createSettingsSnapshot/handleNewSettingsSnapshot'

export const createSettingsSnapshot = (
  state: RootState,
  existingConfig?: types.ImportedExpeditionConfig,
  marketId: string = 'random'
): types.SettingsSnapshot => {
  const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()
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

  const customAndPredefinedSetups = getCustomAndPredefined(state)

  if (existingConfig?.settingsSnapshotConfig) {
    return handleExistingSettingsSnapshot(
      state,
      existingConfig as types.ExpeditionConfig,
      customAndPredefinedSetups,
      marketId
    )
  } else {
    const supplySetup = customAndPredefinedSetups[marketId]

    return handleNewSettingsSnapshot(state, {
      supplySetup,
      availableCardIds,
      availableMageIds,
      availableNemesisIds,
      availableTreasureIds,
      availableUpgradedBasicNemesisCardIds,
    })
  }
}
