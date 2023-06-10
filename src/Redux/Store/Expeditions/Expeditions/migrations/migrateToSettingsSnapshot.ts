import { RootState } from 'Redux/Store'

import * as types from 'aer-types/types'

import { createSettingsSnapshot } from '../sideEffects/createSettingsSnapshot'

// We use this to make sure all future and past expeditions have a settings snapshot attached
// That way we can rely on the snapshot for all our calculations and no longer need to access
// the useres current settings during an expedition.
export const migrateToSettingsSnapshot = (
  rootState: RootState,
  expedition: types.Expedition
) => {
  const settingsSnapshot = createSettingsSnapshot(rootState)

  if (expedition.settingsSnapshot && expedition.seed) {
    return expedition
  }

  return {
    ...expedition,
    seed: expedition.seed || expedition.id,
    settingsSnapshot: expedition.settingsSnapshot || settingsSnapshot,
  }
}
