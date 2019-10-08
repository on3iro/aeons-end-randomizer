import { createSelector } from 'reselect'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import { RootState } from '../'
import { Variant, VariantId, variants, variantIds } from '../../../types'

///////////
// STATE //
///////////

export type State = {
  variants: {
    [id: string]: Variant
  }
  selected: VariantId
  variantIds: VariantId[]
}

export const initialState: State = {
  variants: variants,
  selected: 'DEFAULT',
  variantIds,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  UPDATE_SELECTED = 'Expeditions/Variant/UPDATE_SELECTED',
}

export const actions = {
  updateSelected: (id: VariantId) =>
    createAction(ActionTypes.UPDATE_SELECTED, { id }),
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
    case ActionTypes.UPDATE_SELECTED: {
      const { id } = action.payload
      return {
        ...state,
        selected: id,
      }
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getVariants = (state: RootState) => state.Expeditions.Variants.variants
const getSelectedVariantId = (state: RootState) =>
  state.Expeditions.Variants.selected
const getVariantIds = (state: RootState) =>
  state.Expeditions.Variants.variantIds

const getSelectedVariant = createSelector(
  [getVariants, getSelectedVariantId],
  (variants, id) => variants[id]
)

const getVariantList = createSelector(
  [getVariantIds, getVariants],
  (ids, variants) => ids.map(id => variants[id])
)

export const selectors = {
  getVariants,
  getSelectedVariantId,
  getSelectedVariant,
  getVariantIds,
  getVariantList,
}
