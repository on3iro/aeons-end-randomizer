import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
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
}

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  toggle: (id: string) => createAction(ActionTypes.TOGGLE, id),
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

export type AccordionStateSlice = {
  Settings: {
    Accordions: {
      [id: string]: boolean
    }
  }
}

const getAccordionStateById = (state: AccordionStateSlice, id: string) =>
  state.Settings.Accordions[id]

export const selectors = {
  getAccordionStateById,
}
