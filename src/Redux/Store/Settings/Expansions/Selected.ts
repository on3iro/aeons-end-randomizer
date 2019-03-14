import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import config from '../../../../config'
import { RootState } from '../../'

///////////
// STATE //
///////////

export type State = Readonly<{ [key: string]: boolean }>
export const initialState: State = config.EXPANSIONS.reduce(
  (acc, set) => ({ ...acc, [set]: false }) , {}
)

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_ALL = 'Settings/Expansions/SelectedExpansions/TOGGLE_ALL',
  TOGGLE_EXPANSION = 'Settings/Expansions/SelectedExpansions/TOGGLE_EXPANSION',
  SET_TO_DB = 'Settings/Expansions/SelectedExpansions/SET_TO_DB',
  SET_TO_DB_SUCCESS ='Settings/Expansions/SelectedExpansions/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE ='Settings/Expansions/SelectedExpansions/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SelectedExpansions/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SelectedExpansions/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SelectedExpansions/FETCH_FROM_DB_FAILURE',
}

export const actions = {
  toggleAll: () => createAction(ActionTypes.TOGGLE_ALL),
  toggleExpansion: (expansion: string) => createAction(ActionTypes.TOGGLE_EXPANSION, expansion),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) => createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: State) => createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: (error: Object) => createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
}

export type Action = ActionsUnion<typeof actions>

/////////////
// REDUCER //
/////////////

const allSetsAreSelected = (state: State) => Object
  .values(state)
  .every(val => val === true)

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ALL: {
      const allSetsSelected = allSetsAreSelected(state)
      const newState = config.EXPANSIONS
        .reduce((acc, set) => ({ ...acc, [set]: !allSetsSelected }), {})

      return loop(
        newState,
        Cmd.run<Action>( setToDb, {
          args: ['sets', newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.TOGGLE_EXPANSION: {
      const newState = { ...state, [action.payload]: !state[action.payload] }
      return loop(
        newState,
        Cmd.run<Action>( setToDb, {
          args: ['sets', newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run<Action>( getFromDb, {
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
          args: ['sets']
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      return action.payload
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getSelectedExpansions = (state: RootState) => state.Settings.Expansions.Selected

const getSelectedExpansionsArray = createSelector(
  [ getSelectedExpansions ],
  (selectedExpansions) => Object
    .keys(selectedExpansions)
    .filter(key => selectedExpansions[key])
)

const getAllSetsSelected = createSelector(
  [ getSelectedExpansions ],
  (selectedExpansions) => allSetsAreSelected(selectedExpansions)
)

const getHasStandaloneSet = createSelector(
  [ getSelectedExpansions ],
  (selectedExpansions) => Object
    .keys(selectedExpansions)
    .some(expansion => config.DATA[expansion].type === "standalone")
)

export const selectors = {
  getSelectedExpansions,
  getSelectedExpansionsArray,
  getAllSetsSelected,
  getHasStandaloneSet,
}
