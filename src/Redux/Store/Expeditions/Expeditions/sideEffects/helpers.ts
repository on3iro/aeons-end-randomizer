import * as types from 'aer-types'

import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
  createCardList,
} from 'Redux/helpers'

import { RootState, selectors } from 'Redux/Store'

export const rollNewEntity = (
  list: string[],
  getEntity: types.SeededEntityGetter = getRandomEntity,
  seed: types.Seed
): { result: string; seed: types.Seed } => {
  const idList = createIdList(
    list,
    createArrayWithDefaultValues(1, 'EMPTY'),
    getEntity,
    seed
  )
  return {
    result: idList.result[0],
    seed: idList.seed,
  }
}

type RewardResult = {
  result: string[]
  seed: types.Seed
}

// TODO add tests
export const getSupplyIds = ({
  supply,
  seed,
  stillAvailableCardsByType,
}: {
  supply: types.SupplyRewardConfig | undefined
  seed: types.Seed
  stillAvailableCardsByType: {
    Gem: types.ICard[]
    Relic: types.ICard[]
    Spell: types.ICard[]
    EMPTY: never[]
  }
}) => {
  const baseResult = {
    result: [],
    seed,
  }

  if (supply === undefined) {
    return baseResult
  } else {
    // We split blueprints and ids.
    // This has two benefits:
    // 1.) it lets us filter available cards by those ids, which have been explicitely specified
    // 2.) it makes the reduce call a bit easer to read and maintain, as we don't have to handle the 'string' case
    const ids = supply.ids.filter(
      idOrBlueprint => typeof idOrBlueprint === 'string'
    )
    const bluePrints = supply.ids.filter(
      (idOrBlueprint): idOrBlueprint is types.IBluePrint =>
        typeof idOrBlueprint !== 'string'
    )

    return bluePrints.reduce(
      (acc: RewardResult, blueprint) => {
        const cardType = blueprint.type
        const stillAvailableCards = stillAvailableCardsByType[cardType].filter(
          card => ids.indexOf(card.id) === -1
        )

        const cardCreationResult = createCardList(
          stillAvailableCards,
          [blueprint],
          undefined,
          acc.seed
        )

        return {
          result: [
            ...acc.result,
            ...cardCreationResult.result.map(card => card.id),
          ],
          seed: cardCreationResult.seed,
        }
      },
      {
        ...baseResult,
        result: ids,
      } as RewardResult // FIXME casting should technically not be necessary (but i could make it work without)
    )
  }
}

export const getTreasureIds = ({
  treasure,
  stillAvailableTreasureIdsByLevel,
  seed,
}: {
  treasure: types.TreasureRewardConfig | undefined
  seed: types.Seed
  stillAvailableTreasureIdsByLevel: {
    1: string[]
    2: string[]
    3: string[]
  }
}) => {
  const baseResult = {
    result: [],
    seed,
  }

  if (treasure === undefined) {
    return baseResult
  } else {
    const ids = treasure.ids.filter(
      idOrRandom => typeof idOrRandom === 'string'
    )

    const randomTreasureConfigs = treasure.ids.filter(
      (idOrRandom): idOrRandom is { random: true; level: 1 | 2 | 3 } =>
        typeof idOrRandom !== 'string'
    )

    return randomTreasureConfigs.reduce(
      (acc: RewardResult, config) => {
        const treasureLevel = config.level
        const stillAvailableCards = stillAvailableTreasureIdsByLevel[
          treasureLevel
        ].filter(treasureId => ids.indexOf(treasureId) === -1)

        const treasureIdsResult = createIdList(
          stillAvailableCards,
          ['EMPTY'],
          undefined,
          acc.seed
        )

        return {
          result: [...acc.result, ...treasureIdsResult.result],
          seed: treasureIdsResult.seed,
        }
      },
      {
        ...baseResult,
        result: ids,
      } as RewardResult // FIXME casting should technically not be necessary (but i could make it work without)
    )
  }
}

export const getMageIds = ({
  mage,
  stillAvailableMageIds,
  seed,
}: {
  mage: types.MageRewardConfig | undefined
  seed: types.Seed
  stillAvailableMageIds: string[]
}) => {
  const baseResult = {
    result: [],
    seed,
  }

  if (mage === undefined) {
    return baseResult
  } else {
    const ids = mage.ids.filter(idOrRandom => typeof idOrRandom === 'string')

    const randomTreasureConfigs = mage.ids.filter(
      (idOrRandom): idOrRandom is { random: true } =>
        typeof idOrRandom !== 'string'
    )

    return randomTreasureConfigs.reduce(
      (acc: RewardResult, _) => {
        const filteredMageIds = stillAvailableMageIds.filter(
          mageId => ids.indexOf(mageId) === -1
        )

        const mageIdsResult = createIdList(
          filteredMageIds,
          ['EMPTY'],
          undefined,
          acc.seed
        )

        return {
          result: [...acc.result, ...mageIdsResult.result],
          seed: mageIdsResult.seed,
        }
      },
      {
        ...baseResult,
        result: ids,
      } as RewardResult // FIXME casting should technically not be necessary (but i could make it work without)
    )
  }
}

// TODO add tests
export const handleCustomRewards = (state: RootState, reward: types.Reward) => {
  const expeditionId = reward.expeditionId
  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId }
  )

  // FIXME
  // it currently is possible that an id which is used as custom id is also being
  // rolle before its part of a reward
  // We definitely need a testcase for this, as well as the logic to avoid clashes like these

  // The 'regular' RewardsConfig property should only be used in other contexts
  // Which is why we opt out of doing anything, if it was mistakenly added to a
  // Reward-Branch
  if (reward.config.type === 'regular') {
    return {
      rewards: {
        treasure: [],
        mages: [],
        supplyIds: [],
      },
      seed: {
        seed: expedition.seed.seed,
        state: expedition.seed.supplyState,
      },
    }
  } else {
    ///////////////////////
    // Content Selection //
    ///////////////////////

    const stillAvailableCardsByType = {
      Gem: selectors.getStillAvailableGems(state, {
        expeditionId,
      }),
      Relic: selectors.getStillAvailableRelics(state, {
        expeditionId,
      }),
      Spell: selectors.getStillAvailableSpells(state, {
        expeditionId,
      }),
      EMPTY: [],
    }

    const stillAvailableTreasureIdsByLevel = {
      1: selectors.getStillAvailableTreasureIdsByLevel(state, {
        treasureLevel: 1,
        expeditionId,
      }),
      2: selectors.getStillAvailableTreasureIdsByLevel(state, {
        treasureLevel: 2,
        expeditionId,
      }),
      3: selectors.getStillAvailableTreasureIdsByLevel(state, {
        treasureLevel: 3,
        expeditionId,
      }),
    }

    const stillAvailableMageIds = selectors.getStillAvailableMageIds(state, {
      expeditionId,
    })

    ////////////
    // Supply //
    ////////////

    const { supply } = reward.config
    const supplyIdsResult = getSupplyIds({
      supply,
      seed: {
        seed: expedition.seed.seed,
        state: expedition.seed.supplyState,
      },
      stillAvailableCardsByType,
    })

    ///////////
    // Mages //
    ///////////

    const { mage } = reward.config
    const mageIdsResult = getMageIds({
      mage,
      seed: supplyIdsResult.seed,
      stillAvailableMageIds,
    })

    ///////////////
    // Treasures //
    ///////////////

    const { treasure } = reward.config
    const treasureIdsResult = getTreasureIds({
      treasure,
      seed: mageIdsResult.seed,
      stillAvailableTreasureIdsByLevel,
    })

    return {
      rewards: {
        supplyIds: supplyIdsResult.result,
        treasure: treasureIdsResult.result,
        mages: mageIdsResult.result,
      },
      seed: treasureIdsResult.seed,
    }
  }
}
