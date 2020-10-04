import { createAction } from '@martin_hotell/rex-tils'

import * as types from 'aer-types/types'

import { shuffleDeck } from 'Redux/helpers'

import { ActionTypes, State } from './types'

export const actions = {
  noOp: () => createAction('@@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING'),
  init: (state: State) => createAction(ActionTypes.INIT, state),
  draw: () => createAction(ActionTypes.DRAW),
  newRound: (turnOrderCards: types.ITurnOrderCard[]) =>
    createAction(ActionTypes.NEW_ROUND, {
      deck: shuffleDeck(turnOrderCards),
    }),
  addToTop: (cardId: string) => createAction(ActionTypes.ADD_TO_TOP, cardId),
  addToBottom: (cardId: string) =>
    createAction(ActionTypes.ADD_TO_BOTTOM, cardId),
  shuffleIntoDeck: (cardId: string) =>
    createAction(ActionTypes.SHUFFLE_INTO_DECK, cardId),
  setTurnOrderToDbSuccess: () =>
    createAction(ActionTypes.SET_TURNORDER_TO_DB_SUCCESS),
  setTurnOrderToDbFailure: () =>
    createAction(ActionTypes.SET_TURNORDER_TO_DB_FAILURE),
  startGame: (turnOrderCards: types.ITurnOrderCard[]) =>
    createAction(ActionTypes.START_GAME, shuffleDeck(turnOrderCards)),
  resetGame: () => createAction(ActionTypes.RESET_GAME),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: unknown) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: () => createAction(ActionTypes.FETCH_FROM_DB_FAILURE),
}
