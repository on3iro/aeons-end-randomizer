import { get as getFromDb, set as setToDb } from 'idb-keyval'
import { UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY } from '../constants'
import { State } from './types'

export const getSelectedUpgradedBasicNemesisCardsFromDB = () =>
  getFromDb(UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY)

export const setSelectedUpgradedBasicNemesisCardsToDB = (
  selectedUpgradedBasicNemesisCards: State
) =>
  setToDb(
    UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY,
    selectedUpgradedBasicNemesisCards
  )
