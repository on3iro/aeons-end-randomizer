import * as types from 'aer-types'

import { RootState } from 'Redux/Store'

import { State } from '../types'

import { byAscendingVersion } from 'helpers'
import { migrateToPredefinedWithIds } from './migrateToPredefinedWithIds'

const migrations: types.Migration[] = [
  {
    version: 2020092501,
    transformer: migrateToPredefinedWithIds,
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
  getState: () => RootState,
  {
    newState,
  }: {
    newState: State
  }
) => {
  const rootState = getState()

  const migrated = migrations.reduce((acc, migration) => {
    if (!newState) {
      return {
        ...migration.transformer(rootState, rootState.Settings.SupplySetups),
        migrationVersion: migration.version,
      }
    } else if (!newState.migrationVersion) {
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
    } else {
      return acc
    }
  }, newState)

  return migrated
}
