import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import { RootState } from '../../'
import { ITurnOrderCard } from '../../../../types'
import { shuffleDeck } from '../../../helpers'

export const TURNORDER_GAME_DB_KEY = '2-4-turnOrderGameState'

/////////////
// HELPERS //
/////////////

const newStateWithDBWrite = (newState: State) => {
  return loop(
    newState,
    Cmd.run(setToDb, {
      args: [TURNORDER_GAME_DB_KEY, newState],
      successActionCreator: actions.setTurnOrderToDbSuccess,
      failActionCreator: actions.setTurnOrderToDbFailure,
    })
  )
}

///////////
// STATE //
///////////

export type State = {
  deck: Array<ITurnOrderCard>
  discard: Array<ITurnOrderCard>
  started: boolean
}
export const initialState: State = {
  deck: [],
  discard: [],
  started: false,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  INIT = 'TurnOrder/ActiveGame/INIT',
  DRAW = 'TurnOrder/ActiveGame/DRAW',
  NEW_ROUND = 'TurnOrder/ActiveGame/NEW_ROUND',
  ADD_TO_TOP = 'TurnOrder/ActiveGame/ADD_TO_TOP',
  ADD_TO_BOTTOM = 'TurnOrder/ActiveGame/ADD_TO_BOTTOM',
  SHUFFLE_INTO_DECK = 'TurnOrder/ActiveGame/SHUFFLE_INTO_DECK',
  SET_TURNORDER_TO_DB_SUCCESS = 'TurnOrder/ActiveGame/SET_TURNORDER_TO_DB_SUCCESS',
  SET_TURNORDER_TO_DB_FAILURE = 'TurnOrder/ActiveGame/SET_TURNORDER_TO_DB_FAILURE',
  START_GAME = 'TurnOrder/ActiveGame/START_GAME',
  RESET_GAME = 'TurnOrder/ActiveGame/RESET_GAME',
  FETCH_FROM_DB = 'TurnOrder/ActiveGame/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'TurnOrder/ActiveGame/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'TurnOrder/ActiveGame/FETCH_FROM_DB_FAILURE',
}

export const actions = {
  noOp: () => createAction('NOOP'),
  init: (state: State) => createAction(ActionTypes.INIT, state),
  draw: () => createAction(ActionTypes.DRAW),
  newRound: (turnOrderCards: ITurnOrderCard[]) =>
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
  startGame: (turnOrderCards: ITurnOrderCard[]) =>
    createAction(ActionTypes.START_GAME, shuffleDeck(turnOrderCards)),
  resetGame: () => createAction(ActionTypes.RESET_GAME),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (state: State) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, state),
  fetchFromDBFailed: () => createAction(ActionTypes.FETCH_FROM_DB_FAILURE),
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
    case ActionTypes.INIT: {
      return action.payload
    }

    case ActionTypes.DRAW: {
      const { deck } = state

      if (deck.length === 0) return state

      const cardDrawn = deck[deck.length - 1]

      // If the card we have drawn is an alternating card we do not show this
      // turn, we draw another card
      const additionalCard =
        cardDrawn.display === false ? deck[deck.length - 2] : undefined

      const newState = {
        ...state,
        deck: deck.filter(
          card => card.id !== cardDrawn.id && card.id !== additionalCard?.id
        ),
        discard: additionalCard
          ? [additionalCard, cardDrawn, ...state.discard]
          : [cardDrawn, ...state.discard],
      }

      return newStateWithDBWrite(newState)
    }

    case ActionTypes.NEW_ROUND: {
      const adjustedDeck = action.payload.deck.map(card => {
        // We make sure we change the display of alternating cards
        // each round
        if (card.alternate) {
          return { ...card, display: !card.display }
        }

        return card
      })

      const newState = {
        ...state,
        deck: adjustedDeck,
        discard: [],
      }

      return newStateWithDBWrite(newState)
    }

    case ActionTypes.ADD_TO_TOP: {
      const cardId = action.payload
      const cardToAdd = state.discard.find(card => card.id === cardId)

      if (!cardToAdd) return state

      const newState = {
        ...state,
        deck: [...state.deck, cardToAdd],
        discard: state.discard.filter(card => card.id !== cardId),
      }

      return newStateWithDBWrite(newState)
    }

    case ActionTypes.ADD_TO_BOTTOM: {
      const cardId = action.payload
      const cardToAdd = state.discard.find(card => card.id === cardId)

      if (!cardToAdd) return state

      const newState = {
        ...state,
        deck: [cardToAdd, ...state.deck],
        discard: state.discard.filter(card => card.id !== cardId),
      }

      return newStateWithDBWrite(newState)
    }

    case ActionTypes.SHUFFLE_INTO_DECK: {
      const cardId = action.payload
      const cardToShuffle = state.discard.find(card => card.id === cardId)

      if (!cardToShuffle) return state

      const newDeck = [...state.deck, cardToShuffle]
      // FIXME shuffling should happen inside the action not the reducer!!!
      const shuffledDeck = shuffleDeck(newDeck)

      const newState = {
        ...state,
        deck: shuffledDeck,
        discard: state.discard.filter(card => card.id !== cardId),
      }

      return newStateWithDBWrite(newState)
    }

    case ActionTypes.START_GAME: {
      const adjustedDeck = action.payload.map(card => {
        // For each card which is supposed to be alternating
        // (only displayn every other round), we add a 'display' flag
        if (card.alternate) {
          return { ...card, display: true }
        }

        return card
      })

      return newStateWithDBWrite({
        started: true,
        deck: adjustedDeck,
        discard: [],
      })
    }

    case ActionTypes.RESET_GAME: {
      return newStateWithDBWrite({
        started: false,
        deck: [],
        discard: [],
      })
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run(getFromDb, {
          args: [TURNORDER_GAME_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      // If the fetched state somehow is undefined just take the current state instead
      const newState = action.payload || state
      return newState
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getDeck = (state: RootState) => state.TurnOrder.ActiveGame.deck
const getDiscard = (state: RootState) => state.TurnOrder.ActiveGame.discard
const getHasStarted = (state: RootState) => state.TurnOrder.ActiveGame.started

export const selectors = {
  getDeck,
  getDiscard,
  getHasStarted,
}
