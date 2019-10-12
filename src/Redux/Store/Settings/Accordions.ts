import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { RootState } from '../'
import { LoopReducer } from 'redux-loop'

///////////
// STATE //
///////////

export type State = {
  [id: string]: boolean
}
export const initialState: State = {
  expansions: false,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE = 'Settings/Accordions/TOGGLE',
  NOOP = 'NOOP',
}

export const actions = {
  toggle: (id: string) => createAction(ActionTypes.TOGGLE, id),
  noOp: () => createAction(ActionTypes.NOOP),
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
    case ActionTypes.TOGGLE: {
      const id = action.payload

      return {
        ...state,
        [id]: !state[id],
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

const getAccordionStateById = (state: RootState, id: string) =>
  state.Settings.Accordions[id]

export const selectors = {
  getAccordionStateById,
}
