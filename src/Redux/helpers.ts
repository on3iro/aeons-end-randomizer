import * as types from '../types'

type CardListReduceResult = {
  availableCards: types.ICard[]
  result: types.ICard[]
}

/**
 * Given a card object and a setupBlueprint this returns either
 * true or false, depending on the cost of the card and the expectation set by
 * the blueprints operation and cost.
 */
const filterByCost = (card: types.ICard, setupBlueprint: types.IBluePrint) => {
  switch (setupBlueprint.operation) {
    case '<': {
      if (!setupBlueprint.threshold) return true
      return card.cost < setupBlueprint.threshold
    }
    case '>': {
      if (!setupBlueprint.threshold) return true
      return card.cost > setupBlueprint.threshold
    }
    case '<=': {
      if (!setupBlueprint.threshold) return true
      return card.cost <= setupBlueprint.threshold
    }
    case '>=': {
      if (!setupBlueprint.threshold) return true
      return card.cost >= setupBlueprint.threshold
    }
    case '=': {
      if (!setupBlueprint.threshold) return true
      return card.cost === setupBlueprint.threshold
    }
    case 'OR': {
      if (!setupBlueprint.values) return true
      return setupBlueprint.values.indexOf(card.cost) !== -1
    }
    default: {
      return true
    }
  }
}

const createCardList = (
  availableCards: types.ICard[],
  blueprints: Array<types.IBluePrint>,
  getEntity: <T>(list: Array<T>) => T
): CardListReduceResult =>
  blueprints.reduce(
    (acc: CardListReduceResult, blueprint: types.IBluePrint) => {
      const filteredByCost = acc.availableCards.filter(card =>
        filterByCost(card, blueprint)
      )

      // Skip blueprint if no compatible card is left
      if (filteredByCost.length <= 0) {
        return acc
      }

      const card = getEntity(filteredByCost)

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

/**
 * Creates a list of randomly selected cards from a given pool of cards by a specific type.
 * The amount of cards generated is determined by the amount of tileSetups matching
 * the given cardType. E.g. if 2 out of 9 tileSetups have the type="Gem" and the
 * specified type is "Gem" as well, a list of two cards will be created.
 *
 * return List<Card>
 */
const getRandomCardsByType = (
  availableCards: ReadonlyArray<types.ICard>,
  tileSetups: ReadonlyArray<types.IBluePrint>,
  cardType: types.CardType
) => {
  const cardSlots = tileSetups.filter(({ type }) => type === cardType)
  const availableCardsOfType = availableCards.filter(
    ({ type }) => type === cardType
  )
  return createCardList(availableCardsOfType, cardSlots, getRandomEntity)
}

/**
 * Creates a supply object, containing gems, relics and spells with meta information.
 * The pool of available cards will be determined by the sets the user has selected
 * inside the application settings. The supply will be created via the blueprint
 * of the given tileSetups.
 *
 * return { gems, relics, spells }
 */
export const createSupply = (
  availableCards: ReadonlyArray<types.ICard>,
  tileSetups: ReadonlyArray<types.IBluePrint>
) => {
  const gems = getRandomCardsByType(availableCards, tileSetups, 'Gem')
  const relics = getRandomCardsByType(availableCards, tileSetups, 'Relic')
  const spells = getRandomCardsByType(availableCards, tileSetups, 'Spell')

  return { gems, relics, spells }
}

// FIXME we should start refactoring this file

export const createArrayWithDefaultValues = (
  size: number,
  defaultValue: any
) => {
  return Array.from({ length: size }, () => defaultValue)
}

export const createSlotList = (amount: number): Array<types.IEmptyBluePrint> =>
  createArrayWithDefaultValues(amount, { type: 'EMPTY', operation: 'NoOp' })

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
    (acc: TurnOrderListReductionResult, slot: types.ITurnOrderCard) => {
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
  availableMages: types.Mage[]
  result: types.Mage[]
}

export const createMageList = (
  availableMages: ReadonlyArray<types.Mage>,
  slots: Array<types.Slot>,
  getEntity: <T>(list: Array<T>) => T
): MageListReductionResult => {
  const result = slots.reduce(
    (acc: MageListReductionResult, slot: types.Slot) => {
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
    { availableMages: [...availableMages], result: [] }
  )

  return result
}

type IdReductionResult = {
  availableIds: string[]
  result: string[]
}

export const createIdList = (
  availableIds: ReadonlyArray<string>,
  slots: string[],
  getEntity: <T>(list: Array<T>) => T
): IdReductionResult => {
  const result = slots.reduce(
    (acc: IdReductionResult, _: string) => {
      if (acc.availableIds.length <= 0) {
        return acc
      }

      const id = getEntity(acc.availableIds)

      // Make sure each entity will only be added to the result list once
      const remainingIds = acc.availableIds.filter(entity => entity !== id)

      return {
        availableIds: remainingIds,
        result: [...acc.result, id],
      }
    },
    { availableIds: [...availableIds], result: [] }
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
export const getRandomEntity = <E>(availableEntities: ReadonlyArray<E>) =>
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
