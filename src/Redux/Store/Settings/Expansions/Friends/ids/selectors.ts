import { FriendIdsStateSlice } from './types'

const getIds = (state: FriendIdsStateSlice) => state.Settings.Expansions.Friends.ids

export const selectors = {
  getIds,
}
