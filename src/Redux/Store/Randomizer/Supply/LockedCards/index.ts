import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'
import * as types from 'aer-types/types'

///////////
// STATE //
///////////

export type LockedCard = {
  id: string
  blueprintId: string | number
  type: types.CardType
  cost: number
}

export type State = ReadonlyArray<LockedCard>

export const initialState: State = []

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  LOCK_TOGGLE = 'Supply/LockedCards/LOCK_TOGGLE',
}

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  toggleLock: (lockedCard: LockedCard) =>
    createAction(ActionTypes.LOCK_TOGGLE, lockedCard),
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
    case ActionTypes.LOCK_TOGGLE: {
      if (
        state.findIndex((lockedCard) => lockedCard.id === action.payload.id) >
        -1
      ) {
        return state.filter((lockedCard) => lockedCard.id !== action.payload.id)
      } else {
        return [...state, action.payload]
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

export type LockedCardsStateSlice = {
  Randomizer: {
    Supply: {
      LockedCards: State
    }
  }
}

const getLockedCards = (state: LockedCardsStateSlice) =>
  state.Randomizer.Supply.LockedCards

export const selectors = {
  getLockedCards,
}
