import * as types from 'types'

import { RootState } from 'Redux/Store'

import { State } from '../types'

import { migrateToSettingsSnapshot } from './migrateToSettingsSnapshot'
import { migrateToExpeditionDSL } from 'Redux/Store/Expeditions/Expeditions/migrations/migrateToExpeditionDSL'
import { byAscendingVersion } from 'helpers'

const migrations: types.Migration[] = [
  {
    version: 2020030401,
    transformer: migrateToExpeditionDSL,
  },
  {
    version: 2020030301,
    transformer: migrateToSettingsSnapshot,
  },
].sort(byAscendingVersion)

export const migrate = (
  getState: () => RootState,
  {
    newState,
  }: {
    newState: State
  }
) => {
  const rootState = getState()

  const expeditions = newState.expeditionIds.map(id => newState.expeditions[id])

  const migratedExpeditions = expeditions.map(expedition => {
    return migrations.reduce((acc, migration) => {
      if (!expedition.migrationVersion) {
        return {
          ...migration.transformer(rootState, acc),
          migrationVersion: migration.version,
        }
      } else if (migration.force) {
        return {
          ...migration.transformer(rootState, acc),
          migrationVersion: migration.version,
        }
      } else if (
        acc.migrationVersion &&
        migration.version > acc.migrationVersion
      ) {
        return {
          ...migration.transformer(rootState, acc),
          migrationVersion: migration.version,
        }
      }

      return acc
    }, expedition)
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
      ...migratedExpeditionsObject,
    },
    expeditionIds: newState.expeditionIds,
  }

  return migratedState
}
