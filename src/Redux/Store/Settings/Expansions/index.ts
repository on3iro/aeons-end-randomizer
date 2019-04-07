import { combineReducers } from 'redux-loop'

import config from '../../../../config'
import * as Selected from './Selected'

///////////
// STATE //
///////////

export type State = {
  Selected: Selected.State
}

export const initialState = {
  Selected: Selected.initialState,
}

/////////////
// ACTIONS //
/////////////

export type Action = Selected.Action

export const actions = {
  Selected: Selected.actions,
}

/////////////
// REDUCER //
/////////////

export const Reducer = combineReducers<State, Action>({
  Selected: Selected.Reducer,
})

///////////////
// SELECTORS //
///////////////

const getExpansionNamesByType = (type: string) =>
  config.EXPANSIONS.filter(expansion => config.DATA[expansion].type === type)

export const selectors = {
  getStandaloneExpansions: getExpansionNamesByType('standalone').sort(),
  getMiniExpansions: getExpansionNamesByType('mini').sort(),
  getPromos: getExpansionNamesByType('promo').sort((a, b) => {
    const promoA = config.DATA[a].name
    const promoB = config.DATA[b].name

    if (promoA < promoB) {
      return -1
    }

    if (promoA > promoB) {
      return 1
    }

    return 0
  }),
  Selected: Selected.selectors,
}
