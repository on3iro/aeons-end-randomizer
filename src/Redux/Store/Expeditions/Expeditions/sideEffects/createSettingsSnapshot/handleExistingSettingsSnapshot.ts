import * as types from 'aer-types/types'
import { determineUsedExpansions } from './determineUsedExpansions'

import { MagesContentStateSlice } from 'Redux/Store/Settings/Expansions/Mages/content'
import { NemesisContentStateSlice } from 'Redux/Store/Settings/Expansions/Nemeses/content'
import { TreasureContentStateSlice } from 'Redux/Store/Settings/Expansions/Treasures/content'
import { UpgradedBasicNemesisCardContentStateSlice } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards/content'
import { CardsContentStateSlice } from 'Redux/Store/Settings/Expansions/Cards/content'

export const handleExistingSettingsSnapshot = (
  state: CardsContentStateSlice &
    MagesContentStateSlice &
    NemesisContentStateSlice &
    TreasureContentStateSlice &
    UpgradedBasicNemesisCardContentStateSlice,
  existingConfig: types.ExpeditionConfig,
  baseSupplySetups: { [id: string]: types.IMarketSetup },
  marketId: string
): types.SettingsSnapshot => {
  const usedExpansions = determineUsedExpansions(
    state,
    existingConfig.settingsSnapshotConfig,
    existingConfig.sequenceConfig.branches,
    existingConfig.initialBarracksConfig
  )

  // NOTE: Because we currently do get the marketId from the outside
  // (it is currently passed to an action creator from a react component),
  // we do not know the actual supply setup.
  // Therefore we create a lookup object from all predefined setups, user specific custom setups
  // as well as the setup which was used inside the given snapshot and retrieve the setup by its id.
  //
  // FIXME: This should probably be refactored in the future.
  const existingSupply = {
    [existingConfig.settingsSnapshotConfig.supplySetup.id]:
      existingConfig.settingsSnapshotConfig.supplySetup,
  }

  const allSupplySetups = {
    ...baseSupplySetups,
    ...existingSupply,
  }

  const supplySetup = allSupplySetups[marketId]

  return {
    ...existingConfig.settingsSnapshotConfig,
    usedExpansions,
    supplySetup,
  }
}
