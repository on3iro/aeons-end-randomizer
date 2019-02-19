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
