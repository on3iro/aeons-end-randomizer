import { LoopReducer } from 'redux-loop'

import AERData from 'aer-data'

import { Action, State } from './types'

export const initialState: State = {
  ENG: AERData.normalizedData.ENG.mages,
  FR: AERData.normalizedData.FR.mages,
  PL: AERData.normalizedData.PL.mages,
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
