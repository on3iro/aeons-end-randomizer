import { LoopReducer } from 'redux-loop'

import AERData from 'aer-data/src/index'

import { Action, State } from './types'

export const initialState: State = {
  ENG: AERData.normalizedData.ENG.foes,
  FR: AERData.normalizedData.FR.foes,
  PL: AERData.normalizedData.PL.foes,
  DE: AERData.normalizedData.DE.foes,
}

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
