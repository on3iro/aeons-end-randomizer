import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import * as types from '../../../../types'
import { byCost } from '../../../../helpers'
import { RootState } from '../../'
import { createSupply } from '../../../helpers'

///////////
// STATE //
///////////

export type State = Readonly<{
  Tiles: ReadonlyArray<types.ICard> | null
}>

export const initialState: State = {
  Tiles: null,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  RESET = 'Supply/RandomSetup/RESET',
  CREATE = 'Supply/RandomSetup/CREATE',
}

export const actions = {
  noOp: () => createAction('NOOP'),
  resetMarket: () => createAction(ActionTypes.RESET),
  createMarket: (
    availableCards: ReadonlyArray<types.ICard>,
    tiles: ReadonlyArray<types.Slot>
  ) => createAction(ActionTypes.CREATE, { availableCards, tiles }),
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
    case ActionTypes.RESET: {
      return initialState
    }

    case ActionTypes.CREATE: {
      const { availableCards, tiles } = action.payload
      const { gems, relics, spells } = createSupply(availableCards, tiles)
      const gemsByCost = gems.result.sort(byCost)
      const relicsByCost = relics.result.sort(byCost)
      const spellsByCost = spells.result.sort(byCost)

      return {
        ...state,
        Tiles: [...gemsByCost, ...relicsByCost, ...spellsByCost],
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

const getTiles = (state: RootState) => state.Supply.RandomSetup.Tiles

export const selectors = {
  getTiles,
}
