import { RootState } from 'Redux/Store'

import * as types from 'types'

import { State } from '../types'
import { createSettingsSnapshot } from './createSettingsSnapshot'

// FIXME we should find a better way to do this kind of migration, which
// is more organized and follows a recognizable pattern
// https://github.com/on3iro/aeons-end-randomizer/issues/138

// We use this to make sure all future and past expeditions have a settings snapshot attached
// That way we can rely on the snapshot for all our calculations and no longer need to access
// the useres current settings during an expedition.
export const migrateToSettingsSnapshot = (
  getState: () => RootState,
  {
    state,
    expeditionsToMigrate,
  }: {
    state: State
    expeditionsToMigrate: types.Expedition[]
  }
) => {
  const rootState = getState()
  const settingsSnapshot = createSettingsSnapshot(rootState)

  const migratedExpeditions = expeditionsToMigrate.map(expedition => {
    return {
      ...expedition,
      seed: expedition.seed || expedition.id,
      settingsSnapshot: expedition.settingsSnapshot || settingsSnapshot,
    }
  })

  const migratedExpeditionsObject = migratedExpeditions.reduce(
    (acc, expedition) => {
      return {
        ...acc,
        [expedition.id]: expedition,
      }
    },
    {}
  )

  const migratedState = {
    expeditions: {
      ...state.expeditions,
      ...migratedExpeditionsObject,
    },
    expeditionIds: state.expeditionIds,
  }

  return migratedState
}
