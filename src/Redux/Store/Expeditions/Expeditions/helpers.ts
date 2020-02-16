import {
  createArrayWithDefaultValues,
  createIdList,
  getRandomEntity,
} from 'Redux/helpers'

import { WinConfig, LossConfig } from './types'

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
