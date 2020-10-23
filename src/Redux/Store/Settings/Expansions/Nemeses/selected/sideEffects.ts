import { get as getFromDb, set as setToDb } from 'idb-keyval'
import { NEMESES_DB_KEY } from '../constants'
import { State } from './types'

export const getSelectedNemesesFromDB = () => getFromDb(NEMESES_DB_KEY)

export const setSelectedNemesesToDB = (selectedNemeses: State) =>
  setToDb(NEMESES_DB_KEY, selectedNemeses)
