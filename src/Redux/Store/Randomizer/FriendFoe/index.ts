import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import * as types from 'aer-types/types'

import { getRandomEntity, createIdList, createArrayWithDefaultValues } from 'Redux/helpers'
import { PlayerCount } from 'aer-types/types/data'

///////////
// STATE //
///////////

export type State = Readonly<{ friend?: string, foe?: string, banners?: string[] }>
export const initialState: State = {}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET_RANDOM_FRIEND = 'FriendFoe/SET_RANDOM_FRIEND',
  SET_RANDOM_FOE = 'FriendFoe/SET_RANDOM_FOE',
  SET_RANDOM_BANNERS = 'FriendFoe/SET_RANDOM_BANNERS',
}

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  setRandomFriend: (
    availableFriends: ReadonlyArray<types.Friend>,
    seed?: types.Seed
  ) =>
    createAction(ActionTypes.SET_RANDOM_FRIEND, {
      friend: getRandomEntity(availableFriends, seed),
    }),
  setRandomFoe: (
    availableFoes: ReadonlyArray<types.Foe>,
    seed?: types.Seed
  ) =>
    createAction(ActionTypes.SET_RANDOM_FOE, {
      foe: getRandomEntity(availableFoes, seed),
    }),
  setRandomBanners: (
    availableBanners: ReadonlyArray<types.ICard>,
    playerCount: PlayerCount,
    seed?: types.Seed
  ) => {
    const length = Math.min(availableBanners.length, playerCount + 2)
    const slotList = createArrayWithDefaultValues(length, 'EMPTY')
    const banners = createIdList(availableBanners.map((x: types.ICard) => x.id), slotList, getRandomEntity, seed).result
    return createAction(ActionTypes.SET_RANDOM_BANNERS, { banners })
  },
}

export type Action = ActionsUnion<typeof actions>

/////////////
// REDUCER //
/////////////

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.SET_RANDOM_FRIEND: {
      return {
        ...state,
        friend: action.payload.friend.entity.id,
      }
    }
    case ActionTypes.SET_RANDOM_FOE: {
      return {
        ...state,
        foe: action.payload.foe.entity.id,
      }
    }
    case ActionTypes.SET_RANDOM_BANNERS: {
      return {
        ...state,
        banners: action.payload.banners
      }
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

export type FriendFoeStateSlice = {
  Randomizer: {
    FriendFoe: State
  }
}

const getFriend = (state: FriendFoeStateSlice) => state.Randomizer.FriendFoe.friend
const getFoe = (state: FriendFoeStateSlice) => state.Randomizer.FriendFoe.foe
const getBanners = (state: FriendFoeStateSlice) => state.Randomizer.FriendFoe.banners

export const selectors = {
  getFriend,
  getFoe,
  getBanners,
}
