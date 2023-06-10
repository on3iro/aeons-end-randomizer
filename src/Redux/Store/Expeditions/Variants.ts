import { createSelector } from 'reselect'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import { Variant, VariantId, variants, variantIds } from 'aer-types/types'

///////////
// STATE //
///////////

export type State = {
  variants: {
    [id: string]: Variant
  }
  variantIds: VariantId[]
}

export const initialState: State = {
  variants: variants,
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
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
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

export type VariantsStateSlice = {
  Expeditions: {
    Variants: {
      variants: {
        [id: string]: Variant
      }
    }
  }
}

export type VariantIdsStateSlice = {
  Expeditions: {
    Variants: {
      variantIds: VariantId[]
    }
  }
}

const getVariants = (state: VariantsStateSlice) =>
  state.Expeditions.Variants.variants

const getVariantId = (_: unknown, props: { variantId?: string }) =>
  props.variantId

const getVariantById = createSelector(
  [getVariants, getVariantId],
  (variants, id) => (id ? variants[id] : undefined)
)

const getVariantIds = (state: VariantIdsStateSlice) =>
  state.Expeditions.Variants.variantIds

const getVariantList = createSelector(
  [getVariantIds, getVariants],
  (ids, variants) => ids.map((id) => variants[id])
)

export const selectors = {
  getVariants,
  getVariantIds,
  getVariantList,
  getVariantById,
}
