import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'
import { createSelector } from 'reselect'

import * as types from '../../../../types'
import config from '../../../../config'
import { RootState } from '../..'

///////////
// STATE //
///////////

export type State = Readonly<{
  upgradedBasicNemesisCards: types.UpgradedBasicNemesisCards
  upgradedBasicNemesisCardIds: string[]
}>

export const initialState: State = {
  upgradedBasicNemesisCards: config.NORMALIZEDDATA.upgradedBasicNemesisCards,
  upgradedBasicNemesisCardIds:
    config.NORMALIZEDDATA.upgradedBasicNemesisCardIds,
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

const getUpgradedBasicNemesisCards = (state: RootState) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards.upgradedBasicNemesisCards

const getExpansionId = (_: any, id: string) => id

const getIdList = (_: any, props: { upgradedBasicNemesisIds: string[] }) =>
  props.upgradedBasicNemesisIds

const getUpgradedBasicNemesisCardIds = (state: RootState) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards
    .upgradedBasicNemesisCardIds

const getUpgradedBasicNemesisCardIdsByExpansionId = createSelector(
  [
    getUpgradedBasicNemesisCards,
    getUpgradedBasicNemesisCardIds,
    getExpansionId,
  ],
  (upgradedBasicNemesisCards, upgradedBasicNemesisCardIds, expansionId) =>
    upgradedBasicNemesisCardIds.filter(
      upgradedBasicNemesisCardId =>
        upgradedBasicNemesisCards[upgradedBasicNemesisCardId].expansion ===
        expansionId
    )
)

const getUpgradedBasicNemesisCardsByExpansionId = createSelector(
  [getUpgradedBasicNemesisCards, getUpgradedBasicNemesisCardIdsByExpansionId],
  (upgradedBasicNemesisCards, upgradedBasicNemesisCardIds) =>
    upgradedBasicNemesisCardIds.map(
      upgradedBasicNemesisCardId =>
        upgradedBasicNemesisCards[upgradedBasicNemesisCardId]
    )
)

const getUpgradedBasicNemesisCardList = createSelector(
  [getUpgradedBasicNemesisCards, getUpgradedBasicNemesisCardIds],
  (cards, ids) => ids.map(id => cards[id])
)

export const selectors = {
  getUpgradedBasicNemesisCards,
  getUpgradedBasicNemesisCardIds,
  getUpgradedBasicNemesisCardIdsByExpansionId,
  getUpgradedBasicNemesisCardsByExpansionId,
  getUpgradedBasicNemesisCardList,
}
