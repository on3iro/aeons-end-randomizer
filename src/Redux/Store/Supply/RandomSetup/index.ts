import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'
import { createSelector } from 'reselect'

import { Slot, ICard } from '../../../../types'
import { createSlotList } from '../../../helpers'
import config from '../../../../config'
import { RootState } from '../../'
import { createSupply } from './helpers'
import * as SupplySelection from '../Selection'

///////////
// STATE //
///////////

export type State = Readonly<{
  Cards: ReadonlyArray<Slot | ICard>
}>
export const initialState: State = {
  Cards: createSlotList(config.DEFAULTSUPPLYCOUNT),
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
    expansions: ReadonlyArray<string>,
    tiles: ReadonlyArray<Slot>
  ) => createAction(ActionTypes.CREATE, { expansions, tiles }),
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
      const { expansions, tiles } = action.payload
      const { gems, relics, spells } = createSupply(expansions, tiles)
      return {
        ...state,
        Cards: [...gems.result, ...relics.result, ...spells.result],
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

const getCards = (state: RootState) => state.Supply.RandomSetup.Cards

export const selectors = {
  getCards,
}
