import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'
import { createSelector } from 'reselect'

import config from '../../../../config'
import { ICreature } from '../../../../types'
import { RootState } from '../../'
import {
  createSlotList,
  createMageList,
  getListOfAvailableEntity,
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
  setRandomMages: (expansions: ReadonlyArray<string>, count: MageCount) =>
    createAction(ActionTypes.SET_RANDOM, { expansions, count }),
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
      const { expansions, count } = action.payload
      const availableMages = getListOfAvailableEntity(expansions, 'mages')
      const slotList = createSlotList(count)
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
