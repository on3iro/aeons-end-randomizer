import * as types from 'types'

export const convertToConfig = (
  expedition: types.Expedition
): types.ExpeditionConfig => {
  const {
    usedExpansions,
    ...settingsSnapshotConfig
  } = expedition.settingsSnapshot

  const expeditionConfig = {
    name: expedition.name,
    seedConfig: expedition.seed.seed,
    bigPocketVariantConfig: expedition.bigPocketVariant,
    variantIdConfig: expedition?.variantId,
    initialBarracksConfig: expedition?.initialBarracksConfig,
    initialUBNCardsConfig: expedition?.initialUBNCardsConfig,
    settingsSnapshotConfig,
    sequenceConfig: {
      firstBranchId: expedition.sequence.firstBranchId,
      branches: Object.values(expedition.sequence.branches).reduce(
        (acc, { id, type, config, nextBranchId }) => ({
          ...acc,
          [id]: {
            type,
            config,
            nextBranchId,
          },
        }),
        {}
      ),
    },
  }

  return expeditionConfig
}
