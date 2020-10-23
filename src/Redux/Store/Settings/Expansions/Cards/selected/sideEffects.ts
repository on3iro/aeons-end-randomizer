import { get as getFromDb, set as setToDb } from 'idb-keyval'
import { CARDS_DB_KEY } from '../constants'
import { State } from './types'

export const getSelectedCardsFromDB = () => getFromDb(CARDS_DB_KEY)

export const setSelectedCardsToDB = (selectedCards: State) =>
  setToDb(CARDS_DB_KEY, selectedCards)
