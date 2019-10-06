import { createSelector } from 'reselect'
import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer } from 'redux-loop'

import { RootState } from '../'
import { ExpeditionMode, ModeId, modes, modeIds } from '../../../types'

///////////
// STATE //
///////////

export type State = {
  modes: {
    [id: string]: ExpeditionMode
  }
  selected: ModeId
  modeIds: ModeId[]
}

export const initialState: State = {
  modes: modes,
  selected: 'DEFAULT',
  modeIds,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  UPDATE_SELECTED = 'Expeditions/Mode/UPDATE_SELECTED',
}

export const actions = {
  updateSelected: (id: ModeId) =>
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

const getModes = (state: RootState) => state.Expeditions.Modes.modes
const getSelectedMode = (state: RootState) => state.Expeditions.Modes.selected
const getModeIds = (state: RootState) => state.Expeditions.Modes.modeIds

const getModeList = createSelector(
  [getModeIds, getModes],
  (ids, modes) => ids.map(id => modes[id])
)

export const selectors = {
  getModes,
  getSelectedMode,
  getModeIds,
  getModeList,
}
