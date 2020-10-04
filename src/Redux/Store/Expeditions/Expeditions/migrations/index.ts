import * as types from 'aer-types/types'

import { State } from '../types'

import { migrateToSettingsSnapshot } from './migrateToSettingsSnapshot'
import { migrateToExpeditionDSL } from 'Redux/Store/Expeditions/Expeditions/migrations/migrateToExpeditionDSL'
import { byAscendingVersion } from 'helpers'
import { GetStateFn } from 'Redux/helpers'
import { isExpeditionState } from '../reducer'

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

export const getLatestMigrationVersion = () =>
  migrations.reduce((acc, migration) => {
    if (migration.version > acc) {
      return migration.version
    } else {
      return acc
    }
  }, 0)

export const migrate = (
  getState: GetStateFn,
  {
    newState,
  }: {
    newState: unknown
  }
): State => {
  const rootState = getState()

  if (!isExpeditionState(newState)) {
    return rootState.Expeditions.Expeditions
  }

  const expeditions = newState.expeditionIds.map(
    (id) => newState.expeditions[id]
  )

  const migratedExpeditions = expeditions.map((expedition) => {
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
