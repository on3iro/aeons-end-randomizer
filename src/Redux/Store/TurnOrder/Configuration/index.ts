import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import config from '../../../../config'
import { ITurnOrderSetup, Mode } from '../../../../types'
import { RootState } from '../../'
import {
  actions as activeGameActions,
  Action as ActiveGameAction,
} from '../ActiveGame'

const TURNORDER_CONFIG_DB_KEY = 'turnOrderConfig'

/////////////
// HELPERS //
/////////////

const adjustSetup = (mode: Mode, setup: ITurnOrderSetup): ITurnOrderSetup => {
  switch (mode) {
    case 'Maelstrom': {
      return {
        id: setup.id,
        name: setup.name,
        turnOrderCards: setup.turnOrderCards.map(card => {
          return card.id === 'nemesis-1' || card.id === 'blitz'
            ? config.TURNORDERCARDS['maelstrom']
            : card
        }),
      }
    }

    case 'Blitz': {
      return {
        id: setup.id,
        name: setup.name,
        turnOrderCards: setup.turnOrderCards.map(card => {
          return card.id === 'nemesis-1' || card.id === 'maelstrom'
            ? config.TURNORDERCARDS['blitz']
            : card
        }),
      }
    }

    case 'Default':
    default: {
      return setup
    }
  }
}

///////////
// STATE //
///////////

export type State = Readonly<{
  Mode: Mode
  SelectedSetup: ITurnOrderSetup
}>
export const initialState: State = {
  Mode: 'Default',
  SelectedSetup: config.TURNORDERSETUPS['onePlayerThreeToc'],
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  SET_MODE = 'TurnOrder/Configuration/SET_MODE',
  SELECT_SETUP = 'TurnOrder/Configuration/SELECT_SETUP',
  SET_TO_DB = 'TurnOrder/Configuration/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'TurnOrder/Configuration/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'TurnOrder/Configuration/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'TurnOrder/Configuration/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'TurnOrder/Configuration/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'TurnOrder/Configuration/FETCH_FROM_DB_FAILURE',
}

export const actions = {
  noOp: () => createAction('NOOP'),
  setMode: (mode: Mode) => createAction(ActionTypes.SET_MODE, mode),
  selectSetup: (setupId: string) =>
    createAction(ActionTypes.SELECT_SETUP, setupId),
  setToDB: () => createAction(ActionTypes.SET_TO_DB),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: () => createAction(ActionTypes.SET_TO_DB_FAILURE),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: State) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: () => createAction(ActionTypes.FETCH_FROM_DB_FAILURE),
}

export type Action = ActionsUnion<typeof actions>

/////////////
// REDUCER //
/////////////

export const Reducer: LoopReducer<State, Action | ActiveGameAction> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.SET_MODE: {
      const newState = { ...state, Mode: action.payload }
      return loop(
        newState,
        Cmd.run<Action>(setToDb, {
          args: [TURNORDER_CONFIG_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.SELECT_SETUP: {
      const newState = {
        ...state,
        SelectedSetup: config.TURNORDERSETUPS[action.payload],
      }
      return loop(
        newState,
        Cmd.run<Action>(setToDb, {
          args: [TURNORDER_CONFIG_DB_KEY, newState],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run<Action>(getFromDb, {
          args: [TURNORDER_CONFIG_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      // If the fetched state somehow is undefined just take the current state instead
      const newState = action.payload || state
      return loop(
        newState,
        // If we could load the configuration also load the actual
        // turnorder game state
        Cmd.action<ActiveGameAction>(activeGameActions.fetchFromDB())
      )
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getMode = (state: RootState) => state.TurnOrder.Configuration.Mode
const getSelectedSetup = (state: RootState) =>
  state.TurnOrder.Configuration.SelectedSetup
const getConfiguration = createSelector(
  [getMode, getSelectedSetup],
  (mode, selectedSetup) => adjustSetup(mode, selectedSetup)
)
const getAvailableCards = createSelector(
  [getConfiguration],
  config => config.turnOrderCards
)

export const selectors = {
  getMode,
  getSelectedSetup,
  getConfiguration,
  getAvailableCards,
}
