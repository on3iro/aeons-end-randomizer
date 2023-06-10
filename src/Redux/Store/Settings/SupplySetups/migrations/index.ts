import * as types from 'aer-types/types'

import { isSupplySetupState } from '../types'

import { byAscendingVersion } from 'helpers'
import { migrateToPredefinedWithIds } from './migrateToPredefinedWithIds'
import { GetStateFn } from 'Redux/helpers'

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
  getState: GetStateFn,
  {
    newState,
  }: {
    newState: unknown
  }
) => {
  const rootState = getState()

  if (!isSupplySetupState(newState)) {
    return rootState.Settings.SupplySetups
  }

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
