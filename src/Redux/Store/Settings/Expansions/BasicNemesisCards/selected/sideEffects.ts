import { get as getFromDb, set as setToDb } from 'idb-keyval'
import { BASIC_NEMESIS_CARDS_DB_KEY } from '../constants'
import { State } from './types'

export const getSelectedBasicNemesisCardsFromDB = () =>
  getFromDb(BASIC_NEMESIS_CARDS_DB_KEY)

export const setSelectedBasicNemesisCardsToDB = (
  selectedBasicNemesisCards: State
) => setToDb(BASIC_NEMESIS_CARDS_DB_KEY, selectedBasicNemesisCards)
