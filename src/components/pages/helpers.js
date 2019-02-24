import config from 'config'

/**
 * Creates a list containing "EMPTY" strings. The length of the list
 * is determined by the amount of empty slots ("amount" parameter)
  */
export const createSlotList = (amount) => {
    return Array.from({ length: amount }, () => "EMPTY");
}

/**
 * Collects lists of entities (like "cards", "mages", "nemeses") for each
 * set the user has configured inside the application settings and combines them into one.
 * Example:
 *  const selSets = {
 *    AE: { mages: [ "a", "b" ] },
 *    WE: { mages: [ "c", "d" ] }
 *  }
 *
 *  getListOfAvailableEntity(selSets, "mages") // => [ "a", "b", "c", "d" ]
  */
export const getListOfAvailableEntity = (selectedSets, entity) => selectedSets.reduce(
  (acc, set) => {
    return [ ...acc, ...config.DATA[set][entity] ]
  },[]
)

/**
  * Gets a random value from a list. (The wording of entities is just used for semantic context)
  */
export const getRandomEntity = (availableEntities) => availableEntities[Math.floor(Math.random() * availableEntities.length)]

/**
 * Given a card object and a setupBlueprint this returns either
 * true or false, depending on the cost of the card and the expectation set by
 * the blueprints operation and cost.
  */
const filterByCost = (card, setupBlueprint) => {
  switch (setupBlueprint.operation) {
    case "<": {
      return card.cost < setupBlueprint.threshold
    }
    case ">": {
      return card.cost > setupBlueprint.threshold
    }
    case "=": {
      return card.cost === setupBlueprint.threshold
    }
    case "OR": {
      return setupBlueprint.values.indexOf(card.cost) !== -1
    }
    default: {
      return true
    }
  }
}

/**
 * Given a list of available entities (e.g. "mages" or "cards") and a list
 * of slots to fill, this returns a new list where each "slot" has been replaced
 * by a random entity from the list of available entities.
 * If the entities have an operation specified, the available entities will
 * be filtered by cost and operation before a random entity is determined. (currently only relevant for cards)
 * Also do note, that each entity is unique and therefore will be removed from the
 * list of available entities for the rest of the function run, as soon as it has been
 * picked for a slot once.
  */
export const createEntityList = (availableEntities, blueprintList) => {
  const entities = blueprintList.reduce(
    (acc, blueprint, i) => {
      const last = i === blueprintList.length - 1

      // Check for cards
      const hasCostOperation = blueprint.operation !== undefined
      const newEntity = hasCostOperation
        ? getRandomEntity(acc.availableEntities.filter(entity => filterByCost(entity, blueprint)))
        : getRandomEntity(acc.availableEntities)

      if (last) {
        return [ ...acc.result, newEntity ]
      }

      // Make sure each entity will only be added to the result list once
      const remainingEntitites = acc.availableEntities.filter(
        entity => entity.id !== newEntity.id
      )

      return {
        availableEntities: remainingEntitites,
        result: [ ...acc.result, newEntity]
      }
  }, { availableEntities, result: [] })

  return entities
}
