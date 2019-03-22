import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'
import { createSelector } from 'reselect'

import { RootState } from '../../'

///////////
// STATE //
///////////

export type MageCount = 1 | 2 | 3 | 4
export type State = MageCount
export const initialState: State = 1

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET = 'Mages/Count/SET',
}

export const actions = {
  setCount: (count: MageCount) => createAction(ActionTypes.SET, count),
  noOp: () => createAction('NOOP'),
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

const getCount = (state: RootState) => state.Mages.Count

export const selectors = {
  getCount,
}
