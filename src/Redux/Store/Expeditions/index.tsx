import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import { RootState } from '../'
import { Expeditions } from '../../../types'

const EXPEDITIONS_DB_KEY = 'expeditions-0.1'

///////////
// STATE //
///////////

export type State = {
  expeditions: Expeditions
}

export const initialState: State = {
  expeditions: [],
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  CREATE_EXPEDITION = 'Expeditions/CREATE_EXPEDITIONS',
  SET_TO_DB = 'Expeditions/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Expeditions/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Expeditions/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Expeditions/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Expeditions/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Expeditions/FETCH_FROM_DB_FAILURE',
}

export const actions = {
  createExpedition: (id: string, name: string) =>
    createAction(ActionTypes.CREATE_EXPEDITION, { id, name }),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: State) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: (error: Object) =>
    createAction(ActionTypes.FETCH_FROM_DB_FAILURE, error),
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
    case ActionTypes.CREATE_EXPEDITION: {
      const { expeditions } = state

      console.log(action.payload)
      console.log(expeditions.length)

      const newState = {
        ...state,
        expeditions: [...expeditions, action.payload],
      }

      return loop(
        newState,
        Cmd.run<Action>(setToDb, {
          args: [EXPEDITIONS_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run<Action>(getFromDb, {
          args: [EXPEDITIONS_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      return action.payload || state
    }

    case ActionTypes.FETCH_FROM_DB_FAILURE: {
      return state
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getExpeditions = (state: RootState) => state.Expeditions.expeditions

export const selectors = {
  getExpeditions,
}
