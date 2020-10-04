import * as types from 'aer-types/types'
import { determineUsedExpansions } from './determineUsedExpansions'

import { MagesContentStateSlice } from 'Redux/Store/Settings/Expansions/Mages/content'
import { NemesisContentStateSlice } from 'Redux/Store/Settings/Expansions/Nemeses/content'
import { TreasureContentStateSlice } from 'Redux/Store/Settings/Expansions/Treasures/content'
import { UpgradedBasicNemesisCardContentStateSlice } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards/content'
import { CardsContentStateSlice } from 'Redux/Store/Settings/Expansions/Cards/content'

export const handleNewSettingsSnapshot = (
  state: CardsContentStateSlice &
    MagesContentStateSlice &
    NemesisContentStateSlice &
    TreasureContentStateSlice &
    UpgradedBasicNemesisCardContentStateSlice,
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
