import * as types from '../types'
import seedrandom from 'seedrandom'
import shortid from 'shortid'

type CardListReduceResult = {
  availableCards: types.ICard[]
  result: types.ICard[]
}

/**
 * Given a card object and a setupBlueprint this returns either
 * true or false, depending on the cost of the card and the expectation set by
 * the blueprints operation and cost.
 */
export const filterByCost = (
  card: { cost: number },
  setupBlueprint: {
    operation: types.Operation
    threshold?: number
    values?: Array<number>
  }
) => {
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

export const createCardList = (
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
  cardType: types.CardType,
  seed?: string
): CardListReduceResult => {
  const cardSlots = tileSetups.filter(({ type }) => type === cardType)
  const availableCardsOfType = availableCards.filter(
    ({ type }) => type === cardType
  )

  return createCardList(availableCardsOfType, cardSlots, availableCards =>
    getRandomEntity(availableCards, seed)
  )
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
  tileSetups: ReadonlyArray<types.IBluePrint>,
  seed?: string
) => {
  const gems = getRandomCardsByType(availableCards, tileSetups, 'Gem', seed)
  const relics = getRandomCardsByType(availableCards, tileSetups, 'Relic', seed)
  const spells = getRandomCardsByType(availableCards, tileSetups, 'Spell', seed)

  return { gems, relics, spells }
}

export const createArrayWithDefaultValues = (
  size: number,
  defaultValue: any
) => {
  return Array.from({ length: size }, () => defaultValue)
}

export const createSlotList = (amount: number): Array<types.IEmptyBluePrint> =>
  createArrayWithDefaultValues(amount, { type: 'EMPTY', operation: 'NoOp' })

type Entity = { id: string } | string

export const generateListFrom = <T extends Entity>(
  availableEntities: Array<T> | ReadonlyArray<T>,
  slots: Array<any>,
  getEntity: <E extends Entity>(list: Array<E>) => E
): { availableEntities: Array<T>; result: Array<T> } => {
  const result = slots.reduce(
    (acc, _) => {
      // If no entity is left, simply return the actual empty slot
      const entity = getEntity(acc.availableEntities)

      if (!entity) {
        return acc
      }

      // Make sure each entity will only be added to the result list once
      const remainingEntities = acc.availableEntities.filter(
        (available: Entity) => {
          if (typeof available === 'string' && typeof entity === 'string') {
            return available !== entity
          }

          if (typeof available === 'object' && typeof entity === 'object') {
            return available.id !== entity.id
          }

          return true
        }
      )

      return {
        availableEntities: remainingEntities,
        result: [...acc.result, entity],
      }
    },
    { availableEntities, result: [] }
  )

  return result
}

export const createTurnOrderCardList = (
  availableCards: types.ITurnOrderCard[],
  slots: types.ITurnOrderCard[],
  getEntity: <T>(list: Array<T>) => T
) => generateListFrom(availableCards, slots, getEntity)

export const shuffleDeck = (
  deck: types.ITurnOrderCard[]
): types.ITurnOrderCard[] => {
  return createTurnOrderCardList(deck, deck, getRandomEntity).result
}

export const createMageList = (
  availableMages: ReadonlyArray<types.Mage>,
  slots: Array<types.Slot>,
  getEntity: <T>(list: Array<T>) => T
) => generateListFrom(availableMages, slots, getEntity)

export const createIdList = (
  availableIds: ReadonlyArray<string>,
  slots: string[],
  getEntity: <T>(list: Array<T>) => T
) => generateListFrom(availableIds, slots, getEntity)

/**
 * Gets a random value from a list. (The wording of entities is just used for semantic context)
 * @param availableEntities: List of entities to pick from
 * @param seed: seed for pseudo randomization, if no seed is provided a new unique
 *  seed will be created everytime the function is run
 */
export const getRandomEntity = <E>(
  availableEntities: ReadonlyArray<E>,
  seed: string = shortid.generate()
) => {
  const rng = seedrandom(seed)
  return availableEntities[Math.floor(rng() * availableEntities.length)]
}

export const getOperationString = (
  operation: types.Operation,
  values?: number[],
  threshold?: number
) => {
  if (operation === 'NoOp') {
    return ''
  }

  if (operation === 'ANY') {
    return operation
  }

  if (operation === 'OR' && values) {
    return values.join('/')
  }

  const thresholdValue = threshold ? threshold : ''

  return `${operation} ${thresholdValue}`
}
