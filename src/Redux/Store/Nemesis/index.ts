import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import { ICreature } from '../../../types'
import { RootState } from '../'
import { getListOfAvailableEntity, getRandomEntity } from '../../helpers'

///////////
// STATE //
///////////

export type State = Readonly<ICreature> | undefined
export const initialState: State = undefined

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET_RANDOM = 'Nemesis/SET_RANDOM',
}

export const actions = {
  setRandomNemesis: (expansions: ReadonlyArray<string>) =>
    createAction(ActionTypes.SET_RANDOM, expansions),
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
      const expansions = action.payload
      const availableNemeses = getListOfAvailableEntity(expansions, 'nemeses')
      return getRandomEntity(availableNemeses)
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getNemesis = (state: RootState) => state.Nemesis

export const selectors = {
  getNemesis,
}
