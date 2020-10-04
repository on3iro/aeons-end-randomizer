import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import * as types from 'aer-types/types'

import { getRandomEntity } from 'Redux/helpers'

///////////
// STATE //
///////////

export type State = Readonly<{ id: string }> | undefined
export const initialState: State = undefined

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET_RANDOM = 'Nemesis/SET_RANDOM',
}

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  setRandomNemesis: (
    availableNemeses: ReadonlyArray<types.Nemesis>,
    seed?: types.Seed
  ) =>
    createAction(ActionTypes.SET_RANDOM, {
      nemesis: getRandomEntity(availableNemeses, seed),
    }),
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
    case ActionTypes.SET_RANDOM: {
      return {
        id: action.payload.nemesis.entity.id,
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

export type NemesisStateSlice = {
  Randomizer: {
    Nemesis: State
  }
}

const getNemesis = (state: NemesisStateSlice) => state.Randomizer.Nemesis

export const selectors = {
  getNemesis,
}
