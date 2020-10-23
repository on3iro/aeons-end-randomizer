import { get as getFromDb, set as setToDb } from 'idb-keyval'
import { MAGES_DB_KEY } from '../constants'
import { State } from './types'

export const getSelectedMagesFromDB = () => getFromDb(MAGES_DB_KEY)

export const setSelectedMagesToDB = (selectedMages: State) =>
  setToDb(MAGES_DB_KEY, selectedMages)
