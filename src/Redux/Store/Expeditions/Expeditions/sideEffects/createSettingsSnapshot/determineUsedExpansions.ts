import { selectors } from 'Redux/Store'
import * as types from 'aer-types'
import { SelectedCardsLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedCards'
import { SelectedMagesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedMages'
import { SelectedNemesesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedNemeses'
import { TreasuresStateSlice } from 'Redux/Store/Settings/Expansions/Treasures'
import { UpgradedBasicNemesisCardsStateSlice } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards'

export const determineUsedExpansions = (
  state: SelectedCardsLookupStateSlice &
    SelectedMagesLookupStateSlice &
    SelectedNemesesLookupStateSlice &
    TreasuresStateSlice &
    UpgradedBasicNemesisCardsStateSlice,
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
  const allNemeses = selectors.Settings.Expansions.SelectedNemeses.getSelectedNemesesLookupObject(
    state
  )
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
