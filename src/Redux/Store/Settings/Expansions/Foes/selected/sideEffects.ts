import { get as getFromDb, set as setToDb } from 'idb-keyval'
import { FOES_DB_KEY } from '../constants'
import { State } from './types'

export const getSelectedFoesFromDB = () => getFromDb(FOES_DB_KEY)

export const setSelectedFoesToDB = (selectedFoes: State) =>
  setToDb(FOES_DB_KEY, selectedFoes)
