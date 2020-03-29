import * as types from 'types'
import { determineUsedExpansions } from './determineUsedExpansions'

import { SelectedCardsLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedCards'
import { SelectedMagesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedMages'
import { SelectedNemesesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedNemeses'
import { TreasuresStateSlice } from 'Redux/Store/Settings/Expansions/Treasures'
import { UpgradedBasicNemesisCardsStateSlice } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards'

export const handleExistingSettingsSnapshot = (
  state: SelectedCardsLookupStateSlice &
    SelectedMagesLookupStateSlice &
    SelectedNemesesLookupStateSlice &
    TreasuresStateSlice &
    UpgradedBasicNemesisCardsStateSlice,
  settingsSnapshot: Omit<types.SettingsSnapshot, 'usedExpansions'>,
  baseSupplySetups: { [id: string]: types.IMarketSetup },
  marketId: string
) => {
  const usedExpansions = determineUsedExpansions(state, settingsSnapshot)

  const existingSupply: {
    [id: string]: types.IMarketSetup
  } = settingsSnapshot.supplySetup
    ? {
        [settingsSnapshot.supplySetup.id]: settingsSnapshot.supplySetup,
      }
    : {}

  const allSupplySetups = {
    ...baseSupplySetups,
    ...existingSupply,
  }

  const supplySetup = allSupplySetups[marketId]

  return {
    ...settingsSnapshot,
    usedExpansions,
    supplySetup,
  }
}
