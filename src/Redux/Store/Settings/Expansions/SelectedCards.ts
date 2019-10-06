import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import * as types from '../../../../types'
import config from '../../../../config'
import { RootState } from '../..'

const CARDS_DB_KEY = 'cards-1.8'

///////////
// STATE //
///////////

type Cards = {
  [key: string]: types.ICard & { selected: boolean }
}

export type State = Readonly<{
  cards: Cards
  cardIds: string[]
}>

export const initialState: State = {
  cards: config.NORMALIZEDDATA.cardIds.reduce(
    (acc, id) => ({
      ...acc,
      [id]: {
        ...config.NORMALIZEDDATA.cards[id],
        selected: true,
      },
    }),
    {}
  ),
  cardIds: config.NORMALIZEDDATA.cardIds,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_CARD = 'Settings/Expansions/SelectedCards/TOGGLE_CARD',
  SET_TO_DB = 'Settings/Expansions/SelectedCards/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/SelectedCards/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/SelectedCards/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/SelectedCards/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/SelectedCards/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/SelectedCards/FETCH_FROM_DB_FAILURE',
}

export const actions = {
  toggleCard: (id: string) => createAction(ActionTypes.TOGGLE_CARD, id),
  setToDB: (state: State) => createAction(ActionTypes.SET_TO_DB, state),
  setToDBSuccessful: () => createAction(ActionTypes.SET_TO_DB_SUCCESS),
  setToDBFailed: (error: Object) =>
    createAction(ActionTypes.SET_TO_DB_FAILURE, error),
  fetchFromDB: () => createAction(ActionTypes.FETCH_FROM_DB),
  fetchFromDBSuccessful: (selectedCards: string[]) =>
    createAction(ActionTypes.FETCH_FROM_DB_SUCCESS, selectedCards),
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
    case ActionTypes.TOGGLE_CARD: {
      const newState = {
        ...state,
        cards: {
          ...state.cards,
          [action.payload]: {
            ...state.cards[action.payload],
            selected: !state.cards[action.payload].selected,
          },
        },
      }

      const selectedCardsToSave = state.cardIds.filter(
        id => newState.cards[id].selected
      )

      return loop(
        newState,
        Cmd.run<Action>(setToDb, {
          args: [CARDS_DB_KEY, selectedCardsToSave],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run<Action>(getFromDb, {
          args: [CARDS_DB_KEY],
          successActionCreator: actions.fetchFromDBSuccessful,
          failActionCreator: actions.fetchFromDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB_SUCCESS: {
      if (!action.payload) {
        return initialState
      }

      const selectedCards: string[] = action.payload
      const newState = Object.values(state.cards).reduce(
        (acc, card) => ({
          ...acc,
          cards: {
            ...acc.cards,
            [card.id]: {
              ...card,
              selected: selectedCards.includes(card.id),
            },
          },
        }),
        state
      )

      return newState || initialState
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

// All

const getSelectedCardsState = (state: RootState) =>
  state.Settings.Expansions.SelectedCards

const getSelectedCardsLookupObject = (state: RootState) =>
  state.Settings.Expansions.SelectedCards.cards

const getExpansionId = (_: any, id: string) => id

const getCardIdsArray = createSelector(
  [getSelectedCardsState],
  state => state.cardIds
)

const getCardIdsByExpansionId = createSelector(
  [getSelectedCardsState, getCardIdsArray, getExpansionId],
  (state, cardIds, expansionId) =>
    cardIds.filter(cardId => state.cards[cardId].expansion === expansionId)
)

const getCardsByExpansionId = createSelector(
  [getSelectedCardsState, getCardIdsByExpansionId],
  (state, cardIds) => cardIds.map(cardId => state.cards[cardId])
)

const getGemsByExpansionId = createSelector(
  [getCardsByExpansionId],
  cards => cards.filter(card => card.type === 'Gem')
)

const getRelicsByExpansionId = createSelector(
  [getCardsByExpansionId],
  cards => cards.filter(card => card.type === 'Relic')
)

const getSpellsByExpansionId = createSelector(
  [getCardsByExpansionId],
  cards => cards.filter(card => card.type === 'Spell')
)

// Selected

const getSelectedCardIds = createSelector(
  [getSelectedCardsState],
  state => state.cardIds.filter(id => state.cards[id].selected)
)

const getSelectedCards = createSelector(
  [getSelectedCardsState, getSelectedCardIds],
  (state, cardIds) => cardIds.map(cardId => state.cards[cardId])
)

export const selectors = {
  getSelectedCardsLookupObject,
  getSelectedCards,
  getGemsByExpansionId,
  getRelicsByExpansionId,
  getSpellsByExpansionId,
}
