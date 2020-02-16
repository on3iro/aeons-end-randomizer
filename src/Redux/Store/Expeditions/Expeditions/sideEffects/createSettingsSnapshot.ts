import { RootState, selectors } from 'Redux/Store'
import * as types from 'types'

export const createSettingsSnapshot = (
  state: RootState,
  marketId: string = 'DEFAULT'
): types.SettingsSnapshot => {
  const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()
  const allSupplySetups = getCustomAndPredefined(state)

  const supplySetup = allSupplySetups[marketId]
  const availableCardIds = selectors.Settings.Expansions.getSelectedCardIdsForSelectedExpansions(
    state
  )
  const availableMageIds = selectors.Settings.Expansions.getSelectedMageIdsForSelectedExpansions(
    state
  )
  const availableNemesisIds = selectors.Settings.Expansions.getSelectedNemesisIdsForSelectedExpansions(
    state
  )
  const availableTreasureIds = selectors.Settings.Expansions.getTreasureIdsForSelectedExpansions(
    state
  )
  const availableUpgradedBasicNemesisCardIds = selectors.Settings.Expansions.getUpgradedBasicNemesisCardIdsForSelectedExpansions(
    state
  )

  return {
    supplySetup,
    availableCardIds,
    availableMageIds,
    availableNemesisIds,
    availableTreasureIds,
    availableUpgradedBasicNemesisCardIds,
  }
}
