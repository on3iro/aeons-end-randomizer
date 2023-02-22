import * as types from 'aer-types/types'
import shortid from 'shortid'
import { getLatestMigrationVersion } from 'Redux/Store/Expeditions/Expeditions/migrations'

export const convertExpeditionFromConfig = (
  config: types.ImportedExpeditionConfig
): types.ExpeditionFromImportedConfig => {
  const expeditionId = shortid.generate()

  const expedition = {
    id: expeditionId,
    name: config.name,
    bigPocketVariant: config.bigPocketVariantConfig,
    uniqueMageNames: config.uniqueMageNamesConfig || false,
    score: 0,
    seed: {
      seed: config.seedConfig || shortid.generate(),
      supplyState: true,
      nemesisState: true,
    },
    barracks: {
      supplyIds: config.initialBarracksConfig?.supplyIds || [],
      mageIds: config.initialBarracksConfig?.mageIds || [],
      treasureIds: config.initialBarracksConfig?.treasureIds || [],
    },
    banished: [],
    finished: false,
    upgradedBasicNemesisCards: config.initialUBNCardsConfig || [],
    settingsSnapshot: config.settingsSnapshotConfig,
    sequence: {
      firstBranchId: config.sequenceConfig.firstBranchId,
      branches: Object.keys(config.sequenceConfig.branches)
        .map((key) => {
          const branch = {
            ...config.sequenceConfig.branches[key],
            id: key,
            expeditionId,
            status:
              key === config.sequenceConfig.firstBranchId
                ? 'unlocked'
                : 'locked',
            ...(config.sequenceConfig.branches[key].type === 'battle'
              ? { tries: 0 }
              : {}),
          }

          return branch
        })
        .reduce(
          (acc, branch) => ({
            ...acc,
            [branch.id]: branch,
          }),
          {}
        ),
    },
    migrationVersion: getLatestMigrationVersion(),
  }

  return expedition
}
