import { get as getFromDb, set as setToDb } from 'idb-keyval'
import { FRIENDS_DB_KEY } from '../constants'
import { State } from './types'

export const getSelectedFriendsFromDB = () => getFromDb(FRIENDS_DB_KEY)

export const setSelectedFriendsToDB = (selectedFriends: State) =>
  setToDb(FRIENDS_DB_KEY, selectedFriends)
