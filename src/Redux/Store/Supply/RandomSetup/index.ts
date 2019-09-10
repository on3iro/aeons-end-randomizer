import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import config from '../../../../config'
import { RootState } from '../../'
import { createSupply } from './helpers'
import * as SupplySelection from '../Selection'
import * as types from '../../../../types'

/////////////
// HELPERS //
/////////////

const byCost = (a: types.MarketTile, b: types.MarketTile) => {
  if (!a.cost) {
    return -1
  }

  if (!b.cost) {
    return 1
  }

  if (a.cost < b.cost) {
    return -1
  }

  if (a.cost > b.cost) {
    return 1
  }

  return 0
}

///////////
// STATE //
///////////

export type State = Readonly<{
  Tiles: ReadonlyArray<types.MarketTile>
}>

// FIXME state duplication (see Supply/Selection/index.ts)
export const initialState: State = {
  Tiles: config.MARKETSETUPS['random'].tiles,
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

export type Action = ActionsUnion<typeof actions> | SupplySelection.Action

/////////////
// REDUCER //
/////////////

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case SupplySelection.ActionTypes.SELECT_SETUP:
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
