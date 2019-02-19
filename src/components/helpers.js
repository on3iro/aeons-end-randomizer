import config from '../config'

export const createSlotList = (amount) => {
    return Array.from({ length: amount }, () => "EMPTY");
}

export const getListOfAvailableEntity = (selectedSets, entity) => selectedSets.reduce(
  (acc, set) => {
    return [ ...acc, ...config.DATA[set][entity] ]
  },[]
)

export const getRandomEntity = (availableEntities) => availableEntities[Math.floor(Math.random() * availableEntities.length)]

export const createEntityList = (availableEntities, slotList) => {
  const entities = slotList.reduce(
    (acc, slot, i) => {
      const last = i === slotList.length - 1
      const newEntity = getRandomEntity(acc.availableEntities)

      if (last) {
        return [ ...acc.result, newEntity ]
      }

      const remainingEntitites = acc.availableEntities.filter(
        entity => entity.name !== newEntity.name
      )

      return {
        availableEntities: remainingEntitites,
        result: [ ...acc.result, newEntity]
      }
  }, { availableEntities, result: [] })

  return entities
}
