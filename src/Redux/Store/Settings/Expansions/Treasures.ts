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
  treasures: types.Treasures
  treasureIds: string[]
}>

export const initialState: State = {
  treasures: config.NORMALIZEDDATA.treasures,
  treasureIds: config.NORMALIZEDDATA.treasureIds,
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

const getTreasures = (state: RootState) =>
  state.Settings.Expansions.Treasures.treasures

const getExpansionId = (_: any, id: string) => id

const getTreasureIds = (state: RootState) =>
  state.Settings.Expansions.Treasures.treasureIds

const getTreasureIdsByExpansionId = createSelector(
  [getTreasures, getTreasureIds, getExpansionId],
  (treasures, treasureIds, expansionId) =>
    treasureIds.filter(
      treasureId => treasures[treasureId].expansion === expansionId
    )
)

const getTreasuresByExpansionId = createSelector(
  [getTreasures, getTreasureIdsByExpansionId],
  (treasures, treasureIds) =>
    treasureIds.map(treasureId => treasures[treasureId])
)

const getTreasureList = createSelector(
  [getTreasures, getTreasureIds],
  (treasures, treasureIds) => treasureIds.map(id => treasures[id])
)

export const selectors = {
  getTreasures,
  getTreasureIds,
  getTreasureIdsByExpansionId,
  getTreasuresByExpansionId,
  getTreasureList,
}
