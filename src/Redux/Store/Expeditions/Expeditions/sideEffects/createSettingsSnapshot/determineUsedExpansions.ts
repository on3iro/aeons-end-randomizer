import { selectors } from 'Redux/Store'
import * as types from 'aer-types'
import { SelectedCardsLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedCards'
import { SelectedMagesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedMages'
import { SelectedNemesesLookupStateSlice } from 'Redux/Store/Settings/Expansions/SelectedNemeses'
import { TreasuresStateSlice } from 'Redux/Store/Settings/Expansions/Treasures'
import { UpgradedBasicNemesisCardsStateSlice } from 'Redux/Store/Settings/Expansions/UpgradedBasicNemesisCards'

const getFixIdsFromRewardsConfig = (config: types.RewardsConfig) => {
  return {
    cardIds:
      config.type === 'custom' && config.supply && config.supply.ids
        ? config.supply.ids.filter((id): id is string => typeof id === 'string')
        : [],
    treasureIds:
      config.type === 'custom' && config.treasure && config.treasure.ids
        ? config.treasure.ids.filter(
            (id): id is string => typeof id === 'string'
          )
        : [],
    mageIds:
      config.type === 'custom' && config.mage && config.mage.ids
        ? config.mage.ids.filter((id): id is string => typeof id === 'string')
        : [],
  }
}

// TODO add tests + refactor
const getFixIdsFromSequenceBranches = (
  branches?: types.BranchesConfig
): {
  cardIds: string[]
  mageIds: string[]
  nemesisIds: string[]
  treasureIds: string[]
  upgradedBasicNemesisIds: string[]
} => {
  if (!branches) {
    return {
      cardIds: [],
      mageIds: [],
      nemesisIds: [],
      treasureIds: [],
      upgradedBasicNemesisIds: [],
    }
  }

  const branchConfigs = Object.values(branches)

  return branchConfigs.reduce(
    (
      acc: {
        cardIds: string[]
        mageIds: string[]
        nemesisIds: string[]
        treasureIds: string[]
        upgradedBasicNemesisIds: string[]
      },
      config
    ) => {
      const defaultResult = {
        cardIds: [],
        treasureIds: [],
        mageIds: [],
      }

      switch (config.type) {
        case 'battle': {
          const {
            nemesisId,
            lossRewards,
            winRewards,
            newUBNCards,
          } = config.config

          const fromLossRewards =
            lossRewards && lossRewards.length > 0
              ? lossRewards.reduce(
                  (
                    acc: {
                      cardIds: string[]
                      treasureIds: string[]
                      mageIds: string[]
                    },
                    rewards
                  ) => {
                    if (rewards.type === 'custom') {
                      const fromConfig = getFixIdsFromRewardsConfig(rewards)

                      return {
                        cardIds: [...acc.cardIds, ...fromConfig.cardIds],
                        treasureIds: [
                          ...acc.treasureIds,
                          ...fromConfig.treasureIds,
                        ],
                        mageIds: [...acc.mageIds, ...fromConfig.mageIds],
                      }
                    } else {
                      return acc
                    }
                  },
                  defaultResult
                )
              : defaultResult

          const fromWinRewards = (() => {
            if (winRewards && winRewards.type === 'custom') {
              const fromConfig = getFixIdsFromRewardsConfig(winRewards)

              return {
                cardIds: [...acc.cardIds, ...fromConfig.cardIds],
                treasureIds: [...acc.treasureIds, ...fromConfig.treasureIds],
                mageIds: [...acc.mageIds, ...fromConfig.mageIds],
              }
            }

            return defaultResult
          })()

          const fromNewUBNCards =
            newUBNCards && newUBNCards.type === 'custom' ? newUBNCards.ids : []

          return {
            ...acc,
            cardIds: [
              ...acc.cardIds,
              ...fromLossRewards.cardIds,
              ...fromWinRewards.cardIds,
            ],
            mageIds: [
              ...acc.mageIds,
              ...fromLossRewards.mageIds,
              ...fromWinRewards.mageIds,
            ],
            nemesisIds: [...acc.nemesisIds, ...(nemesisId ? [nemesisId] : [])],
            upgradedBasicNemesisIds: fromNewUBNCards,
            treasureIds: [
              ...acc.treasureIds,
              ...fromLossRewards.treasureIds,
              ...fromWinRewards.treasureIds,
            ],
          }
        }

        case 'reward': {
          const fromConfig = getFixIdsFromRewardsConfig(config.config)
          return {
            ...acc,
            cardIds: [...acc.cardIds, ...fromConfig.cardIds],
            mageIds: [...acc.mageIds, ...fromConfig.mageIds],
            treasureIds: [...acc.treasureIds, ...fromConfig.treasureIds],
          }
        }

        case 'narrative':
        default: {
          return acc
        }
      }
    },
    {
      cardIds: [],
      mageIds: [],
      nemesisIds: [],
      treasureIds: [],
      upgradedBasicNemesisIds: [],
    }
  )
}

export const determineUsedExpansions = (
  state: SelectedCardsLookupStateSlice &
    SelectedMagesLookupStateSlice &
    SelectedNemesesLookupStateSlice &
    TreasuresStateSlice &
    UpgradedBasicNemesisCardsStateSlice,
  settingsSnapshot: Omit<types.SettingsSnapshot, 'usedExpansions'>,
  branches?: types.BranchesConfig,
  initialBarracks?: types.Barracks
) => {
  const {
    availableCardIds,
    availableMageIds,
    availableNemesisIds,
    availableTreasureIds,
    availableUpgradedBasicNemesisCardIds,
  } = settingsSnapshot

  const allCards = selectors.Settings.Expansions.SelectedCards.getSelectedCardsLookupObject(
    state
  )
  const allMages = selectors.Settings.Expansions.SelectedMages.getSelectedMagesLookupObject(
    state
  )
  const allNemeses = selectors.Settings.Expansions.SelectedNemeses.getSelectedNemesesLookupObject(
    state
  )
  const allTreasures = selectors.Settings.Expansions.Treasures.getTreasures(
    state
  )
  const allUBNCards = selectors.Settings.Expansions.UpgradedBasicNemesisCards.getUpgradedBasicNemesisCards(
    state
  )

  const fromBranches = getFixIdsFromSequenceBranches(branches)
  const fromInitialBarracks = initialBarracks ?? {
    mageIds: [],
    supplyIds: [],
    treasureIds: [],
  }

  const expansionIds = [
    ...[
      ...availableCardIds,
      ...fromBranches.cardIds,
      ...fromInitialBarracks.supplyIds,
    ]
      .map(id => allCards[id])
      .map(c => c.expansion),
    ...[
      ...availableMageIds,
      ...fromBranches.mageIds,
      ...fromInitialBarracks.mageIds,
    ]
      .map(id => allMages[id])
      .map(m => m.expansion),
    ...[...availableNemesisIds, ...fromBranches.nemesisIds]
      .map(id => allNemeses[id])
      .map(n => n.expansion),
    ...[
      ...availableTreasureIds,
      ...fromBranches.treasureIds,
      ...fromInitialBarracks.treasureIds,
    ]
      .map(id => allTreasures[id])
      .map(t => t.expansion),
    ...[...availableUpgradedBasicNemesisCardIds]
      .map(id => allUBNCards[id])
      .map(c => c.expansion),
  ]

  const uniqueIds = [...new Set(expansionIds)]

  return uniqueIds
}
