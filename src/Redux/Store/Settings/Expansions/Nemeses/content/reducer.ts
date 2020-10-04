import { LoopReducer } from 'redux-loop'

import AERData from 'aer-data/src/index'

import { Action, State } from './types'

export const initialState: State = {
  ENG: AERData.normalizedData.ENG.nemeses,
  FR: AERData.normalizedData.FR.nemeses,
  PL: AERData.normalizedData.PL.nemeses,
  DE: AERData.normalizedData.DE.nemeses,
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
