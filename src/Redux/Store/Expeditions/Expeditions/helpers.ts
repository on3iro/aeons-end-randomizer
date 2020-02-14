import shortid from 'shortid'

import * as types from 'types'
import { byCost } from 'helpers'

import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
  createSupply,
} from 'Redux/helpers'

import { BaseConfig, RollBattleConfig, WinConfig, LossConfig } from './types'

export const calcBattleScore = (tries: number) => {
  switch (tries) {
    case 1: {
      return 6
    }

    case 2: {
      return 4
    }

    case 3: {
      return 2
    }

    default: {
      return 0
    }
  }
}

export const determineBaseTier = () => {}

export const generateBattles = (
  variant: types.Variant,
  expeditionId: string
) => {
  const battles = variant.configList.map(
    (config, index): types.Battle => {
      const isFirst = index === 0

      return {
        id: shortid.generate(),
        nemesisTier: config.tier,
        treasure: config.treasure,
        expeditionId,
        status: isFirst ? 'unlocked' : 'locked',
        tries: 0,
      }
    }
  )

  return battles
}

export const createExpeditionConfig = ({
  variant,
  name,
  bigPocketVariant,
  availableMageIds,
  availableCards,
  availableLevel1TreasureIds,
  tiles,
}: BaseConfig) => {
  const mageIds = createIdList(
    availableMageIds,
    createArrayWithDefaultValues(4, 'EMPTY'),
    getRandomEntity
  ).result
  const { gems, relics, spells } = createSupply(availableCards, tiles)
  const gemsByCost = gems.result.sort(byCost)
  const relicsByCost = relics.result.sort(byCost)
  const spellsByCost = spells.result.sort(byCost)

  const supplyIds = [...gemsByCost, ...relicsByCost, ...spellsByCost].map(
    card => card.id
  )

  const startsWithTreasure = variant.configList[0].tier.tier > 1 // TODO should probably use our rollTreasure property
  const treasureIds = startsWithTreasure
    ? createIdList(
        availableLevel1TreasureIds,
        createArrayWithDefaultValues(5, 'EMPTY'),
        getRandomEntity
      ).result
    : []

  const expeditionId = shortid.generate()
  const battles = generateBattles(variant, expeditionId)

  return {
    battles,
    bigPocketVariant,
    expeditionId,
    mageIds,
    name,
    supplyIds,
    treasureIds,
    variantId: variant.id,
  }
}

// Because we always add these cards to an existing array inside our expedition in our store,
// the count of newly added cards decreases by tier.
// If we ever have a variant, that starts higher than tier 2 we have to
// incorporate changes to roll the whole amount of cards per tier!
const getUpgradedBasicNemesisIdsByBattleTier = ({
  availableTier1Ids,
  availableTier2Ids,
  availableTier3Ids,
  battleTier,
}: {
  availableTier1Ids: string[]
  availableTier2Ids: string[]
  availableTier3Ids: string[]
  battleTier: 1 | 2 | 3 | 4
}) => {
  switch (battleTier) {
    case 1: {
      return [] // No upgraded cards are added on tier 1
    }

    case 2: {
      const tier1Ids = createIdList(
        availableTier1Ids,
        createArrayWithDefaultValues(1, 'EMPTY'),
        getRandomEntity
      ).result
      const tier2Ids = createIdList(
        availableTier2Ids,
        createArrayWithDefaultValues(3, 'EMPTY'),
        getRandomEntity
      ).result
      const tier3Ids = createIdList(
        availableTier3Ids,
        createArrayWithDefaultValues(3, 'EMPTY'),
        getRandomEntity
      ).result

      return [...tier1Ids, ...tier2Ids, ...tier3Ids]
    }

    case 3:
    case 4: {
      const tier1Ids = createIdList(
        availableTier1Ids,
        createArrayWithDefaultValues(1, 'EMPTY'),
        getRandomEntity
      ).result
      const tier2Ids = createIdList(
        availableTier2Ids,
        createArrayWithDefaultValues(1, 'EMPTY'),
        getRandomEntity
      ).result
      const tier3Ids = createIdList(
        availableTier3Ids,
        createArrayWithDefaultValues(2, 'EMPTY'),
        getRandomEntity
      ).result

      return [...tier1Ids, ...tier2Ids, ...tier3Ids]
    }

    default: {
      return [] // Should never occur!
    }
  }
}

const rollNewUpgradedNemesisCards = (
  availableUpgradedBasicNemesisCards: types.UpgradedBasicNemesisCard[],
  previousUpgradedBasicNemesisCards: string[],
  nemesisTier: 1 | 2 | 3 | 4
) => {
  const upgradedCardsWithoutPreviousCards = availableUpgradedBasicNemesisCards.filter(
    upgradedCard => !previousUpgradedBasicNemesisCards.includes(upgradedCard.id)
  )

  const tier1AvailableUpgradedNemesisIds = upgradedCardsWithoutPreviousCards
    .filter(card => card.tier === 1)
    .map(card => card.id)
  const tier2AvailableUpgradedNemesisIds = upgradedCardsWithoutPreviousCards
    .filter(card => card.tier === 2)
    .map(card => card.id)
  const tier3AvailableUpgradedNemesisIds = upgradedCardsWithoutPreviousCards
    .filter(card => card.tier === 3)
    .map(card => card.id)

  const upgradedBasicNemesisCardIds = getUpgradedBasicNemesisIdsByBattleTier({
    battleTier: nemesisTier,
    availableTier1Ids: tier1AvailableUpgradedNemesisIds,
    availableTier2Ids: tier2AvailableUpgradedNemesisIds,
    availableTier3Ids: tier3AvailableUpgradedNemesisIds,
  })

  return [...previousUpgradedBasicNemesisCards, ...upgradedBasicNemesisCardIds]
}

export const createBattle = (config: RollBattleConfig) => {
  const nemesisIds = config.availableNemeses
    .filter(
      nemesis => nemesis.expeditionRating === config.battle.nemesisTier.tier
    )
    .map(nemesis => nemesis.id)
    .filter(nemesisId => !config.previousNemeses.includes(nemesisId))

  const nemesisId = createIdList(
    nemesisIds,
    createArrayWithDefaultValues(1, 'EMPTY'),
    getRandomEntity
  ).result[0]

  const upgradedBasicNemesisCardIds = config.battle.nemesisTier.isNewTier
    ? rollNewUpgradedNemesisCards(
        config.availableUpgradedBasicNemesisCards,
        config.previousUpgradedBasicNemesisCards,
        config.battle.nemesisTier.tier
      )
    : config.previousUpgradedBasicNemesisCards

  return {
    battle: { ...config.battle, nemesisId, status: 'before_battle' },
    upgradedBasicNemesisCardIds,
  }
}

const rollNewEntity = (list: string[]): string =>
  createIdList(list, createArrayWithDefaultValues(1, 'EMPTY'), getRandomEntity)
    .result[0]

export const rollWinRewards = (config: WinConfig) => {
  const newTreasures = createIdList(
    config.treasureIds,
    createArrayWithDefaultValues(5, 'EMPTY'),
    getRandomEntity
  ).result

  const newGem = rollNewEntity(config.gemIds)
  const newRelic = rollNewEntity(config.relicIds)
  const newSpell = rollNewEntity(config.spellIds)

  const updatedBattle = {
    ...config.battle,
    rewards: {
      treasure: newTreasures,
      supplyIds: [newGem, newRelic, newSpell],
      mage: undefined, // we explicitely overwrite the mage reward from earlier losses
    },
  }
  return { battle: updatedBattle }
}

export const rollLossRewards = (config: LossConfig) => {
  switch (config.type) {
    case 'mage': {
      const newMage = rollNewEntity(config.mageIds)

      return {
        ...config.battle,
        rewards: {
          treasure: [],
          mage: newMage,
          supplyIds: [],
        },
      }
    }

    case 'gem': {
      const newGem = rollNewEntity(config.gemIds)

      return {
        ...config.battle,
        rewards: {
          treasure: [],
          mage: undefined,
          supplyIds: [newGem],
        },
      }
    }

    case 'relic': {
      const newRelic = rollNewEntity(config.relicIds)

      return {
        ...config.battle,
        rewards: {
          treasure: [],
          mage: undefined,
          supplyIds: [newRelic],
        },
      }
    }

    case 'spell': {
      const newSpell = rollNewEntity(config.spellIds)

      return {
        ...config.battle,
        rewards: {
          treasure: [],
          mage: undefined,
          supplyIds: [newSpell],
        },
      }
    }

    case 'treasure1': {
      const newTreasure = rollNewEntity(config.treasure1Ids)

      return {
        ...config.battle,
        rewards: {
          treasure: [newTreasure],
          mage: undefined,
          supplyIds: [],
        },
      }
    }

    case 'treasure2': {
      const newTreasure = rollNewEntity(config.treasure2Ids)

      return {
        ...config.battle,
        rewards: {
          treasure: [newTreasure],
          mage: undefined,
          supplyIds: [],
        },
      }
    }

    case 'treasure3': {
      const newTreasure = rollNewEntity(config.treasure3Ids)

      return {
        ...config.battle,
        rewards: {
          treasure: [newTreasure],
          mage: undefined,
          supplyIds: [],
        },
      }
    }

    default: {
      return { ...config.battle }
    }
  }
}
