import { createAction, ActionsUnion } from '@martin_hotell/rex-tils'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'
import { get as getFromDb, set as setToDb } from 'idb-keyval'

import * as types from 'types'
import config from 'config'

import { RootState } from 'Redux/Store'

const BASIC_NEMESIS_CARDS_DB_KEY = 'basicNemesisCards-1.8'

///////////
// STATE //
///////////

type SelectedBasicNemesisCards = {
  [key: string]: types.BasicNemesisCard & { selected: boolean }
}

export type State = Readonly<{
  basicNemesisCards: SelectedBasicNemesisCards
  basicNemesisCardIds: string[]
}>

export const initialState: State = {
  basicNemesisCards: config.NORMALIZEDDATA.basicNemesisCardIds.reduce(
    (acc, id) => ({
      ...acc,
      [id]: {
        ...config.NORMALIZEDDATA.basicNemesisCards[id],
        selected: true,
      },
    }),
    {}
  ),
  basicNemesisCardIds: config.NORMALIZEDDATA.basicNemesisCardIds,
}

/////////////
// ACTIONS //
/////////////

export enum ActionTypes {
  TOGGLE_CARD = 'Settings/Expansions/BasicNemesisCards/TOGGLE_CARD',
  SET_TO_DB = 'Settings/Expansions/BasicNemesisCards/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/BasicNemesisCards/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/BasicNemesisCards/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/BasicNemesisCards/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/BasicNemesisCards/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/BasicNemesisCards/FETCH_FROM_DB_FAILURE',
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
        basicNemesisCards: {
          ...state.basicNemesisCards,
          [action.payload]: {
            ...state.basicNemesisCards[action.payload],
            selected: !state.basicNemesisCards[action.payload].selected,
          },
        },
      }

      const selectedCardsToSave = state.basicNemesisCardIds.filter(
        id => newState.basicNemesisCards[id].selected
      )

      return loop(
        newState,
        Cmd.run(setToDb, {
          args: [BASIC_NEMESIS_CARDS_DB_KEY, selectedCardsToSave],
          successActionCreator: actions.setToDBSuccessful,
          failActionCreator: actions.setToDBFailed,
        })
      )
    }

    case ActionTypes.FETCH_FROM_DB: {
      return loop(
        state,
        Cmd.run(getFromDb, {
          args: [BASIC_NEMESIS_CARDS_DB_KEY],
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
      const newState = Object.values(state.basicNemesisCards).reduce(
        (acc, basicNemesisCard) => ({
          ...acc,
          basicNemesisCards: {
            ...acc.basicNemesisCards,
            [basicNemesisCard.id]: {
              ...basicNemesisCard,
              selected: selectedCards.includes(basicNemesisCard.id),
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

const getBasicNemesisCards = (state: RootState) =>
  state.Settings.Expansions.BasicNemesisCards.basicNemesisCards

const getBasicNemesisCardTier = (
  _: RootState,
  props: { tier: types.NemesisCardTier }
) => props.tier

const getExpansionId = (_: any, id: string) => id

const getBasicNemesisCardIds = (state: RootState) =>
  state.Settings.Expansions.BasicNemesisCards.basicNemesisCardIds

const getBasicNemesisCardById = (state: RootState, props: { id: string }) =>
  state.Settings.Expansions.BasicNemesisCards.basicNemesisCards[props.id]

const getBasicNemesisCardIdsByTier = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIds, getBasicNemesisCardTier],
  (basicNemesisCards, ids, tier) =>
    ids
      .map(id => basicNemesisCards[id])
      .filter(basicNemesisCard => basicNemesisCard.tier === tier)
      .map(basicNemesisCard => basicNemesisCard.id)
)

const getBasicNemesisCardIdsByExpansionId = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIds, getExpansionId],
  (basicNemesisCards, basicNemesisCardIds, expansionId) =>
    basicNemesisCardIds.filter(
      basicNemesisCardId =>
        basicNemesisCards[basicNemesisCardId].expansion === expansionId
    )
)

const getBasicNemesisCardsByExpansionId = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIdsByExpansionId],
  (basicNemesisCards, basicNemesisCardIds) =>
    basicNemesisCardIds.map(
      basicNemesisCardId => basicNemesisCards[basicNemesisCardId]
    )
)

const getBasicNemesisCardList = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIds],
  (basicNemesisCards, ids) => ids.map(id => basicNemesisCards[id])
)

const getBasicNemesisCardListByTier = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIdsByTier],
  (basicNemesisCards, ids) => ids.map(id => basicNemesisCards[id])
)

// Selected

const getSelectedBasicNemesisCardIds = createSelector(
  [getBasicNemesisCards, getBasicNemesisCardIds],
  (basicNemesisCards, ids) => ids.filter(id => basicNemesisCards[id].selected)
)

const getSelectedBasicNemesisCards = createSelector(
  [getBasicNemesisCards, getSelectedBasicNemesisCardIds],
  (basicNemesisCards, ids) => ids.map(id => basicNemesisCards[id])
)

const getSelectedBasicNemesisCardIdsByTier = createSelector(
  [
    getBasicNemesisCards,
    getSelectedBasicNemesisCardIds,
    getBasicNemesisCardTier,
  ],
  (basicNemesisCards, ids, tier) =>
    ids
      .map(id => basicNemesisCards[id])
      .filter(basicNemesisCard => basicNemesisCard.tier === tier)
      .map(basicNemesisCard => basicNemesisCard.id)
)

const getSelectedBasicNemesisCardListByTier = createSelector(
  [getBasicNemesisCards, getSelectedBasicNemesisCardIdsByTier],
  (basicNemesisCards, ids) => ids.map(id => basicNemesisCards[id])
)

export const selectors = {
  getBasicNemesisCards,
  getBasicNemesisCardIds,
  getBasicNemesisCardIdsByExpansionId,
  getBasicNemesisCardsByExpansionId,
  getBasicNemesisCardIdsByTier,
  getBasicNemesisCardListByTier,
  getBasicNemesisCardById,
  getBasicNemesisCardList,
  getSelectedBasicNemesisCards,
  getSelectedBasicNemesisCardIdsByTier,
  getSelectedBasicNemesisCardListByTier,
}
