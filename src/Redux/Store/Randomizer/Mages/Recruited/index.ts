import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import * as types from 'types'

import { createSlotList, createMageList, getRandomEntity } from 'Redux/helpers'

import { MageCount } from '../Count'

///////////
// STATE //
///////////

export type State = ReadonlyArray<{ id: Readonly<string> }>
export const initialState: State = []

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET_RANDOM = 'Mages/Recruited/SET_RANDOM',
}

export const actions = {
  noOp: () => createAction('NOOP'),
  setRandomMages: (
    availableMages: ReadonlyArray<types.Mage>,
    count: MageCount
  ) => {
    const length = Math.min(availableMages.length, count)
    const slotList = createSlotList(length)
    const mageList = createMageList(availableMages, slotList, getRandomEntity)
      .result
    const mageIds = mageList.map(mage => {
      return {
        id: mage.id,
      }
    })

    return createAction(ActionTypes.SET_RANDOM, { mageIds })
  },
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
      return action.payload.mageIds
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

export type MagesRecruitedStateSlice = {
  Randomizer: {
    Mages: {
      Recruited: State
    }
  }
}

const getMages = (state: MagesRecruitedStateSlice) =>
  state.Randomizer.Mages.Recruited

export const selectors = {
  getMages,
}
