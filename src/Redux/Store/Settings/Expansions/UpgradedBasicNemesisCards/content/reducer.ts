import { LoopReducer } from 'redux-loop'

import AERData from 'aer-data/src/index'

import { Action, State } from './types'

export const initialState: State = {
  ENG: AERData.normalizedData.ENG.upgradedBasicNemesisCards,
  FR: AERData.normalizedData.FR.upgradedBasicNemesisCards,
  PL: AERData.normalizedData.PL.upgradedBasicNemesisCards,
  DE: AERData.normalizedData.DE.upgradedBasicNemesisCards,
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
