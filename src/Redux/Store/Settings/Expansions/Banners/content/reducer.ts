import { LoopReducer } from 'redux-loop'

import AERData from 'aer-data/src/index'

import { Action, State } from './types'

export const initialState: State = {
  ENG: AERData.normalizedData.ENG.banners,
  FR: AERData.normalizedData.FR.banners,
  PL: AERData.normalizedData.PL.banners,
  DE: AERData.normalizedData.DE.banners,
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
