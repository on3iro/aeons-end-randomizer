import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import { ICreature } from '../../../../types'
import { RootState } from '../../'
import {
  createSlotList,
  createMageList,
  getRandomEntity,
} from '../../../helpers'

import { MageCount } from '../Count'

///////////
// STATE //
///////////

export type State = ReadonlyArray<ICreature>
export const initialState: State = []

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET_RANDOM = 'Mages/Recruited/SET_RANDOM',
}

export const actions = {
  setRandomMages: (
    availableMages: ReadonlyArray<ICreature>,
    count: MageCount
  ) => createAction(ActionTypes.SET_RANDOM, { availableMages, count }),
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
      const { availableMages, count } = action.payload
      const length = Math.min(availableMages.length, count)
      const slotList = createSlotList(length)
      const { result } = createMageList(
        availableMages,
        slotList,
        getRandomEntity
      )
      return result
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getMages = (state: RootState) => state.Mages.Recruited

export const selectors = {
  getMages,
}
