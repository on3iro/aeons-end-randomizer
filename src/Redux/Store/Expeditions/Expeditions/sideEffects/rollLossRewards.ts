import { RootState, selectors } from 'Redux/Store'
import { getRandomEntity } from 'Redux/helpers'

import * as types from 'types'

import { RewardType } from '../types'
import { rollNewEntity } from './helpers'

export const rollLossRewards = (
  getState: () => RootState,
  battle: types.Battle,
  rewardType: RewardType
) => {
  const state = getState()

  const expeditionId = battle.expeditionId
  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId }
  )
  const { seed } = expedition

  const gemIds = selectors.getStillAvailableGemIds(state, {
    expeditionId,
  })
  const relicIds = selectors.getStillAvailableRelicIds(state, {
    expeditionId,
  })
  const spellIds = selectors.getStillAvailableSpellIds(state, {
    expeditionId,
  })

  const treasure1Ids = selectors.getNewTreasureIdsByLevel(state, {
    treasureLevel: 1,
    expeditionId,
  })
  const treasure2Ids = selectors.getNewTreasureIdsByLevel(state, {
    treasureLevel: 2,
    expeditionId,
  })
  const treasure3Ids = selectors.getNewTreasureIdsByLevel(state, {
    treasureLevel: 3,
    expeditionId,
  })

  const mageIds = selectors.getStillAvailableMageIds(state, { expeditionId })

  switch (rewardType) {
    case 'mage': {
      const newMage = rollNewEntity(mageIds, availableEntities =>
        getRandomEntity(availableEntities, seed)
      )

      return {
        ...battle,
        rewards: {
          treasure: [],
          mage: newMage,
          supplyIds: [],
        },
      }
    }

    case 'gem': {
      const newGem = rollNewEntity(gemIds, availableEntities =>
        getRandomEntity(availableEntities, seed)
      )

      return {
        ...battle,
        rewards: {
          treasure: [],
          mage: undefined,
          supplyIds: [newGem],
        },
      }
    }

    case 'relic': {
      const newRelic = rollNewEntity(relicIds, availableEntities =>
        getRandomEntity(availableEntities, seed)
      )

      return {
        ...battle,
        rewards: {
          treasure: [],
          mage: undefined,
          supplyIds: [newRelic],
        },
      }
    }

    case 'spell': {
      const newSpell = rollNewEntity(spellIds, availableEntities =>
        getRandomEntity(availableEntities, seed)
      )

      return {
        ...battle,
        rewards: {
          treasure: [],
          mage: undefined,
          supplyIds: [newSpell],
        },
      }
    }

    case 'treasure1': {
      const newTreasure = rollNewEntity(treasure1Ids, availableEntities =>
        getRandomEntity(availableEntities, seed)
      )

      return {
        ...battle,
        rewards: {
          treasure: [newTreasure],
          mage: undefined,
          supplyIds: [],
        },
      }
    }

    case 'treasure2': {
      const newTreasure = rollNewEntity(treasure2Ids, availableEntities =>
        getRandomEntity(availableEntities, seed)
      )

      return {
        ...battle,
        rewards: {
          treasure: [newTreasure],
          mage: undefined,
          supplyIds: [],
        },
      }
    }

    case 'treasure3': {
      const newTreasure = rollNewEntity(treasure3Ids, availableEntities =>
        getRandomEntity(availableEntities, seed)
      )

      return {
        ...battle,
        rewards: {
          treasure: [newTreasure],
          mage: undefined,
          supplyIds: [],
        },
      }
    }

    default: {
      return { ...battle }
    }
  }
}
