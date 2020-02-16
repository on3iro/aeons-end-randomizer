import * as types from 'types'
import seedrandom from 'seedrandom'
import shortid from 'shortid'

type CardListReduceResult = {
  availableCards: types.ICard[]
  result: types.ICard[]
  seed?: types.Seed
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
  getEntity: types.SeededEntityGetter = getRandomEntity,
  seed?: types.Seed
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

      const cardResult = getEntity(filteredByCost, acc.seed)
      const card = cardResult.entity

      // Make sure each entity will only be added to the result list once
      const remainingCards = acc.availableCards.filter(
        entity => entity.id !== card.id
      )

      return {
        availableCards: remainingCards,
        result: [...acc.result, card],
        seed: cardResult.seed,
      }
    },
    { availableCards, result: [], seed }
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
  seed?: types.Seed
): CardListReduceResult => {
  const cardSlots = tileSetups.filter(({ type }) => type === cardType)
  const availableCardsOfType = availableCards.filter(
    ({ type }) => type === cardType
  )

  return createCardList(availableCardsOfType, cardSlots, getRandomEntity, seed)
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
  seed?: types.Seed
) => {
  const gems = getRandomCardsByType(availableCards, tileSetups, 'Gem', seed)
  const relics = getRandomCardsByType(
    availableCards,
    tileSetups,
    'Relic',
    gems.seed
  )
  const spells = getRandomCardsByType(
    availableCards,
    tileSetups,
    'Spell',
    relics.seed
  )

  return {
    gems: gems.result,
    relics: relics.result,
    spells: spells.result,
    seed: spells.seed,
  }
}

export const createArrayWithDefaultValues = (
  size: number,
  defaultValue: any
) => {
  return Array.from({ length: size }, () => defaultValue)
}

export const createSlotList = (amount: number): Array<types.IEmptyBluePrint> =>
  createArrayWithDefaultValues(amount, { type: 'EMPTY', operation: 'NoOp' })

export const generateListFrom = <T extends types.Entity>(
  availableEntities: Array<T> | ReadonlyArray<T>,
  slots: Array<any>,
  getEntity: types.SeededEntityGetter,
  seed?: types.Seed
): { availableEntities: Array<T>; result: Array<T>; seed: types.Seed } => {
  return slots.reduce(
    (acc, _) => {
      // If no entity is left, simply return the actual empty slot
      const rngResult = getEntity(acc.availableEntities, acc.seed)
      const entity = rngResult.entity

      if (!entity) {
        return { ...acc, seed: rngResult.seed }
      }

      // Make sure each entity will only be added to the result list once
      const remainingEntities = acc.availableEntities.filter(
        (available: types.Entity) => {
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
        seed: rngResult.seed,
      }
    },
    { availableEntities, result: [], seed }
  )
}

export const createTurnOrderCardList = (
  availableCards: types.ITurnOrderCard[],
  slots: types.ITurnOrderCard[],
  getEntity: types.SeededEntityGetter,
  seed?: types.Seed
) => generateListFrom(availableCards, slots, getEntity, seed)

export const shuffleDeck = (
  deck: types.ITurnOrderCard[]
): types.ITurnOrderCard[] => {
  return createTurnOrderCardList(deck, deck, getRandomEntity).result
}

export const createMageList = (
  availableMages: ReadonlyArray<types.Mage>,
  slots: Array<types.Slot>,
  getEntity: types.SeededEntityGetter,
  seed?: types.Seed
) => generateListFrom(availableMages, slots, getEntity, seed)

export const createIdList = (
  availableIds: ReadonlyArray<string>,
  slots: string[],
  getEntity: types.SeededEntityGetter,
  seed?: types.Seed
) => generateListFrom(availableIds, slots, getEntity, seed)

/**
 * Gets a random value from a list. (The wording of entities is just used for semantic context)
 * @param availableEntities: List of entities to pick from
 * @param seed: seed for pseudo randomization, if no seed is provided a new unique
 *  seed will be created everytime the function is run
 */
export const getRandomEntity = <E>(
  availableEntities: ReadonlyArray<E>,
  seed: types.Seed = {
    seed: shortid.generate(),
  }
): {
  entity: E
  seed: types.Seed
} => {
  const rng = seedrandom(seed.seed, { state: seed.state || true })

  return {
    entity: availableEntities[Math.floor(rng() * availableEntities.length)],
    seed: {
      seed: seed.seed,
      state: rng.state(),
    },
  }
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

export const createBasicNemesisCardList = (
  availableBasicNemesisCards: ReadonlyArray<types.BasicNemesisCard>,
  slots: Array<types.Slot>,
  getEntity: types.SeededEntityGetter,
  seed?: types.Seed
) => generateListFrom(availableBasicNemesisCards, slots, getEntity, seed)
