import * as types from 'aer-types'
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
): types.SettingsSnapshot => {
  const usedExpansions = determineUsedExpansions(state, settingsSnapshot)

  // NOTE: Because we currently do get the marketId from the outside
  // (it is currently passed to an action creator from a react component),
  // we do not know the actual supply setup.
  // Therefore we create a lookup object from all predefined setups, user specific custom setups
  // as well as the setup which was used inside the given snapshot and retrieve the setup by its id.
  //
  // FIXME: This should probably be refactored in the future.
  const existingSupply = {
    [settingsSnapshot.supplySetup.id]: settingsSnapshot.supplySetup,
  }

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
