import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import * as types from 'types'
import config from 'config'

const UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY = 'upgradedBasicNemesisCards-1.8'

///////////
// STATE //
///////////

type SelectedUpgradedBasicNemesisCards = {
  [key: string]: types.UpgradedBasicNemesisCard & { selected: boolean }
}

export type State = Readonly<{
  upgradedBasicNemesisCards: SelectedUpgradedBasicNemesisCards
  upgradedBasicNemesisCardIds: string[]
}>

export const initialState: State = {
  upgradedBasicNemesisCards: config.NORMALIZEDDATA.upgradedBasicNemesisCardIds.reduce(
    (acc, id) => ({
      ...acc,
      [id]: {
        ...config.NORMALIZEDDATA.upgradedBasicNemesisCards[id],
        selected: true,
      },
    }),
    {}
  ),
  upgradedBasicNemesisCardIds:
    config.NORMALIZEDDATA.upgradedBasicNemesisCardIds,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_CARD = 'Settings/Expansions/UpgradedBasicNemesisCards/TOGGLE_CARD',
  SET_TO_DB = 'Settings/Expansions/UpgradedBasicNemesisCards/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/UpgradedBasicNemesisCards/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/UpgradedBasicNemesisCards/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/UpgradedBasicNemesisCards/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/UpgradedBasicNemesisCards/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/UpgradedBasicNemesisCards/FETCH_FROM_DB_FAILURE',
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
    case ActionTypes.TOGGLE_CARD: {
      const newState = {
        ...state,
        upgradedBasicNemesisCards: {
          ...state.upgradedBasicNemesisCards,
          [action.payload]: {
            ...state.upgradedBasicNemesisCards[action.payload],
            selected: !state.upgradedBasicNemesisCards[action.payload].selected,
          },
        },
      }

      const selectedCardsToSave = state.upgradedBasicNemesisCardIds.filter(
        id => newState.upgradedBasicNemesisCards[id].selected
      )

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY, selectedCardsToSave],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run(getFromDb, {
          args: [UPGRADED_BASIC_NEMESIS_CARDS_DB_KEY],
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
      const newState = Object.values(state.upgradedBasicNemesisCards).reduce(
        (acc, upgradedBasicNemesisCard) => ({
          ...acc,
          upgradedBasicNemesisCards: {
            ...acc.upgradedBasicNemesisCards,
            [upgradedBasicNemesisCard.id]: {
              ...upgradedBasicNemesisCard,
              selected: selectedCards.includes(upgradedBasicNemesisCard.id),
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

export type UpgradedBasicNemesisCardsStateSlice = {
  Settings: {
    Expansions: {
      UpgradedBasicNemesisCards: {
        upgradedBasicNemesisCards: SelectedUpgradedBasicNemesisCards
      }
    }
  }
}

export type UpgradedBasicNemesisCardIdsStateSlice = {
  Settings: {
    Expansions: {
      UpgradedBasicNemesisCards: {
        upgradedBasicNemesisCardIds: string[]
      }
    }
  }
}

// All

const getUpgradedBasicNemesisCards = (
  state: UpgradedBasicNemesisCardsStateSlice
) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards.upgradedBasicNemesisCards

const getExpansionId = (_: unknown, id: string) => id

const getUpgradedBasicNemesisCardIds = (
  state: UpgradedBasicNemesisCardIdsStateSlice
) =>
  state.Settings.Expansions.UpgradedBasicNemesisCards
    .upgradedBasicNemesisCardIds

const getUpgradedBasicNemesisCardIdsByExpansionId = createSelector(
  [
    getUpgradedBasicNemesisCards,
    getUpgradedBasicNemesisCardIds,
    getExpansionId,
  ],
  (upgradedBasicNemesisCards, upgradedBasicNemesisCardIds, expansionId) =>
    upgradedBasicNemesisCardIds.filter(
      upgradedBasicNemesisCardId =>
        upgradedBasicNemesisCards[upgradedBasicNemesisCardId].expansion ===
        expansionId
    )
)

const getUpgradedBasicNemesisCardsByExpansionId = createSelector(
  [getUpgradedBasicNemesisCards, getUpgradedBasicNemesisCardIdsByExpansionId],
  (upgradedBasicNemesisCards, upgradedBasicNemesisCardIds) =>
    upgradedBasicNemesisCardIds.map(
      upgradedBasicNemesisCardId =>
        upgradedBasicNemesisCards[upgradedBasicNemesisCardId]
    )
)

const getUpgradedBasicNemesisCardList = createSelector(
  [getUpgradedBasicNemesisCards, getUpgradedBasicNemesisCardIds],
  (cards, ids) => ids.map(id => cards[id])
)

// Selected

const getSelectedUpgradedBasicNemesisCardIds = createSelector(
  [getUpgradedBasicNemesisCards, getUpgradedBasicNemesisCardIds],
  (upgradedBasicNemesisCards, ids) =>
    ids.filter(id => upgradedBasicNemesisCards[id].selected)
)

const getSelectedUpgradedBasicNemesisCards = createSelector(
  [getUpgradedBasicNemesisCards, getSelectedUpgradedBasicNemesisCardIds],
  (upgradedBasicNemesisCards, ids) =>
    ids.map(id => upgradedBasicNemesisCards[id])
)

export const selectors = {
  getUpgradedBasicNemesisCards,
  getUpgradedBasicNemesisCardIds,
  getUpgradedBasicNemesisCardIdsByExpansionId,
  getUpgradedBasicNemesisCardsByExpansionId,
  getUpgradedBasicNemesisCardList,
  getSelectedUpgradedBasicNemesisCards,
}
