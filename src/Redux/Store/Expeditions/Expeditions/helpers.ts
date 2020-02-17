import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'

import { LossConfig } from './types'

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

export const rollNewEntity = (
  list: string[],
  getEntity: <E>(list: Array<E>) => E = getRandomEntity
): string =>
  createIdList(list, createArrayWithDefaultValues(1, 'EMPTY'), getEntity)
    .result[0]

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
