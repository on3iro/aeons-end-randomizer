import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import { Mage } from '../../../../types'
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

export type State = ReadonlyArray<Mage>
export const initialState: State = []

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET_RANDOM = 'Mages/Recruited/SET_RANDOM',
}

export const actions = {
  setRandomMages: (availableMages: ReadonlyArray<Mage>, count: MageCount) => {
    const length = Math.min(availableMages.length, count)
    const slotList = createSlotList(length)
    const mageList = createMageList(availableMages, slotList, getRandomEntity)
      .result

    return createAction(ActionTypes.SET_RANDOM, { mageList })
  },
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
      return action.payload.mageList
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
