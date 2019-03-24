import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'
import { createSelector } from 'reselect'

import config from '../../../../config'
import * as types from '../../../../types'
import { RootState } from '../../'

///////////
// STATE //
///////////

export type State = {
  Predefined: types.IMarketSetups
  Custom: types.IMarketSetups
}
export const initialState: State = {
  Predefined: config.MARKETSETUPS,
  Custom: {},
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {}

export const actions = {
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
    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getPredefined = (state: RootState) =>
  state.Settings.SupplySetups.Predefined
const getCustom = (state: RootState) => state.Settings.SupplySetups.Custom
const getCustomAndPredefined = createSelector(
  [getPredefined, getCustom],
  (predefined, custom) => ({ ...predefined, ...custom })
)

const makeGetCustomAndPredefined = () => getCustomAndPredefined

const getActiveSetups = createSelector(
  [getCustomAndPredefined],
  customAndPredefined =>
    Object.values(customAndPredefined).filter(setup => setup.active)
)

export const selectors = {
  getPredefined,
  getCustom,
  getCustomAndPredefined,
  makeGetCustomAndPredefined,
  getActiveSetups,
}
