import * as types from 'aer-types'
import { determineUsedExpansions } from './determineUsedExpansions'

import { SelectedCardsLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedCards'
import { SelectedMagesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedMages'
import { SelectedNemesesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedNemeses'
import { TreasuresStateSlice } from 'Redux/Store/Settings/Expansions/Treasures'
import { UpgradedBasicNemesisCardsStateSlice } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards'

export const handleNewSettingsSnapshot = (
  state: SelectedCardsLookupStateSlice &
    SelectedMagesLookupStateSlice &
    SelectedNemesesLookupStateSlice &
    TreasuresStateSlice &
    UpgradedBasicNemesisCardsStateSlice,
  baseSnapshot: {
    supplySetup: types.IMarketSetup
    availableCardIds: string[]
    availableMageIds: string[]
    availableNemesisIds: string[]
    availableTreasureIds: string[]
    availableUpgradedBasicNemesisCardIds: string[]
  }
): types.SettingsSnapshot => {
  const usedExpansions = determineUsedExpansions(state, baseSnapshot)

  return {
    ...baseSnapshot,
    usedExpansions,
  }
}
