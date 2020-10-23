import { get as getFromDb, set as setToDb } from 'idb-keyval'
import { TREASURES_DB_KEY } from '../constants'
import { State } from './types'

export const getSelectedTreasuresFromDB = () => getFromDb(TREASURES_DB_KEY)

export const setSelectedTreasuresToDB = (selectedTreasures: State) =>
  setToDb(TREASURES_DB_KEY, selectedTreasures)
