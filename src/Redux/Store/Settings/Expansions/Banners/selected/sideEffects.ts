import { get as getFromDb, set as setToDb } from 'idb-keyval'
import { BANNERS_DB_KEY } from '../constants'
import { State } from './types'

export const getSelectedBannersFromDB = () => getFromDb(BANNERS_DB_KEY)

export const setSelectedBannersToDB = (selectedBanners: State) =>
  setToDb(BANNERS_DB_KEY, selectedBanners)
