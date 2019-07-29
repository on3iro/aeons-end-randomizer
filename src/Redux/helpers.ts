import config from '../config'
import * as types from '../types'

export const createSlotList = (
  amount: number
): Array<types.IEmptyBluePrint> => {
  return Array.from(
    { length: amount },
    (): types.IEmptyBluePrint => ({ type: 'EMPTY', operation: 'NoOp' })
  )
}

/**
 * Collects lists of entities (like "cards", "mages", "nemeses") for each
 * set the user has configured inside the application settings and combines them into one.
 * Example:
 *  const selSets = [ "AE", "WE" ]
 *
 *  getListOfAvailableEntity(selSets, "mages") // => [ {...}, ...]
 */
export const getListOfAvailableEntity = (
  selectedSets: ReadonlyArray<string>,
  entity: types.EntityType
) =>
  selectedSets.reduce(
    (
      acc: Array<types.ICard | types.ICreature>,
      expansion: string
    ): Array<types.ICard | types.ICreature> => {
      return [...acc, ...config.DATA[expansion][entity]]
    },
    []
  )

export const isCardArray = (
  entityList: Array<types.ICard | types.ICreature>
): entityList is Array<types.ICard> => {
  return (entityList[0] as types.ICard).name !== undefined
}

// TODO Refactor turnorder cards and mages (code duplication)
type TurnOrderListReductionResult = {
  availableCards: types.ITurnOrderCard[]
  result: types.ITurnOrderCard[]
}

export const createTurnOrderCardList = (
  availableCards: types.ITurnOrderCard[],
  slots: types.ITurnOrderCard[],
  getEntity: <T>(list: Array<T>) => T
): TurnOrderListReductionResult => {
  const result = slots.reduce(
    (
      acc: TurnOrderListReductionResult,
      slot: types.ITurnOrderCard,
      i: number
    ) => {
      // If no entity is left, simply return the actual empty slot
      const card = getEntity(acc.availableCards) || slot

      // Make sure each entity will only be added to the result list once
      const remainingCards = acc.availableCards.filter(
        entity => entity.id !== card.id
      )

      return {
        availableCards: remainingCards,
        result: [...acc.result, card],
      }
    },
    { availableCards, result: [] }
  )

  return result
}

type MageListReductionResult = {
  availableMages: types.ICreature[]
  result: types.ICreature[]
}

export const createMageList = (
  availableMages: types.ICreature[],
  slots: Array<types.Slot>,
  getEntity: <T>(list: Array<T>) => T
): MageListReductionResult => {
  const result = slots.reduce(
    (acc: MageListReductionResult, slot: types.Slot, i: number) => {
      // If no entity is left, simply return the actual empty slot
      const mage = getEntity(acc.availableMages) || slot

      // Make sure each entity will only be added to the result list once
      const remainingMages = acc.availableMages.filter(
        entity => entity.id !== mage.id
      )

      return {
        availableMages: remainingMages,
        result: [...acc.result, mage],
      }
    },
    { availableMages, result: [] }
  )

  return result
}

export const shuffleDeck = (
  deck: types.ITurnOrderCard[]
): types.ITurnOrderCard[] => {
  return createTurnOrderCardList(deck, deck, getRandomEntity).result
}

/**
 * Gets a random value from a list. (The wording of entities is just used for semantic context)
 */
export const getRandomEntity = <E>(availableEntities: Array<E>) =>
  availableEntities[Math.floor(Math.random() * availableEntities.length)]

export const getOperationString = (
  operation: types.Operation,
  values?: number[],
  threshold?: number
) => {
  if (operation === 'OR' && values) {
    return values.join('/')
  }

  const thresholdValue = threshold ? threshold : ''

  return `${operation} ${thresholdValue}`
}
