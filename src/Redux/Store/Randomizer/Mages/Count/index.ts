import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import * as types from 'aer-types/types'

///////////
// STATE //
///////////

export type MageCount = types.PlayerCount
export type State = MageCount
export const initialState: State = 1

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET = 'Mages/Count/SET',
}

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  setCount: (count: MageCount) => createAction(ActionTypes.SET, count),
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
    case ActionTypes.SET: {
      return action.payload
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

export type MagesCountStateSlice = {
  Randomizer: {
    Mages: {
      Count: State
    }
  }
}

const getCount = (state: MagesCountStateSlice) => state.Randomizer.Mages.Count

export const selectors = {
  getCount,
}
