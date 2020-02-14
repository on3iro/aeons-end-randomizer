import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import { Nemesis } from 'types'
import { RootState } from 'Redux/Store/'
import { getRandomEntity } from 'Redux/helpers'

///////////
// STATE //
///////////

export type State = Readonly<Nemesis> | undefined
export const initialState: State = undefined

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET_RANDOM = 'Nemesis/SET_RANDOM',
}

export const actions = {
  setRandomNemesis: (availableNemeses: ReadonlyArray<Nemesis>) =>
    createAction(ActionTypes.SET_RANDOM, {
      nemesis: getRandomEntity(availableNemeses),
    }),
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
    case ActionTypes.SET_RANDOM: {
      return action.payload.nemesis
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getNemesis = (state: RootState) => state.Randomizer.Nemesis

export const selectors = {
  getNemesis,
}
