import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import config from '../../../../config'
import * as types from '../../../../types'
import { RootState } from '../../'

///////////
// STATE //
///////////

export type State = Readonly<{
  Selected: types.IMarketSetup
}>
export const initialState: State = {
  // FIXME we should ensure with typescript, that the 'default: true' property is not
  // optional for default state here
  Selected: config.MARKETSETUPS['random'],
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SELECT_SETUP = 'Supply/Selection/SELECT_SETUP',
}

export const actions = {
  noOp: () => createAction('NOOP'),
  selectSetup: (setup: Readonly<types.IMarketSetup>) =>
    createAction(ActionTypes.SELECT_SETUP, setup),
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
    case ActionTypes.SELECT_SETUP: {
      return {
        ...state,
        Selected: action.payload,
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

const getSelectedSetup = (state: RootState) => state.Supply.Selection.Selected

export const selectors = {
  getSelectedSetup,
}
