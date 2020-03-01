import { RootState, selectors } from 'Redux/Store'
import * as types from 'types'

const determineUsedExpansions = (
  state: RootState,
  settingsSnapshot: Omit<types.SettingsSnapshot, 'usedExpansions'>
) => {
  const {
    availableCardIds,
    availableMageIds,
    availableNemesisIds,
    availableTreasureIds,
    availableUpgradedBasicNemesisCardIds,
  } = settingsSnapshot
  const allCards = selectors.Settings.Expansions.SelectedCards.getSelectedCardsLookupObject(
    state
  )
  const allMages = selectors.Settings.Expansions.SelectedMages.getSelectedMagesLookupObject(
    state
  )
  const allNemeses = selectors.Settings.Expansions.SelectedNemeses.getSelectedNemesesState(
    state
  ).nemeses
  const allTreasures = selectors.Settings.Expansions.Treasures.getTreasures(
    state
  )
  const allUBNCards = selectors.Settings.Expansions.UpgradedBasicNemesisCards.getUpgradedBasicNemesisCards(
    state
  )

  const expansionIds = [
    ...availableCardIds.map(id => allCards[id]).map(c => c.expansion),
    ...availableMageIds.map(id => allMages[id]).map(m => m.expansion),
    ...availableNemesisIds.map(id => allNemeses[id]).map(n => n.expansion),
    ...availableTreasureIds.map(id => allTreasures[id]).map(t => t.expansion),
    ...availableUpgradedBasicNemesisCardIds
      .map(id => allUBNCards[id])
      .map(c => c.expansion),
  ]

  const uniqueIds = [...new Set(expansionIds)]

  return uniqueIds
}

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
