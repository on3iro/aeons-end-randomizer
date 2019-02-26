import config from '../../config'
import * as types from '../../config/types'


export const createSlotList = (amount: number): Array<types.IEmptyBluePrint> => {
  return Array.from({ length: amount }, (): types.IEmptyBluePrint => ({ type: "EMPTY", operation: "NoOp" }))
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
  selectedSets: Array<string>,
  entity: types.EntityType
) => selectedSets.reduce(
  (acc: Array<types.ICard | types.ICreature >, expansion: string): Array<any> => {
    return [ ...acc, ...config.DATA[expansion][entity] ]
  },
  []
)

export const isCardArray = (entityList: Array<types.ICard | types.ICreature>): entityList is Array<types.ICard> => {
  return (<types.ICard>entityList[0]).name !== undefined
}

/**
  * Gets a random value from a list. (The wording of entities is just used for semantic context)
  */
export const getRandomEntity = (availableEntities: Array<any>) => availableEntities[Math.floor(Math.random() * availableEntities.length)]